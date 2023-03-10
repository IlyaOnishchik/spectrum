import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartsProductsService } from './carts-products.service';
import { CartProduct } from './models/cart-product.entity';
import { CartsProductsResolver } from './carts-products.resolver';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [TypeOrmModule.forFeature([CartProduct]), forwardRef(() => UsersModule), ProductsModule],
  providers: [CartsProductsService, CartsProductsResolver],
  exports: [CartsProductsService]
})
export class CartsProductsModule {}
