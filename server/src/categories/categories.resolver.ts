import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Category } from './models/category.entity';
import { CategoriesService } from './categories.service';
import { CreateCategory } from './models/create-category.input';
import { ImagesService } from 'src/images/images.service';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(
    private categoriesService: CategoriesService,
    private imagesService: ImagesService,
  ) {}

  @Mutation(() => Category, { name: 'createCategory' })
  async create(
    @Args('createCategoryInput') createCategoryInput: CreateCategory,
  ): Promise<Category> {
    const { name, imageId, parentCategoryId, order } = createCategoryInput;
    const image = imageId ? await this.imagesService.findOne(imageId) : null;
    return await this.categoriesService.create(
      name,
      image,
      parentCategoryId,
      order,
    );
  }

  @Query(() => [Category], { name: 'categories' })
  async findAll(): Promise<Category[]> {
    return await this.categoriesService.findAll();
  }
}
