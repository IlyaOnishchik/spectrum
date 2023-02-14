import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/models/product.entity';
import { Repository } from 'typeorm';
import { PriceHistory } from './models/price-history.entity';

@Injectable()
export class PricesHistoryService {
  constructor(
    @InjectRepository(PriceHistory) private priceHistoryRepository: Repository<PriceHistory>
  ) {}

  async create(product: Product): Promise<PriceHistory> {
    const priceHistory = new PriceHistory();
    priceHistory.product = product;
    priceHistory.value = product.price;
    return await this.priceHistoryRepository.save(priceHistory);
  }
}
