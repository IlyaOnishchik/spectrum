import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateProductParameter {
  @Field()
  productId: string;

  @Field()
  parameterId: string;

  @Field()
  value: string;

  @Field({ nullable: true })
  unit: string;
}