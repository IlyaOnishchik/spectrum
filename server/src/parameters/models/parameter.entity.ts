import { Field, Int, ObjectType } from "@nestjs/graphql";
import { ParameterCategory } from "src/parameter-categories/models/parameter-category.entity";
import { ProductParameter } from "src/products-parameters/models/product-parameter.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('parameters')
@ObjectType()
export class Parameter {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({ unique: true })
  @Field()
  name: string;

  @ManyToOne(() => ParameterCategory, category => category.parameters)
  @Field(() => ParameterCategory)
  category: ParameterCategory;

  @Column()
  @Field(() => Int)
  order: number;

  @OneToMany(() => ProductParameter, productParameter => productParameter.parameter)
  @Field(() => [ProductParameter])
  productParameters: ProductParameter[];
}