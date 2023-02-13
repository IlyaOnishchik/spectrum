import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { PaginatedUsers } from './models/paginated-users.model';
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
        cart: true,
        favorites: true,
        compared: true,
      },
    });
  }

  async updateOne(criteria, partialUser: Partial<User>): Promise<UpdateResult> {
    return await this.usersRepository.update(criteria, partialUser);
  }

  async find(skip: number, take: number, sortBy: string, order: string): Promise<PaginatedUsers> {
    const result = await this.usersRepository.findAndCount({
      take,
      skip,
      order: { [sortBy]: order },
      relations: {
        roles: true
      }
    });
    return { items: result[0], count: result[1] }
  }
}
