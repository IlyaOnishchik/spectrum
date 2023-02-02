import { UseGuards } from '@nestjs/common';
import { Args, Float, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ProductsService } from 'src/products/products.service';
import { Rating } from 'src/ratings/models/rating.entity';
import { RatingsService } from 'src/ratings/ratings.service';
import { User } from 'src/users/models/user.entity';
import { UsersService } from 'src/users/users.service';
import { CreateReview } from './models/create-review.input';
import { Review } from './models/review.entity';
import { ReviewsService } from './reviews.service';

@Resolver(() => Review)
export class ReviewsResolver {
  constructor(
    private reviewsService: ReviewsService,
    private usersService: UsersService,
    private productsService: ProductsService,
    private ratinsService: RatingsService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Review, { name: 'createReview' })
  async create(
    @CurrentUser() { id: userId }: Pick<User, 'id'>,
    @Args('createReview') { productId, text }: CreateReview
  ): Promise<Review> {
    const user = await this.usersService.findOne({ id: userId });
    const product = await this.productsService.findOne({ id: productId });
    return await this.reviewsService.create(user, product, text);
  }

  @ResolveField(() => Float)
  async rating(@Parent() review: Review) {
    const rating = await this.ratinsService.findOneByUserIdAndProductId(review.user.id, review.product.id)
    return await rating.value;
  }
}
