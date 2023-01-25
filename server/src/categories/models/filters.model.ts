import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
class Filter {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => Int)
  order: number;
}

@ObjectType()
export class CheckFilterValue {
  @Field()
  value: string;

  @Field({ nullable: true })
  unit: string;
}

@ObjectType()
export class CheckFilter extends Filter {
  @Field(() => [CheckFilterValue])
  values: CheckFilterValue[]
}

@ObjectType()
export class RangeFilter extends Filter {
  @Field({ nullable: true })
  unit: string;

  @Field(() => Int)
  min: number;

  @Field(() => Int)
  max: number;
}

@ObjectType()
export class Filters {
  @Field(() => [CheckFilter], { nullable: true })
  checkFilters: CheckFilter[];

  @Field(() => [RangeFilter], { nullable: true })
  rangeFilters: RangeFilter[];
}