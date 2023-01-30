import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorites } from './models/favorites.entity';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(Favorites) private favoritesRepository: Repository<Favorites>
  ) {}

  async create(): Promise<Favorites> {
    const favorites = new Favorites();
    return await this.favoritesRepository.save(favorites);
  }

  async save(favorites: Favorites): Promise<Favorites> {
    return await this.favoritesRepository.save(favorites);
  }

}
