import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}