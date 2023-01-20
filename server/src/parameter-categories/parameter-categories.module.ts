import { Module } from '@nestjs/common';
import { ParameterCategoriesService } from './parameter-categories.service';
import { ParameterCategoriesResolver } from './parameter-categories.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParameterCategory } from './models/parameter-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParameterCategory])],
  providers: [ParameterCategoriesService, ParameterCategoriesResolver]
})
export class ParameterCategoriesModule {}
