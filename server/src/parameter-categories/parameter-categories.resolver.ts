import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/roles/decorators/roles.decorator';
import { RolesGuard } from 'src/roles/guards/roles.guard';
import { CreateParameterCategory } from './models/create-parameter-category.input';
import { ParameterCategory } from './models/parameter-category.entity';
import { ParameterCategoriesService } from './parameter-categories.service';

@Resolver()
export class ParameterCategoriesResolver {
  constructor(private parameterCategoriesService: ParameterCategoriesService) {}

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Mutation(() => ParameterCategory, { name: 'createParameterCategory' })
  async create(@Args('createParameterCategory') createParameterCategory: CreateParameterCategory): Promise<ParameterCategory> {
    const { name, order } = createParameterCategory;
    return await this.parameterCategoriesService.create(name, order);
  }
}
