import { Module } from '@nestjs/common';
import { ParametersService } from './parameters.service';
import { ParametersResolver } from './parameters.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parameter } from './models/parameter.entity';
import { ParameterCategoriesModule } from 'src/parameter-categories/parameter-categories.module';

@Module({
  imports: [TypeOrmModule.forFeature([Parameter]), ParameterCategoriesModule],
  providers: [ParametersService, ParametersResolver],
  exports: [ParametersService]
})
export class ParametersModule {}
