import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Parameter } from "src/parameters/models/parameter.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('parameter_categories')
@ObjectType()
export class ParameterCategory {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({ unique: true })
  @Field()
  name: string;

  @Column({ unique: true })
  @Field(() => Int)
  order: number;

  @OneToMany(() => Parameter, parameter => parameter.category)
  @Field(() => [Parameter], { nullable: true })
  parameters: Parameter[];
}