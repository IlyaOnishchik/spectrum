import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Parameter } from 'src/parameters/models/parameter.entity';
import { Product } from 'src/products/models/product.entity';
import { Repository } from 'typeorm';
import { ProductParameter } from './models/product-parameter.entity';

@Injectable()
export class ProductsParametersService {
  constructor(
    @InjectRepository(ProductParameter) private productsParametersRepository: Repository<ProductParameter>
  ) {}

  async create(product: Product, parameter: Parameter, value: string): Promise<ProductParameter> {
    const productParameter = new ProductParameter();
    productParameter.product = product;
    productParameter.parameter = parameter;
    productParameter.value = value;
    return await this.productsParametersRepository.save(productParameter);
  }
}
