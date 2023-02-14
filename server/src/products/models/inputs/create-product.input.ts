import { Field, Float, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateProduct {
  @Field(() => Float)
  price: number;

  @Field()
  categoryId: string;

  @Field(() => Int)
  quantity: number;
}