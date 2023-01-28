import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartsProductsService } from './carts-products.service';
import { CartProduct } from './models/cart-product.entity';
import { CartsProductsResolver } from './carts-products.resolver';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [TypeOrmModule.forFeature([CartProduct]), UsersModule, ProductsModule],
  providers: [CartsProductsService, CartsProductsResolver],
})
export class CartsProductsModule {}
