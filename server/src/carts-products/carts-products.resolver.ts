import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ProductsService } from 'src/products/products.service';
import { User } from 'src/users/models/user.entity';
import { UsersService } from 'src/users/users.service';
import { CartsProductsService } from './carts-products.service';
import { CartProduct } from './models/cart-product.entity';

@Resolver()
export class CartsProductsResolver {
  constructor(
    private cartsProductsService: CartsProductsService,
    private usersService: UsersService,
    private productsService: ProductsService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean, { name: 'toggleCartProduct' })
  async toggleProduct(
    @CurrentUser() { id }: Pick<User, 'id'>,
    @Args('productId') productId: string
  ): Promise<Boolean> {
    const { cart } = await this.usersService.findOne({ id });
    const product = await this.productsService.findOne({ id: productId });
    const cartProduct = await this.cartsProductsService.findOneByCartIdAndProductId(cart.id, product.id);
    if (cartProduct) await this.cartsProductsService.remove(cartProduct);
    else await this.cartsProductsService.create(cart, product);
    return true
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean, { name: 'changeCartProductQuantity' })
  async changeProductQuantity(
    @Args('id') id: string,
    @Args('quantity', { type: () => Int }) quantity: number
  ): Promise<Boolean> {
    const result = await this.cartsProductsService.updateOne({ id }, { quantity });
    return !!result.affected
  }
}
