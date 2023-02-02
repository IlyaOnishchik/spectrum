import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsResolver } from './reviews.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './models/review.entity';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';
import { RatingsModule } from 'src/ratings/ratings.module';

@Module({
  imports: [TypeOrmModule.forFeature([Review]), UsersModule, ProductsModule, RatingsModule],
  providers: [ReviewsService, ReviewsResolver]
})
export class ReviewsModule {}
