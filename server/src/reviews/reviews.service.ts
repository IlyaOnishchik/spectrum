import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/models/product.entity';
import { User } from 'src/users/models/user.entity';
import { Repository } from 'typeorm';
import { Review } from './models/review.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review) private reviewsRepository: Repository<Review>
  ) {}

  async create(user: User, product: Product, text: string): Promise<Review> {
    const review = new Review();
    review.user = user;
    review.product = product;
    review.text = text;
    return await this.reviewsRepository.save(review);
  }
}
