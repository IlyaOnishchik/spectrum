import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ProductsService } from 'src/products/products.service';
import { User } from 'src/users/models/user.entity';
import { UsersService } from 'src/users/users.service';
import { CreateRating } from './models/create-rating.input';
import { Rating } from './models/rating.entity';
import { RatingsService } from './ratings.service';

@Resolver()
export class RatingsResolver {
  constructor(
    private ratingsService: RatingsService,
    private usersService: UsersService,
    private productService: ProductsService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Rating, { name: 'createRating' })
  async create(
    @CurrentUser() { id: userId }: Pick<User, 'id'>,
    @Args('createRating') { productId, value }: CreateRating
  ): Promise<Rating> {
    const user = await this.usersService.findOne({ id: userId });
    const product = await this.productService.findOne({ id: productId });
    const rating = await this.ratingsService.findOneByUserIdAndProductId(userId, productId);
    if (rating) return rating;
    return await this.ratingsService.create(user, product, value);
  }

  @Query(() => Rating, { name: 'rating' })
  async findOne(
    @Args('userId') userId: string,
    @Args('productId') productId: string
  ): Promise<Rating> {
    return await this.ratingsService.findOneByUserIdAndProductId(userId, productId);
  }
}
