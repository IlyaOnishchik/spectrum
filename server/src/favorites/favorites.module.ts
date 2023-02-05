import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritesService } from './favorites.service';
import { Favorites } from './models/favorites.entity';
import { FavoritesResolver } from './favorites.resolver';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [TypeOrmModule.forFeature([Favorites]), ProductsModule],
  providers: [FavoritesService, FavoritesResolver]
})
export class FavoritesModule {}
