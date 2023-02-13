import { UseGuards } from '@nestjs/common';
import { Args, Float, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PaginationArgs } from 'src/helpers/pagination.args';
import { SortingArgs } from 'src/helpers/sorting.args';
import { OrdersService } from 'src/orders/orders.service';
import { Roles } from 'src/roles/decorators/roles.decorator';
import { RolesGuard } from 'src/roles/guards/roles.guard';
import { PaginatedUsers } from './models/paginated-users.model';
import { User } from './models/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private ordersService: OrdersService
  ) {}

  @UseGuards(JwtAuthGuard)
  @ResolveField(() => Float)
  async ordersAmount(@Parent() user: User): Promise<number> {
    const orders = await this.ordersService.findByUserId(user.id);
    const ordersAmount = orders.reduce((sum, item) => sum + item.amount, 0);
    return ordersAmount;
  }

  @UseGuards(JwtAuthGuard)
  @ResolveField(() => Float)
  async redemptionAmount(@Parent() user: User): Promise<number> {
    const orders = await this.ordersService.findByUserId(user.id);
    let redemptionAmount = 0;
    orders.forEach(order => {
      order.orderProducts.forEach(orderProduct => {
        redemptionAmount += orderProduct.paid ? orderProduct.paid * orderProduct.product.price : 0;
      });
    });
    return redemptionAmount;
  }

  @UseGuards(JwtAuthGuard)
  @ResolveField(() => Float)
  async redemptionPercent(@Parent() user: User): Promise<number> {
    const orders = await this.ordersService.findByUserId(user.id);
    const ordersAmount = orders.reduce((sum, item) => sum + item.amount, 0);
    if (!ordersAmount) return 0;
    let redemptionAmount = 0;
    orders.forEach(order => {
      order.orderProducts.forEach(orderProduct => {
        redemptionAmount += orderProduct.paid ? orderProduct.paid * orderProduct.product.price : 0;
      });
    });
    const redemptionPercent = redemptionAmount / ordersAmount * 100;
    return redemptionPercent;
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Query(() => PaginatedUsers, { name: 'users' })
  async users(
    @Args() { skip, take }: PaginationArgs,
    @Args() { sortBy, order }: SortingArgs,
  ): Promise<PaginatedUsers> {
    return await this.usersService.find(skip, take, sortBy, order);
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Query(() => User, { name: 'user' })
  async user(
    @Args('id') id: string
  ): Promise<User> {
    return await this.usersService.findOne({ id });
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Mutation(() => Boolean, { name: 'toggleBanUser' })
  async toggleBanUser(@Args('id') id: string): Promise<Boolean> {
    const user = await this.usersService.findOne({ id });
    if (user.isBanned) await this.usersService.updateOne(id, { isBanned: false })
    else await this.usersService.updateOne(id, { isBanned: true })
    return true
  }
}
