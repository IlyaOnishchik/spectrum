import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Image } from "src/images/models/image.entity";
import { Product } from "src/products/models/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('products_images')
@ObjectType()
export class ProductImage {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @ManyToOne(() => Product, product => product.images)
  @Field(() => Product)
  product: Product;

  @OneToOne(() => Image)
  @JoinColumn()
  @Field(() => Image)
  image: Image;

  @Column()
  @Field(() => Int)
  order: number;
}