import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParameterCategory } from 'src/parameter-categories/models/parameter-category.entity';
import { ParameterType } from 'src/parameter-types/models/parameter-type.entity';
import { Repository } from 'typeorm';
import { Parameter } from './models/parameter.entity';

@Injectable()
export class ParametersService {
  constructor(
    @InjectRepository(Parameter) private parametersRepository: Repository<Parameter>
  ) {}

  async create(name: string, category: ParameterCategory, type: ParameterType, order: number): Promise<Parameter> {
    const parameter = new Parameter();
    parameter.name = name;
    parameter.category = category;
    parameter.type = type;
    parameter.order = order;
    return await this.parametersRepository.save(parameter);
  }

  async findOne(where: Partial<Parameter>): Promise<Parameter> {
    return await this.parametersRepository.findOne({ where });
  }
}
