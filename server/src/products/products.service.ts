import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/models/category.entity';
import { Repository } from 'typeorm';
import { FindProductsArgs } from './models/find-products.args';
import { Product } from './models/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>
  ) {}

  async create(price: number, category: Category, quantity: number): Promise<Product> {
    const product = new Product();
    product.price = price;
    product.category = category;
    product.quantity = quantity;
    return await this.productsRepository.save(product);
  }

  async findAndCount() {
    return await this.productsRepository.findAndCount();
  }

  async find(findProductsArgs: FindProductsArgs): Promise<Product[]> {
    const { categoryId, take, skip } = findProductsArgs;
    return await this.productsRepository.find({
      take,
      skip,
      where: {
        category: { id: categoryId }
      },
      relations: {
        category: true,
        images: {
          image: true
        },
        parameters: {
          parameter: true
        }
      },
    });
  }

  async findOne(where: Partial<Product>): Promise<Product> {
    return await this.productsRepository.findOne({ where });
  }
}
