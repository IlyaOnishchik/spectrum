import { Field, Int, ObjectType } from "@nestjs/graphql";
import { OrderProduct } from "src/orders-products/models/order-product.entity";
import { User } from "src/users/models/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Status } from "./status.enum";

@Entity('orders')
@ObjectType()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @ManyToOne(() => User, user => user.orders)
  @Field(() => User)
  user: User;

  @OneToMany(() => OrderProduct, orderProduct => orderProduct.order)
  @Field(() => [OrderProduct])
  orderProducts: OrderProduct[];

  @Column()
  @Field(() => Int)
  amount: number;

  @Column({ default: Status.PENDING })
  @Field()
  status: Status;

  @CreateDateColumn()
  @Field()
  createdAt: string;

  @UpdateDateColumn()
  @Field()
  updatedAt: string;
}