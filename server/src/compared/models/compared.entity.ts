import { Field, ObjectType } from "@nestjs/graphql";
import { Product } from "src/products/models/product.entity";
import { User } from "src/users/models/user.entity";
import { Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('compared')
@ObjectType()
export class Compared {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @OneToOne(() => User, user => user.compared)
  @JoinColumn()
  @Field(() => User, { nullable: true })
  user: User;

  @ManyToMany(() => Product, product => product.compared)
  @JoinTable({ name: 'compared_products', joinColumn: { name: 'comparedId' }, inverseJoinColumn: { name: 'productId' } })
  @Field(() => [Product], { nullable: true })
  products: Product[];
}