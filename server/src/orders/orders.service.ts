import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderProduct } from 'src/orders-products/models/order-product.entity';
import { User } from 'src/users/models/user.entity';
import { Repository } from 'typeorm';
import { CreateOrder } from './models/create-order.input';
import { OrderStatuses } from './models/order-statuses.enum';
import { Order } from './models/order.entity';
import { PaginatedOrders } from './models/paginated-orders.model';

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

  async find(skip: number, take: number, sortBy: string, order: string): Promise<PaginatedOrders> {
    const result = await this.ordersRepository.findAndCount({
      take,
      skip,
      order: { [sortBy]: order },
      relations: {
        user: true,
        orderProducts: {
          product: true
        }
      }
    });
    return { items: result[0], count: result[1] }
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

  async updateOneById(id: string, status: OrderStatuses): Promise<Boolean> {
    const result = await this.ordersRepository.update(id, { status });
    return !!result.affected; 
  }
}
