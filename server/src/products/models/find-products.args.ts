import { ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
export class FindProductsArgs {
  @Field({ nullable: true })
  categoryId: string;

  @Field(() => Int, { nullable: true })
  take: number;

  @Field(() => Int, { nullable: true })
  skip: number;

  @Field({ nullable: true })
  sortBy: string;

  @Field({ nullable: true })
  order: string;
}