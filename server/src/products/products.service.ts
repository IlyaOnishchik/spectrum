import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/models/category.entity';
import { Repository } from 'typeorm';
import { Product } from './models/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>
  ) {}

  async create(price: number, category: Category): Promise<Product> {
    const product = new Product();
    product.price = price;
    product.category = category;
    return await this.productsRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return await this.productsRepository.find({
      relations: {
        images: {
          image: true
        },
        category: true
      }
    });
  }

  async findOne(where: Partial<Product>): Promise<Product> {
    return await this.productsRepository.findOne({ where });
  }
}
