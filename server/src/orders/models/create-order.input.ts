import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateOrder {
  @Field()
  name: string;

  @Field()
  phone: string;

  @Field()
  country: string;

  @Field()
  city: string;

  @Field()
  address: string;

  @Field(() => Int)
  zipCode: number;
}