import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Category } from './models/category.entity';
import { CategoriesService } from './categories.service';
import { CreateCategory } from './models/create-category.input';
import { ImagesService } from 'src/images/images.service';
import { FindCategory } from './models/find-category.args';

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
    const image = imageId ? await this.imagesService.findOne({ id: imageId }) : null;
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

  @Query(() => Category, { name: 'category' })
  async findOne(@Args() findCategory: FindCategory): Promise<Category> {
    return await this.categoriesService.findOne(findCategory);
  }
}
