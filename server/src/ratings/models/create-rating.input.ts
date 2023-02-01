import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateRating {
  @Field()
  productId: string;

  @Field(() => Int)
  value: number;
}