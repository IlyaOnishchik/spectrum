import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class FindProducts {
  @Field({ nullable: true })
  categoryId: string; 
}