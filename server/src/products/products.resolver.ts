import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CategoriesService } from 'src/categories/categories.service';
import { Roles } from 'src/roles/decorators/roles.decorator';
import { RolesGuard } from 'src/roles/guards/roles.guard';
import { CreateProduct } from './models/create-product.input';
import { Product } from './models/product.entity';
import { ProductsService } from './products.service';

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
    const { price, categoryId } = createProduct;
    const category = await this.categoriesService.findOne({ id: categoryId });
    return await this.productsService.create(price, category);
  }

  @Query(() => [Product], { name: 'products' })
  async find(): Promise<Product[]> {
    return await this.productsService.findAll();
  }
}
