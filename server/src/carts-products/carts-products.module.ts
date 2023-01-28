import { Module } from '@nestjs/common';
import { CartsProductsService } from './carts-products.service';

@Module({
  providers: [CartsProductsService]
})
export class CartsProductsModule {}
