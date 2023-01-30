import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compared } from './models/compared.entity';

@Injectable()
export class ComparedService {
  constructor(
    @InjectRepository(Compared) private comapredRepository: Repository<Compared>
  ) {}

  async create(): Promise<Compared> {
    const compared = new Compared();
    return await this.comapredRepository.save(compared);
  }

  async save(compared: Compared): Promise<Compared> {
    return await this.comapredRepository.save(compared);
  }

  async findOne(id: string): Promise<Compared> {
    return await this.comapredRepository.findOne({ 
      where: { id },
      relations: {
        products: {
          images: {
            image: true
          },
          parameters: {
            parameter: true
          }
        }
      }
    });
  }
}
