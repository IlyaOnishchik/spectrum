import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParameterType } from './models/parameter-type.entity';

@Injectable()
export class ParameterTypesService {
  constructor(
    @InjectRepository(ParameterType) private parameterTypesRepository: Repository<ParameterType>
  ) {}

  async create(name: string): Promise<ParameterType> {
    const parameterType = new ParameterType();
    parameterType.name = name;
    return await this.parameterTypesRepository.save(parameterType);
  }

  async findOne(where: Partial<ParameterType>): Promise<ParameterType> {
    return await this.parameterTypesRepository.findOne({ where });
  }
}
