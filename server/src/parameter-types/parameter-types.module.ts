import { Module } from '@nestjs/common';
import { ParameterTypesService } from './parameter-types.service';
import { ParameterTypesResolver } from './parameter-types.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParameterType } from './models/parameter-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParameterType])],
  providers: [ParameterTypesService, ParameterTypesResolver],
  exports: [ParameterTypesService]
})
export class ParameterTypesModule {}
