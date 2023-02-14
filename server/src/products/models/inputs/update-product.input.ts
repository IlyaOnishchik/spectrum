import { Field, Float, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateProductInput {
  @Field()
  id: string;

  @Field(() => Float, { nullable: true })
  price: number;
}