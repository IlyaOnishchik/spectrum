import { ConflictException } from '@nestjs/common';
import { Args, Mutation, ObjectType, Resolver } from '@nestjs/graphql';
import { UsersService } from 'src/users/users.service';
import { Credentials } from './models/credentials.input';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/models/user.entity';
import { JwtPayload } from './models/jwt-payload.model';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuidv4 } from 'uuid';
import { RolesService } from 'src/roles/roles.service';
import { AuthService } from './auth.service';

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
    if (candidate) throw new ConflictException('User with this email already exists!');
    const passwordHash = await bcrypt.hashSync(password, 5);
    const user = new User();
    user.email = email;
    user.passwordHash = passwordHash;
    const activationLink = uuidv4();
    user.activationLink = activationLink;
    const defaultRole = await this.rolesService.findOne({ name: 'user' });
    user.roles = [defaultRole];
    const createdUser = await this.usersService.create(user);
    const payload: JwtPayload = { id: createdUser.id, email: createdUser.email };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '30m' });
    await this.authService.sendActivationMail(createdUser.email, `${process.env.SERVER_URL}/auth/activate/${createdUser.activationLink}`);
    return accessToken;
  }
}
