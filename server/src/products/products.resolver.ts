import { UseGuards } from '@nestjs/common';
import { Args, Field, Int, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CategoriesService } from 'src/categories/categories.service';
import { Roles } from 'src/roles/decorators/roles.decorator';
import { RolesGuard } from 'src/roles/guards/roles.guard';
import { CreateProduct } from './models/create-product.input';
import { FindProduct } from './models/find-product';
import { FindProductsArgs } from './models/find-products.args';
import { Product } from './models/product.entity';
import { PaginatedProductsRepsonse, ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) {}

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Mutation(() => Product, { name: 'createProduct' })
  async create(@Args('createProduct') createProduct: CreateProduct): Promise<Product> {
    const { price, categoryId, quantity } = createProduct;
    const category = await this.categoriesService.findOne({ id: categoryId });
    return await this.productsService.create(price, category, quantity);
  }

  @Query(() => PaginatedProductsRepsonse, { name: 'products' })
  async findAndCount(@Args() findProductsArgs: FindProductsArgs): Promise<PaginatedProductsRepsonse> {
    return await this.productsService.findAndCount(findProductsArgs);
  }

  @Query(() => Product, { name: 'product' })
  async findOne(@Args() findProduct: FindProduct): Promise<Product> {
    return await this.productsService.findOne(findProduct);
  }
}
