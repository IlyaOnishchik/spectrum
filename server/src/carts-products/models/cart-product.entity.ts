import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Cart } from "src/carts/models/cart.entity";
import { Product } from "src/products/models/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('carts_products')
@ObjectType()
export class CartProduct {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @ManyToOne(() => Cart, cart => cart.products)
  @Field(() => Cart)
  cart: Cart;

  @ManyToOne(() => Product, product => product.cartProducts)
  @Field(() => Product)
  product: Product;

  @Column({ default: 1 })
  @Field(() => Int)
  quantity: number;
} 