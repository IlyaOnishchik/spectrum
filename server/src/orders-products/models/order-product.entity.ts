import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Order } from "src/orders/models/order.entity";
import { Product } from "src/products/models/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('orders_products')
@ObjectType()
export class OrderProduct {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @ManyToOne(() => Order, order => order.orderProducts)
  @Field(() => Order)
  order: Order;

  @ManyToOne(() => Product, product => product.orderProducts)
  @Field(() => Product)
  product: Product;

  @Column()
  @Field(() => Int)
  quantity: number;
} 