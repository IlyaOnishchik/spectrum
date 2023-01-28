import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User } from './models/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }

  async findOne(where: Partial<User>): Promise<User> {
    return await this.usersRepository.findOne({
      where,
      relations: {
        roles: true,
        cart: {
          products: {
            product: {
              images: { image: true },
              parameters: { parameter: true }
            }
          }
        },
        favorites: {
          products: {
            images: { image: true },
            parameters: { parameter: true },
          }
        }
      },
    });
  }

  async updateOne(criteria, partialUser: Partial<User>): Promise<UpdateResult> {
    return await this.usersRepository.update(criteria, partialUser);
  }
}
