import { Resolver, Query, Args, Mutation, ResolveField, Parent } from '@nestjs/graphql';
import { Category } from './models/category.entity';
import { CategoriesService } from './categories.service';
import { CreateCategory } from './models/create-category.input';
import { ImagesService } from 'src/images/images.service';
import { FindCategory } from './models/find-category.args';
import { ProductParameter } from 'src/products-parameters/models/product-parameter.entity';
import { CheckFilter, CheckFilterValue, Filters, RangeFilter } from './models/filters.model';

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

  @ResolveField(() => Filters)
  filters(@Parent() category: Category) {

    const productsParameters: ProductParameter[] = [];
    category.products.forEach(product => product.parameters.forEach(productParameter => productsParameters.push(productParameter)));

    const checkProductsParameters = productsParameters.filter(item => item.parameter.type.name === 'check');
    const checkFilters: CheckFilter[] = [];

    checkProductsParameters.forEach(productParameter => {
      const checkFilter = checkFilters.find(item => item.name === productParameter.parameter.name);
      if (!checkFilter) {
        const newCheckFilter = new CheckFilter();
        newCheckFilter.id = productParameter.parameter.id;
        newCheckFilter.name = productParameter.parameter.name;
        newCheckFilter.order = productParameter.parameter.category.order * 10 + productParameter.parameter.order;
        const newCheckFilterValue = new CheckFilterValue();
        newCheckFilterValue.value = productParameter.value;
        newCheckFilterValue.unit = productParameter.unit;
        newCheckFilter.values = [newCheckFilterValue];
        checkFilters.push(newCheckFilter);
      } else {
        const isValue = checkFilter.values.find(item => item.value === productParameter.value && item.unit === productParameter.unit);
        if (!isValue) checkFilter.values.push({ value: productParameter.value, unit: productParameter.unit });
      }
    })

    const rangeProductsParameters = productsParameters.filter(item => item.parameter.type.name === 'range');
    const rangeFilters: RangeFilter[] = [];

    rangeProductsParameters.forEach(productParameter => {
      const rangeFilter = rangeFilters.find(item => item.name === productParameter.parameter.name);
      if (!rangeFilter) {
        const newRangeFilter = new RangeFilter();
        newRangeFilter.id = productParameter.parameter.id;
        newRangeFilter.name = productParameter.parameter.name;
        newRangeFilter.order = productParameter.parameter.category.order * 10 + productParameter.parameter.order;
        newRangeFilter.unit = productParameter.unit;
        newRangeFilter.min = +productParameter.value;
        newRangeFilter.max = +productParameter.value;
        rangeFilters.push(newRangeFilter);
      } else {
        if (+productParameter.value < rangeFilter.min) rangeFilter.min = +productParameter.value;
        if (+productParameter.value > rangeFilter.max) rangeFilter.max = +productParameter.value;
      }
    })

    const filters = new Filters();
    filters.checkFilters = checkFilters;
    filters.rangeFilters = rangeFilters;

    return filters;
  }
}
