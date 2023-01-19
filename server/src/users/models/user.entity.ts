import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Role } from 'src/roles/models/role.entity';

@Entity('users')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({ unique: true })
  @Field()
  email: string;

  @Column()
  passwordHash: string;

  @Column({ default: false })
  @Field(() => Boolean)
  isActivated: boolean;

  @Column({ default: false })
  @Field(() => Boolean)
  isBanned: boolean;

  @Column()
  activationLink: string;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({
    name: 'users_roles',
    joinColumn: { name: 'userId' },
    inverseJoinColumn: { name: 'roleId' },
  })
  @Field(() => [Role])
  roles: Role[];
}
