import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RolesService } from './roles.service';
import { Role } from './models/role.entity';

@Resolver()
export class RolesResolver {
  constructor(
    private rolesService: RolesService
  ) {}

  @Mutation(() => Role, { name: 'createRole' })
  async create(@Args('name') name: string): Promise<Role> {
    return await this.rolesService.create(name);
  }

  @Query(() => [Role], { name: 'roles' })
  async findAll(): Promise<Role[]> {
    return await this.rolesService.findAll();
  }
}
