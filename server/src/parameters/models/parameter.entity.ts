import { Field, Int, ObjectType } from "@nestjs/graphql";
import { ParameterCategory } from "src/parameter-categories/models/parameter-category.entity";
import { ParameterType } from "src/parameter-types/models/parameter-type.entity";
import { ProductParameter } from "src/products-parameters/models/product-parameter.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('parameters')
@Unique(['category', 'order'])
@ObjectType()
export class Parameter {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @ManyToOne(() => ParameterCategory, category => category.parameters)
  @Field(() => ParameterCategory)
  category: ParameterCategory;

  @ManyToOne(() => ParameterType, type => type.parameters)
  @Field(() => ParameterType)
  type: ParameterType;

  @Column()
  @Field(() => Int)
  order: number;

  @OneToMany(() => ProductParameter, productParameter => productParameter.parameter)
  @Field(() => [ProductParameter])
  productParameters: ProductParameter[];
}