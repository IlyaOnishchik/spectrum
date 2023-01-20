import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagesModule } from 'src/images/images.module';
import { CategoriesResolver } from './categories.resolver';
import { CategoriesService } from './categories.service';
import { Category } from './models/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category]), ImagesModule],
  providers: [CategoriesResolver, CategoriesService],
  exports: [CategoriesService]
})
export class CategoriesModule {}
