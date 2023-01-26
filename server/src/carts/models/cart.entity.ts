import { Field, ObjectType } from "@nestjs/graphql";
import { Product } from "src/products/models/product.entity";
import { User } from "src/users/models/user.entity";
import { Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('carts')
@ObjectType()
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @OneToOne(() => User, user => user.cart)
  @Field(() => User)
  user: User;
  
  @ManyToMany(() => Product, product => product.carts)
  @JoinTable({ name: 'carts_products', joinColumn: { name: 'cartId' }, inverseJoinColumn: { name: 'productId' } })
  @Field(() => [Product], { nullable: true })
  products: Product[];
}