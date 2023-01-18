import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from 'src/images/models/image.entity';
import { Repository } from 'typeorm';
import { Category } from './models/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private categoriesRepository: Repository<Category>
  ) {}

  async create(name: string, image: Image, parentCategoryId: string, order: number): Promise<Category> {
    const category = new Category();
    category.name = name;
    category.image = image;
    category.parentCategoryId = parentCategoryId;
    category.order = order;
    return await this.categoriesRepository.save(category);
  }

  async findAll(): Promise<Category[]> {
    return await this.categoriesRepository.find({
      relations: {
        image: true
      }
    });
  }
}
