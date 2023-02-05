import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/models/user.entity';
import { Repository, UpdateResult } from 'typeorm';
import { Cart } from './models/cart.entity';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(Cart) private cartsRepository: Repository<Cart>
  ) {}

  async create(): Promise<Cart> {
    const cart = new Cart();
    return await this.cartsRepository.save(cart);
  }

  async findOneByUserId(userId: string): Promise<Cart> {
    return await this.cartsRepository.findOne({
      where: { user: { id: userId } },
      relations: {
        products: {
          product: {
            images: { image: true },
            parameters: { parameter: true }
          }
        }
      }
    });
  }
}
