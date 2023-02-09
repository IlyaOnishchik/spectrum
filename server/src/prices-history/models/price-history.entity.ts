import { Field, Float, ObjectType } from "@nestjs/graphql";
import { Product } from "src/products/models/product.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('prices_history')
@ObjectType()
export class PriceHistory {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @ManyToOne(() => Product, product => product.pricesHistory)
  @Field(() => Product)
  product: Product;

  @CreateDateColumn()
  @Field()
  createdAt: string;

  @Column('')
  @Field(() => Float)
  value: number;
}