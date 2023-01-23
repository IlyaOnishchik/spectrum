import { Field, ObjectType } from "@nestjs/graphql";
import { Parameter } from "src/parameters/models/parameter.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('parameter_types')
@ObjectType()
export class ParameterType {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({ unique: true })
  @Field()
  name: string;

  @OneToMany(() => Parameter, parameter => parameter.type)
  @Field(() => [Parameter], { nullable: true })
  parameters: Parameter[];
}