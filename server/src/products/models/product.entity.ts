import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { CartProduct } from "src/carts-products/models/cart-product.entity";
import { Cart } from "src/carts/models/cart.entity";
import { Category } from "src/categories/models/category.entity";
import { Compared } from "src/compared/models/compared.entity";
import { Favorites } from "src/favorites/models/favorites.entity";
import { Image } from "src/images/models/image.entity";
import { OrderProduct } from "src/orders-products/models/order-product.entity";
import { ProductImage } from "src/products-images/models/product-image.entity";
import { ProductParameter } from "src/products-parameters/models/product-parameter.entity";
import { Rating } from "src/ratings/models/rating.entity";
import { Review } from "src/reviews/models/review.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductRating } from "./product-rating.model";

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

  @ManyToMany(() => Compared, compared => compared.products)
  @Field(() => [Compared], { nullable: true })
  compared: Compared[];

  @OneToMany(() => Review, review => review.product)
  @Field(() => [Review], { nullable: true })
  reviews: Review[];

  @OneToMany(() => Rating, rating => rating.product)
  @Field(() => [Rating], { nullable: true })
  ratings: Rating[];

  @Field()
  name: string;

  @Field(() => ProductRating)
  rating: ProductRating;

  @OneToMany(() => OrderProduct, orderProduct => orderProduct.product)
  @Field(() => [OrderProduct], { nullable: true })
  orderProducts: OrderProduct[];
}