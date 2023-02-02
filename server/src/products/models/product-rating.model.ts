import { Field, Float, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ProductRating {
  @Field(() => Float)
  value: number;

  @Field(() => Int)
  count: number;
}