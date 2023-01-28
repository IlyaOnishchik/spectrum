import { Field, ObjectType } from "@nestjs/graphql";
import { CartProduct } from "src/carts-products/models/cart-product.entity";
import { Product } from "src/products/models/product.entity";
import { User } from "src/users/models/user.entity";
import { Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('carts')
@ObjectType()
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @OneToOne(() => User, user => user.cart)
  @Field(() => User)
  user: User;
  
  @OneToMany(() => CartProduct, product => product.cart)
  @Field(() => [CartProduct], { nullable: true })
  products: CartProduct[];
}