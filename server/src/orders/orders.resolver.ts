import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CartsProductsService } from 'src/carts-products/carts-products.service';
import { CartsService } from 'src/carts/carts.service';
import { OrdersProductsService } from 'src/orders-products/orders-products.service';
import { User } from 'src/users/models/user.entity';
import { UsersService } from 'src/users/users.service';
import { CreateOrder } from './models/create-order.input';
import { Order } from './models/order.entity';
import { OrdersService } from './orders.service';

@Resolver()
export class OrdersResolver {
  constructor(
    private ordersService: OrdersService,
    private cartsService: CartsService,
    private usersService: UsersService,
    private ordersProductsService: OrdersProductsService,
    private cartsProductsService: CartsProductsService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Order, { name: 'createOrder' })
  async create(
    @CurrentUser() { id }: Pick<User, 'id'>,
    @Args('createOrder') createOrder: CreateOrder
  ): Promise<Order> {
    const user = await this.usersService.findOne({ id });
    const { products } = await this.cartsService.findOneByUserId(id);
    const amount = products.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const order = await this.ordersService.create(user, amount, createOrder);
    products.forEach(async (item) => {
      await this.ordersProductsService.create(order, item.product, item.quantity);
      await this.cartsProductsService.remove(item);
    })
    return order;
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [Order], { name: 'orders' })
  async find(
    @CurrentUser() { id }: Pick<User, 'id'>
  ): Promise<Order[]> {
    return await this.ordersService.findByUserId(id);
  }
}
