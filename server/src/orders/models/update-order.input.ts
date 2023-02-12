import { Field, InputType } from "@nestjs/graphql";
import { Order } from "./order.entity";

@InputType()
export class UpdateOrder {
  @Field()
  id: string;
}