import { Module } from '@nestjs/common';
import { OrdersProductsService } from './orders-products.service';
import { OrdersProductsResolver } from './orders-products.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProduct } from './models/order-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderProduct])],
  providers: [OrdersProductsService, OrdersProductsResolver]
})
export class OrdersProductsModule {}
