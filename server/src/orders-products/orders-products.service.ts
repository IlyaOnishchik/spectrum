import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/orders/models/order.entity';
import { Product } from 'src/products/models/product.entity';
import { Repository } from 'typeorm';
import { OrderProduct } from './models/order-product.entity';

@Injectable()
export class OrdersProductsService {
  constructor(
    @InjectRepository(OrderProduct) private ordersProductsRepository: Repository<OrderProduct>
  ) {}

  async create(order: Order, product: Product, quantity: number): Promise<OrderProduct> {
    const orderProduct = new OrderProduct();
    orderProduct.order = order;
    orderProduct.product = product;
    orderProduct.quantity = quantity;
    return await this.ordersProductsRepository.save(orderProduct);
  }
}
