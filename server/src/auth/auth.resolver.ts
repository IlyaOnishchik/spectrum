import {
  ConflictException,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { RolesService } from 'src/roles/roles.service';
import { Credentials } from './models/credentials.input';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from 'src/users/models/user.entity';
import { JwtPayload } from './models/jwt-payload.model';
import { Cart } from 'src/carts/models/cart.entity';
import { Favorites } from 'src/favorites/models/favorites.entity';
import { Compared } from 'src/compared/models/compared.entity';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private rolesService: RolesService,
    private jwtService: JwtService,
  ) {}

  @Mutation(() => String)
  async signUp(@Args('credentials') credentials: Credentials): Promise<string> {
    const { email, password } = credentials;
    const candidate = await this.usersService.findOne({ email });
    if (candidate)
      throw new ConflictException('User with this email already exists!');
    const passwordHash = await bcrypt.hashSync(password, 5);
    const user = new User();
    user.cart = new Cart();
    user.favorites = new Favorites();
    user.compared = new Compared();
    user.email = email;
    user.passwordHash = passwordHash;
    const activationLink = uuidv4();
    user.activationLink = activationLink;
    const defaultRole = await this.rolesService.findOne({ name: 'user' });
    user.roles = [defaultRole];
    const createdUser = await this.usersService.create(user);
    const payload: JwtPayload = {
      id: createdUser.id,
      email: createdUser.email,
      roles: createdUser.roles
    };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '30d' });
    await this.authService.sendActivationMail(
      createdUser.email,
      `${process.env.SERVER_URL}/auth/activate/${createdUser.activationLink}`,
    );
    return accessToken;
  }

  @Mutation(() => String)
  async signIn(@Args('credentials') credentials: Credentials): Promise<string> {
    const { email, password } = credentials;
    const user = await this.usersService.findOne({ email });
    if (!user) throw new UnauthorizedException('User not found!');
    const isMatch = bcrypt.compareSync(password, user.passwordHash);
    if (!isMatch) throw new UnauthorizedException('Wrong password!');
    const payload: JwtPayload = { id: user.id, email: user.email, roles: user.roles };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '30d' });
    return accessToken;
  }

  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  async currentUser(
    @CurrentUser() user: Pick<User, 'id' | 'email'>,
  ): Promise<User> {
    return await this.usersService.findOne({ email: user.email });
  }
}
