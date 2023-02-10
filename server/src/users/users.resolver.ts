import { UseGuards } from '@nestjs/common';
import { Float, ResolveField, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { OrdersService } from 'src/orders/orders.service';
import { User } from './models/user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private ordersService: OrdersService
  ) {}

  @UseGuards(JwtAuthGuard)
  @ResolveField(() => Float)
  async ordersAmount(
    @CurrentUser() { id }: Pick<User, 'id'>
  ): Promise<number> {
    const orders = await this.ordersService.findByUserId(id);
    const ordersAmount = orders.reduce((sum, item) => sum + item.amount, 0);
    return ordersAmount;
  }

  @UseGuards(JwtAuthGuard)
  @ResolveField(() => Float)
  async redemptionAmount(
    @CurrentUser() { id }: Pick<User, 'id'>
  ): Promise<number> {
    const orders = await this.ordersService.findByUserId(id);
    const redemptionAmount = orders.filter(item => item.status === 'paid').reduce((sum, item) => sum + item.amount, 0);
    return redemptionAmount;
  }

  @UseGuards(JwtAuthGuard)
  @ResolveField(() => Float)
  async redemptionPercent(
    @CurrentUser() { id }: Pick<User, 'id'>
  ): Promise<number> {
    const orders = await this.ordersService.findByUserId(id);
    const ordersAmount = orders.reduce((sum, item) => sum + item.amount, 0);
    const redemptionAmount = orders.filter(item => item.status === 'paid').reduce((sum, item) => sum + item.amount, 0);
    const redemptionPercent = redemptionAmount / ordersAmount * 100;
    return redemptionPercent;
  }
}
