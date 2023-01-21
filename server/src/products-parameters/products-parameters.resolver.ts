import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ParametersService } from 'src/parameters/parameters.service';
import { ProductsService } from 'src/products/products.service';
import { CreateProductParameter } from './models/create-product-parameter.input';
import { ProductParameter } from './models/product-parameter.entity';
import { ProductsParametersService } from './products-parameters.service';

@Resolver()
export class ProductsParametersResolver {
  constructor(
    private productsParametersService: ProductsParametersService,
    private productsService: ProductsService,
    private parametersService: ParametersService
  ) {}

  @Mutation(() => ProductParameter, { name: 'createProductParameter' })
  async create(@Args('createProductParameter') createProductParameter: CreateProductParameter): Promise<ProductParameter> {
    const { productId, parameterId, value } = createProductParameter;
    const product = await this.productsService.findOne({ id: productId });
    const parameter = await this.parametersService.findOne({ id: parameterId });
    return await this.productsParametersService.create(product, parameter, value);
  }
}
