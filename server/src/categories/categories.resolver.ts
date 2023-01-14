import { Resolver, Query } from '@nestjs/graphql';
import { Category } from './entities/category.entity';

@Resolver(() => Category)
export class CategoriesResolver {

  @Query(returns => Category)
  findAll() {}
}
