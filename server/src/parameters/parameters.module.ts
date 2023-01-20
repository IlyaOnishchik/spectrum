import { Module } from '@nestjs/common';
import { ParametersService } from './parameters.service';
import { ParametersResolver } from './parameters.resolver';

@Module({
  providers: [ParametersService, ParametersResolver]
})
export class ParametersModule {}
