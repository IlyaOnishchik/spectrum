import { Injectable } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/models/category.entity';
import { Between, LessThan, MoreThan, Repository } from 'typeorm';
import { FindProductsArgs } from './models/find-products.args';
import { Product } from './models/product.entity';

@ObjectType()
export class PaginatedProductsRepsonse {
  @Field(() => [Product])
  items: Product[];

  @Field(() => Int)
  count: number;
}

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

  async findAndCount(findProductsArgs: FindProductsArgs): Promise<PaginatedProductsRepsonse> {
    const { categoryId, take, skip, sortBy, order, minPrice, maxPrice } = findProductsArgs;
    const result = await this.productsRepository.findAndCount({
      take,
      skip,
      order: { [sortBy]: order },
      where: {
        category: { id: categoryId },
        price: minPrice && maxPrice ? Between(minPrice, maxPrice) : minPrice ? MoreThan(minPrice) : maxPrice ? LessThan(maxPrice) : null
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
    return { items: result[0], count: result[1] };
  }

  async findOne(where: Partial<Product>): Promise<Product> {
    return await this.productsRepository.findOne({ where });
  }
}
