import { Module } from '@nestjs/common';
import { ProductsParametersService } from './products-parameters.service';
import { ProductsParametersResolver } from './products-parameters.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductParameter } from './models/product-parameter.entity';
import { ProductsModule } from 'src/products/products.module';
import { ParametersModule } from 'src/parameters/parameters.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProductParameter]), ProductsModule, ParametersModule],
  providers: [ProductsParametersService, ProductsParametersResolver]
})
export class ProductsParametersModule {}
