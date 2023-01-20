import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateParameterCategory {
  @Field()
  name: string;
  
  @Field(() => Int)
  order: number;
}