import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/models/product.entity';
import { User } from 'src/users/models/user.entity';
import { Repository } from 'typeorm';
import { Rating } from './models/rating.entity';

@Injectable()
export class RatingsService {
  constructor(
    @InjectRepository(Rating) private ratingsRepository: Repository<Rating> 
  ) {}

  async create(user: User, product: Product, value: number): Promise<Rating> {
    const rating = new Rating();
    rating.user = user;
    rating.product = product;
    rating.value = value;
    return await this.ratingsRepository.save(rating);
  }
}
