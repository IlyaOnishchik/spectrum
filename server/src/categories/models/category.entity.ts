import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Image } from 'src/images/models/image.entity';

@Entity('categories')
@ObjectType()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({ unique: true })
  @Field()
  name: string;

  @OneToOne(() => Image, { nullable: true })
  @JoinColumn()
  @Field(() => Image, { nullable: true })
  image: Image;

  @Column({ nullable: true })
  @Field({ nullable: true })
  parentCategoryId: string;

  @Column()
  @Field(() => Int)
  order: number;
}
