import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Category } from "src/categories/models/category.entity";
import { Image } from "src/images/models/image.entity";
import { ProductImage } from "src/products-images/models/product-image.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @OneToMany(() => ProductImage, productImage => productImage.product)
  @Field(() => [ProductImage])
  images: ProductImage[];

  @Column()
  @Field(() => Int)
  price: number;

  @ManyToOne(() => Category, category => category.products)
  @Field(() => Category)
  category: Category;
}