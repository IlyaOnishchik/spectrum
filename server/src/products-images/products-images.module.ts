import { Module } from '@nestjs/common';
import { ProductsImagesService } from './products-images.service';
import { ProductsImagesResolver } from './products-images.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductImage } from './models/product-image.entity';
import { ProductsModule } from 'src/products/products.module';
import { ImagesModule } from 'src/images/images.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProductImage]), ProductsModule, ImagesModule],
  providers: [ProductsImagesService, ProductsImagesResolver]
})
export class ProductsImagesModule {}
