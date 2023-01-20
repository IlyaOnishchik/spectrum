import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ImagesService } from 'src/images/images.service';
import { ProductsService } from 'src/products/products.service';
import { Roles } from 'src/roles/decorators/roles.decorator';
import { RolesGuard } from 'src/roles/guards/roles.guard';
import { CreateProductImage } from './models/create-product-image.input';
import { ProductImage } from './models/product-image.entity';
import { ProductsImagesService } from './products-images.service';

@Resolver()
export class ProductsImagesResolver {
  constructor(
    private productsImagesService: ProductsImagesService,
    private productsService: ProductsService,
    private imagesService: ImagesService
  ) {}

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Mutation(() => ProductImage, { name: 'createProductImage' })
  async create(@Args('createProductImage') createProductImage: CreateProductImage ): Promise<ProductImage> {
    const { productId, imageId, order } = createProductImage;
    const product = await this.productsService.findOne({ id: productId });
    const image = await this.imagesService.findOne({ id: imageId });
    return await this.productsImagesService.create(product, image, order);
  }
}
