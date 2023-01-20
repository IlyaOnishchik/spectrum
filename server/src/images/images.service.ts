import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
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

  async findManyByIds(ids: string[]): Promise<Image[]> {
    return await this.imagesRepository.find({ where: { id: In(ids) } });
  }

  async findOne(where: Partial<Image>): Promise<Image> {
    return await this.imagesRepository.findOne({ where });
  }
}
