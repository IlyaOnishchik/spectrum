import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Type } from '@nestjs/common';

export function Paginate<T>(ItemType: Type<T>): any {

  @ObjectType({ isAbstract: true })
  abstract class Paginated {
    @Field(() => [ItemType])
    items: T[];

    @Field(() => Int)
    count: number;
  }

  return Paginated;
}