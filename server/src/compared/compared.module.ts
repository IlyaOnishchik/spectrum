import { Module } from '@nestjs/common';
import { ComparedService } from './compared.service';
import { ComparedResolver } from './compared.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compared } from './models/compared.entity';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [TypeOrmModule.forFeature([Compared]), UsersModule, ProductsModule],
  providers: [ComparedService, ComparedResolver]
})
export class ComparedModule {}
