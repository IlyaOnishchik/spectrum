import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ProductsService } from 'src/products/products.service';
import { User } from 'src/users/models/user.entity';
import { UsersService } from 'src/users/users.service';
import { ComparedService } from './compared.service';
import { Compared } from './models/compared.entity';

@Resolver()
export class ComparedResolver {
  constructor(
    private comparedService: ComparedService,
    private usersService: UsersService,
    private productsService: ProductsService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => Compared, { name: 'compared' })
  async findOne(
    @CurrentUser() { id }: Pick<User, 'id'>,
  ): Promise<Compared> {
    const user = await this.usersService.findOne({ id });
    return await this.comparedService.findOne(user.compared.id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Compared, { name: 'toggleComparedProduct' })
  async toggleProduct(
    @CurrentUser() { id }: Pick<User, 'id'>,
    @Args('productId') productId: string,
  ): Promise<Compared> {
    const user = await this.usersService.findOne({ id });
    const compared = await this.comparedService.findOne(user.compared.id);
    const product = await this.productsService.findOne({ id: productId });
    if (compared.products.find(item => item.id === product.id)) {
      compared.products = compared.products.filter(item => item.id !== product.id)
    } else {
      compared.products.push(product);
    }
    return await this.comparedService.save(compared); 
  }
}
