import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Role } from 'src/roles/models/role.entity';
import { Cart } from 'src/carts/models/cart.entity';
import { Favorites } from 'src/favorites/models/favorites.entity';

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

  @OneToOne(() => Cart, cart => cart.user)
  @JoinColumn()
  @Field(() => Cart)
  cart: Cart;

  @OneToOne(() => Favorites, favorites => favorites.user)
  @JoinColumn()
  @Field(() => Favorites)
  favorites: Favorites;
}
