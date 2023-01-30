import { Module } from '@nestjs/common';
import { ComparedService } from './compared.service';
import { ComparedResolver } from './compared.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compared } from './models/compared.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Compared])],
  providers: [ComparedService, ComparedResolver]
})
export class ComparedModule {}
