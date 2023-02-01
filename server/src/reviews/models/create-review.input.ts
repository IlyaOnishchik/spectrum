import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateReview {
  @Field()
  productId: string;

  @Field()
  text: string;
}