import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ProductsService } from 'src/products/products.service';
import { User } from 'src/users/models/user.entity';
import { UsersService } from 'src/users/users.service';
import { FavoritesService } from './favorites.service';
import { Favorites } from './models/favorites.entity';

@Resolver()
export class FavoritesResolver {
  constructor(
    private favoritesService: FavoritesService,
    private usersService: UsersService,
    private productsService: ProductsService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => Favorites, { name: 'favorites' })
  async findOne(
    @CurrentUser() { id }: Pick<User, 'id'>,
  ): Promise<Favorites> {
    const user = await this.usersService.findOne({ id });
    return await this.favoritesService.findOne(user.favorites.id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Favorites, { name: 'toggleFavoritesProduct' })
  async toggleProduct(
    @CurrentUser() { id }: Pick<User, 'id'>,
    @Args('productId') productId: string
  ): Promise<Favorites> {
    const user = await this.usersService.findOne({ id });
    const favorites = await this.favoritesService.findOne(user.favorites.id);
    const product = await this.productsService.findOne({ id: productId });
    if (favorites.products.find(item => item.id === product.id)) {
      favorites.products = favorites.products.filter(item => item.id !== product.id)
    } else {
      favorites.products.push(product);
    }
    return await this.favoritesService.save(favorites);
  }
}
