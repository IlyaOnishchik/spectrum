import { Injectable, NotFoundException } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/models/category.entity';
import { Between, ILike, In, LessThan, MoreThan, Repository } from 'typeorm';
import { FiltersInput } from './models/filters.model';
import { FindProducts } from './models/args/find-products.args';
import { Product } from './models/product.entity';
import { UpdateProductInput } from './models/inputs/update-product.input';

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

  async findAndCount(findProducts: FindProducts): Promise<PaginatedProductsRepsonse> {
    const { categoryId, take, skip, sortBy, order, minPrice, maxPrice, filters, query } = findProducts;

    const result = await this.productsRepository.findAndCount({
      take,
      skip,
      order: { [sortBy]: order },
      where: {
        category: { id: categoryId },
        price: minPrice && maxPrice ? Between(minPrice, maxPrice) : minPrice ? MoreThan(minPrice) : maxPrice ? LessThan(maxPrice) : null,
        parameters: {
          value: query ? ILike(`%${query}%`) : null
        }
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

    return { 
      items: filters ? this.filterProducts(result[0], filters) : result[0], 
      count: result[1] 
    };
  }

  async findOne(where: Partial<Product>): Promise<Product> {
    return await this.productsRepository.findOne({
      where,
      relations: {
        category: true,
        images: {
          image: true
        },
        parameters: {
          parameter: {
            category: true
          }
        },
        reviews: {
          user: true,
          product: true
        },
        ratings: true,
        pricesHistory: true
      }, 
    });
  }

  private filterProducts(products: Product[], filters: FiltersInput): Product[] {
    filters.checkFilters.forEach(filter => {
      if (filter.values.length) products = products.filter(product => product.parameters.find(productParameter => productParameter.parameter.name === filter.name && filter.values.find(item => item.value === productParameter.value)))
    })
    filters.rangeFilters.forEach(filter => {
      products = products.filter(product => product.parameters.find(productParameter => productParameter.parameter.name === filter.name && +productParameter.value >= filter.from && +productParameter.value <= filter.to))
    })
    return products;
  }

  async updateOne(product: Product, price?: number): Promise<Product> {
    product.price = price;
    return await this.productsRepository.save(product);
  }
}