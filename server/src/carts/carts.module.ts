import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartsService } from './carts.service';
import { Cart } from './models/cart.entity';
import { CartsResolver } from './carts.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Cart])],
  providers: [CartsService, CartsResolver]
})
export class CartsModule {}
