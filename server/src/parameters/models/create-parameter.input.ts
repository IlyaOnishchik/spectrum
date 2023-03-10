import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateParameter {
  @Field()
  name: string;

  @Field()
  categoryId: string;

  @Field()
  typeId: string;

  @Field(() => Int)
  order: number;
}