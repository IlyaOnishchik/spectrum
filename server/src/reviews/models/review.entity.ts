import { Field, ObjectType } from "@nestjs/graphql";
import { Product } from "src/products/models/product.entity";
import { User } from "src/users/models/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('reviews')
@ObjectType()
export class Review {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  text: string;

  @ManyToOne(() => User, user => user.reviews)
  @Field(() => User)
  user: User;

  @ManyToOne(() => Product, product => product.reviews)
  @Field(() => Product)
  product: Product;

  @CreateDateColumn()
  @Field()
  createdAt: Date;
}