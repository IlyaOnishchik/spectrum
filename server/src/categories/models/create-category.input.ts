import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  imageId: string;

  @Field({ nullable: true })
  parentCategoryId: string;

  @Field(() => Int)
  order: number;
}
