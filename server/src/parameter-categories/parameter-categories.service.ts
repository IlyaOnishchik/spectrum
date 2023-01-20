import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParameterCategory } from './models/parameter-category.entity';

@Injectable()
export class ParameterCategoriesService {
  constructor(
    @InjectRepository(ParameterCategory) private parameterCategoriesRepository: Repository<ParameterCategory>
  ) {}

  async create(name: string, order: number): Promise<ParameterCategory> {
    const parameterCategory = new ParameterCategory();
    parameterCategory.name = name;
    parameterCategory.order = order;
    return await this.parameterCategoriesRepository.save(parameterCategory);
  }
}
