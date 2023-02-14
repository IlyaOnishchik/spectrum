import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './models/product.entity';
import { ImagesModule } from 'src/images/images.module';
import { CategoriesModule } from 'src/categories/categories.module';
import { PricesHistoryModule } from 'src/prices-history/prices-history.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), ImagesModule, CategoriesModule, PricesHistoryModule],
  providers: [ProductsService, ProductsResolver],
  exports: [ProductsService]
})
export class ProductsModule {}
