import { Field, Int, ObjectType } from "@nestjs/graphql";
import { OrderProduct } from "src/orders-products/models/order-product.entity";
import { User } from "src/users/models/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OrderStatuses } from "./order-statuses.enum";

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

  @Column({ default: OrderStatuses.NEW })
  @Field()
  status: OrderStatuses;

  @CreateDateColumn()
  @Field()
  createdAt: string;

  @UpdateDateColumn()
  @Field()
  updatedAt: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  phone: string;

  @Column()
  @Field()
  country: string;

  @Column()
  @Field()
  city: string;

  @Column()
  @Field()
  address: string;

  @Column()
  @Field(() => Int)
  zipCode: number;
}