import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './models/image.entity';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image) private imagesRepository: Repository<Image>,
  ) {}

  async create(name: string): Promise<Image> {
    const image = new Image();
    image.name = name;
    return await this.imagesRepository.save(image);
  }

  async findOne(id: string): Promise<Image> {
    return await this.imagesRepository.findOne({ where: { id } });
  }
}
