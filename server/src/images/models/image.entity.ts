import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from 'src/categories/models/category.entity';
import { Product } from 'src/products/models/product.entity';
import { ProductImage } from 'src/products-images/models/product-image.entity';

@Entity('images')
@ObjectType()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({ unique: true })
  @Field()
  name: string;

  @OneToOne(() => ProductImage, productImage => productImage.image)
  @Field(() => ProductImage)
  productImage: ProductImage;
}
