import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RolesService } from './roles.service';
import { Role } from './models/role.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guards/roles.guard';

@Resolver()
export class RolesResolver {
  constructor(private rolesService: RolesService) {}

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Mutation(() => Role, { name: 'createRole' })
  async create(@Args('name') name: string): Promise<Role> {
    return await this.rolesService.create(name);
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Query(() => [Role], { name: 'roles' })
  async findAll(): Promise<Role[]> {
    return await this.rolesService.findAll();
  }
}
