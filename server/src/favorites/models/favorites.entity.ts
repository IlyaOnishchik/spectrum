import { Field, ObjectType } from "@nestjs/graphql";
import { Product } from "src/products/models/product.entity";
import { User } from "src/users/models/user.entity";
import { Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('favorites')
@ObjectType()
export class Favorites {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @OneToOne(() => User, user => user.favorites)
  @Field(() => User)
  user: User;

  @ManyToMany(() => Product, product => product.favorites)
  @JoinTable({ name: 'favorites_products', joinColumn: { name: 'favoritesId' }, inverseJoinColumn: { name: 'productId' } })
  @Field(() => [Product], { nullable: true })
  products: Product[];
}