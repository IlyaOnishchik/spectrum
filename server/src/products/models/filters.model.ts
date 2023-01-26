import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
class FilterInput {
  @Field()
  name: string;
}

@InputType()
export class CheckFilterValueInput {
  @Field()
  value: string;

  @Field({ nullable: true })
  unit: string;
}

@InputType()
export class CheckFilterInput extends FilterInput {
  @Field(() => [CheckFilterValueInput])
  values: CheckFilterValueInput[]
}

@InputType()
export class RangeFilterInput extends FilterInput {
  @Field({ nullable: true })
  unit: string;

  @Field(() => Int)
  from: number;

  @Field(() => Int)
  to: number;
}

@InputType()
export class FiltersInput {
  @Field(() => [CheckFilterInput], { nullable: true })
  checkFilters: CheckFilterInput[];

  @Field(() => [RangeFilterInput], { nullable: true })
  rangeFilters: RangeFilterInput[];
}