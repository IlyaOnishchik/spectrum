import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class FindProduct {
  @Field({ nullable: true })
  id: string;
}