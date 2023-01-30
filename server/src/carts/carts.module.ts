import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartsService } from './carts.service';
import { Cart } from './models/cart.entity';
import { CartsResolver } from './carts.resolver';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Cart]), UsersModule],
  providers: [CartsService, CartsResolver]
})
export class CartsModule {}
