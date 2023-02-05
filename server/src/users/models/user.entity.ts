import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Role } from 'src/roles/models/role.entity';
import { Cart } from 'src/carts/models/cart.entity';
import { Favorites } from 'src/favorites/models/favorites.entity';
import { Compared } from 'src/compared/models/compared.entity';
import { Review } from 'src/reviews/models/review.entity';
import { Rating } from 'src/ratings/models/rating.entity';
import { Order } from 'src/orders/models/order.entity';

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
  @Field(() => Cart)
  cart: Cart;

  @OneToOne(() => Favorites, favorites => favorites.user)
  @Field(() => Favorites)
  favorites: Favorites;

  @OneToOne(() => Compared, compared => compared.user)
  @Field(() => Compared)
  compared: Compared;

  @OneToMany(() => Review, review => review.user)
  @Field(() => [Review], { nullable: true })
  reviews: Review[];

  @OneToMany(() => Rating, rating => rating.user)
  @Field(() => [Rating], { nullable: true })
  ratings: Rating[];

  @OneToMany(() => Order, order => order.user)
  @Field(() => [Order], { nullable: true })
  orders: Order[];
}
