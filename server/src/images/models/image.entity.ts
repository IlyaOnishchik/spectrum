import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from 'src/categories/models/category.entity';

@Entity('images')
@ObjectType()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({ unique: true })
  @Field()
  name: string;
}
