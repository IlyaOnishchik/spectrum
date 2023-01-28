import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ProductsService } from 'src/products/products.service';
import { User } from 'src/users/models/user.entity';
import { UsersService } from 'src/users/users.service';
import { CartsService } from './carts.service';
import { Cart } from './models/cart.entity';

@Resolver()
export class CartsResolver {
  constructor(
    private cartsService: CartsService,
    private usersService: UsersService,
    private productsService: ProductsService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Cart, { name: 'toggleCartProduct' })
  async toggleProduct(
    @CurrentUser() { id }: Pick<User, 'id'>,
    @Args('productId') productId: string
  ): Promise<Cart> {
    const { cart } = await this.usersService.findOne({ id });
    const product = await this.productsService.findOne({ id: productId });
    if (cart.products.find(item => item.id === product.id)) {
      cart.products = cart.products.filter(item => item.id !== product.id)
    } else {
      cart.products.push(product);
    }
    return await this.cartsService.save(cart);
  }
}
