import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from 'src/images/models/image.entity';
import { Product } from 'src/products/models/product.entity';
import { Repository } from 'typeorm';
import { ProductImage } from './models/product-image.entity';

@Injectable()
export class ProductsImagesService {
  constructor(
    @InjectRepository(ProductImage) private productsImagesRepository: Repository<ProductImage>
  ) {}

  async create(product: Product, image: Image, order: number): Promise<ProductImage> {
    const productImage = new ProductImage();
    productImage.product = product;
    productImage.image = image;
    productImage.order = order;
    return await this.productsImagesRepository.save(productImage);
  }
}
