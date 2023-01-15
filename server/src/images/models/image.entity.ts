import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity('images')
@ObjectType()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  @Field()
  name: string;
}