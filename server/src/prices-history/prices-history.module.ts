import { Module } from '@nestjs/common';
import { PricesHistoryService } from './prices-history.service';
import { PricesHistoryResolver } from './prices-history.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceHistory } from './models/price-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PriceHistory])],
  providers: [PricesHistoryService, PricesHistoryResolver],
  exports: [PricesHistoryService]
})
export class PricesHistoryModule {}
