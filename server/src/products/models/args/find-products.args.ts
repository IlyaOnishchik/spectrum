import { ArgsType, Field, Float, Int } from "@nestjs/graphql";
import { FiltersInput } from "../filters.model";

@ArgsType()
export class FindProducts {
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

  @Field(() => Float, { nullable: true })
  minPrice: number;

  @Field(() => Float, { nullable: true })
  maxPrice: number;

  @Field(() => FiltersInput, { nullable: true })
  filters: FiltersInput;

  @Field({ nullable: true })
  query: string;
}