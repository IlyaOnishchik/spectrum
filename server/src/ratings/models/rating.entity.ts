import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Product } from "src/products/models/product.entity";
import { User } from "src/users/models/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('ratings')
@Unique(['user', 'product'])
@ObjectType()
export class Rating {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @ManyToOne(() => User, user => user.ratings)
  @Field(() => User)
  user: User;

  @ManyToOne(() => Product, product => product.ratings)
  @Field(() => Product)
  product: Product;

  @Column()
  @Field(() => Int)
  value: number;
}