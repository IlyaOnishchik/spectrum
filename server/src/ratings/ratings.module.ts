import { Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { RatingsResolver } from './ratings.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rating } from './models/rating.entity';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [TypeOrmModule.forFeature([Rating]), UsersModule, ProductsModule],
  providers: [RatingsService, RatingsResolver],
  exports: [RatingsService]
})
export class RatingsModule {}
