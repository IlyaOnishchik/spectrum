import { Injectable } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/models/category.entity';
import { Between, LessThan, MoreThan, Repository } from 'typeorm';
import { FiltersInput } from './models/filters.model';
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
    const { categoryId, take, skip, sortBy, order, minPrice, maxPrice, filters } = findProductsArgs;

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

    return { 
      items: filters ? this.filterProducts(result[0], filters) : result[0], 
      count: result[1] 
    };
  }

  async findOne(where: Partial<Product>): Promise<Product> {
    return await this.productsRepository.findOne({ where });
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
}