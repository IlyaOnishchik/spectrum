import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParameterCategory } from 'src/parameter-categories/models/parameter-category.entity';
import { Repository } from 'typeorm';
import { Parameter } from './models/parameter.entity';

@Injectable()
export class ParametersService {
  constructor(
    @InjectRepository(Parameter) private parametersRepository: Repository<Parameter>
  ) {}

  async create(name: string, category: ParameterCategory, order: number): Promise<Parameter> {
    const parameter = new Parameter();
    parameter.name = name;
    parameter.category = category;
    parameter.order = order;
    return await this.parametersRepository.save(parameter);
  }
}
