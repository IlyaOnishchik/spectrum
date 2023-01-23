import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/roles/decorators/roles.decorator';
import { RolesGuard } from 'src/roles/guards/roles.guard';
import { ParameterType } from './models/parameter-type.entity';
import { ParameterTypesService } from './parameter-types.service';

@Resolver()
export class ParameterTypesResolver {
  constructor(private parameterTypesService: ParameterTypesService) {}

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Mutation(() => ParameterType, { name: 'createParameterType' })
  async create(@Args('name') name: string): Promise<ParameterType> {
    return await this.parameterTypesService.create(name);
  }
}
