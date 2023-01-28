import { Field, Int, ObjectType } from "@nestjs/graphql";
import { CartProduct } from "src/carts-products/models/cart-product.entity";
import { Cart } from "src/carts/models/cart.entity";
import { Category } from "src/categories/models/category.entity";
import { Favorites } from "src/favorites/models/favorites.entity";
import { Image } from "src/images/models/image.entity";
import { ProductImage } from "src/products-images/models/product-image.entity";
import { ProductParameter } from "src/products-parameters/models/product-parameter.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @OneToMany(() => ProductParameter, productParameter => productParameter.product)
  @Field(() => [ProductParameter])
  parameters: ProductParameter[];

  @Column()
  @Field(() => Int)
  quantity: number;

  @OneToMany(() => CartProduct, cartProduct => cartProduct.product)
  @Field(() => [CartProduct], { nullable: true })
  cartProducts: CartProduct[];

  @ManyToMany(() => Favorites, favorites => favorites.products)
  @Field(() => [Favorites], { nullable: true })
  favorites: Favorites[];
}