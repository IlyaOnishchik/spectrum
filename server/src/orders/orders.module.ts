import { forwardRef, Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './models/order.entity';
import { CartsModule } from 'src/carts/carts.module';
import { UsersModule } from 'src/users/users.module';
import { OrdersProductsModule } from 'src/orders-products/orders-products.module';
import { CartsProductsModule } from 'src/carts-products/carts-products.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), CartsModule, forwardRef(() => UsersModule), OrdersProductsModule, CartsProductsModule],
  providers: [OrdersService, OrdersResolver],
  exports: [OrdersService]
})
export class OrdersModule {}
