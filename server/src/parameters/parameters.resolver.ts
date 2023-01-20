import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ParameterCategoriesService } from 'src/parameter-categories/parameter-categories.service';
import { Roles } from 'src/roles/decorators/roles.decorator';
import { RolesGuard } from 'src/roles/guards/roles.guard';
import { CreateParameter } from './models/create-parameter.input';
import { Parameter } from './models/parameter.entity';
import { ParametersService } from './parameters.service';

@Resolver()
export class ParametersResolver {
  constructor(
    private parametersService: ParametersService,
    private parameterCategoriesService: ParameterCategoriesService
  ) {}

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Mutation(() => Parameter, { name: 'createParameter' })
  async create(@Args('createParameter') createParameter: CreateParameter): Promise<Parameter> {
    const { name, categoryId, order } = createParameter;
    const category = await this.parameterCategoriesService.findOne({ id: categoryId });
    return await this.parametersService.create(name, category, order);
  }
}
