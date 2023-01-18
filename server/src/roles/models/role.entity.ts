import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/models/user.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
@ObjectType()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({ unique: true })
  @Field()
  name: string;

  @ManyToMany(() => User, (user) => user.roles)
  @Field(() => [User], { nullable: true })
  users: User[];
}
