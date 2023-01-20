import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateProductImage {
  @Field()
  productId: string;

  @Field()
  imageId: string;

  @Field(() => Int)
  order: number;
}