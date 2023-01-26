import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritesService } from './favorites.service';
import { Favorites } from './models/favorites.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Favorites])],
  providers: [FavoritesService]
})
export class FavoritesModule {}
