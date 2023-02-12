import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class SortingArgs {
  @Field({ nullable: true })
  sortBy: string;

  @Field({ nullable: true })
  order: string;
}