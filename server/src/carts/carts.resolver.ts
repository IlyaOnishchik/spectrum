import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { User } from 'src/users/models/user.entity';
import { CartsService } from './carts.service';
import { Cart } from './models/cart.entity';

@Resolver()
export class CartsResolver {
  constructor(
    private cartsService: CartsService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => Cart, { name: 'cart' })
  async findOne(
    @CurrentUser() { id }: Pick<User, 'id'>,
  ): Promise<Cart> {
    return await this.cartsService.findOneByUserId(id);
  }
}
