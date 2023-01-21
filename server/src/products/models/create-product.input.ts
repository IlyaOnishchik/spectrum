import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateProduct {
  @Field(() => Int)
  price: number;

  @Field()
  categoryId: string;

  @Field(() => Int)
  quantity: number;
}