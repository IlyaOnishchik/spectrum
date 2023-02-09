import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderProduct } from 'src/orders-products/models/order-product.entity';
import { User } from 'src/users/models/user.entity';
import { Repository } from 'typeorm';
import { CreateOrder } from './models/create-order.input';
import { Order } from './models/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private ordersRepository: Repository<Order>
  ) {}

  async create(user: User, amount: number, { name, phone, country, city, address, zipCode }: CreateOrder): Promise<Order> {
    const order = new Order();
    order.user = user;
    order.amount = amount;
    order.name = name;
    order.phone = phone;
    order.country = country;
    order.city = city;
    order.address = address;
    order.zipCode = zipCode;
    return await this.ordersRepository.save(order);
  }

  async find(): Promise<Order[]> {
    return await this.ordersRepository.find({
      relations: {
        user: true,
        orderProducts: {
          product: true
        }
      }
    });
  }

  async findByUserId(userId: string): Promise<Order[]> {
    return await this.ordersRepository.find({
      where: {
        user: { id: userId }
      },
      relations: {
        user: true,
        orderProducts: {
          product: true
        }
      }
    });
  }
}
