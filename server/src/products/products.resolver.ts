import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Field, Float, Int, Mutation, ObjectType, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CategoriesService } from 'src/categories/categories.service';
import { Roles } from 'src/roles/decorators/roles.decorator';
import { RolesGuard } from 'src/roles/guards/roles.guard';
import { CreateProduct } from './models/inputs/create-product.input';
import { FindProduct } from './models/args/find-product.args';
import { FindProducts } from './models/args/find-products.args';
import { ProductRating } from './models/product-rating.model';
import { Product } from './models/product.entity';
import { PaginatedProductsRepsonse, ProductsService } from './products.service';
import { UpdateProductInput } from './models/inputs/update-product.input';
import { PricesHistoryService } from 'src/prices-history/prices-history.service';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private priceHistoryService: PricesHistoryService,
  ) {}

  @ResolveField(() => String)
  name(@Parent() product: Product) {
    const brand = product.parameters.find(item => item.parameter.name === 'Brand').value;
    const model = product.parameters.find(item => item.parameter.name === 'Model').value;
    const name = brand + ' ' + model;
    return name;
  }

  @ResolveField(() => ProductRating)
  rating(@Parent() product: Product) {
    const value = product.ratings.map(item => item.value).reduce((sum, item) => sum + item, 0) / product.ratings.length || 0;
    const count = product.ratings.length || 0;
    return { value, count };
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Mutation(() => Product, { name: 'createProduct' })
  async create(@Args('createProduct') createProduct: CreateProduct): Promise<Product> {
    const { price, categoryId, quantity } = createProduct;
    const category = await this.categoriesService.findOne({ id: categoryId });
    return await this.productsService.create(price, category, quantity);
  }

  @Query(() => PaginatedProductsRepsonse, { name: 'products' })
  async findAndCount(@Args() findProducts: FindProducts): Promise<PaginatedProductsRepsonse> {
    return await this.productsService.findAndCount(findProducts);
  }

  @Query(() => Product, { name: 'product' })
  async findOne(@Args() findProduct: FindProduct): Promise<Product> {
    return await this.productsService.findOne(findProduct);
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Mutation(() => Product, { name: 'updateProduct' })
  async updateOne(
    @Args('updateProductInput') updateProductInput: UpdateProductInput
  ): Promise<Product> {
    const { id, price } = updateProductInput;
    let product = await this.productsService.findOne({ id });
    if (!product) throw new NotFoundException(`Product ${id} not found`);
    if (price) {
      await this.priceHistoryService.create(product);
      product = await this.productsService.findOne({ id });
    }
    return await this.productsService.updateOne(product, price);
  }
}
