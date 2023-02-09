import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { ImagesModule } from './images/images.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ParameterCategoriesModule } from './parameter-categories/parameter-categories.module';
import { ParametersModule } from './parameters/parameters.module';
import { ProductsModule } from './products/products.module';
import { ProductsImagesModule } from './products-images/products-images.module';
import { ProductsParametersModule } from './products-parameters/products-parameters.module';
import { ParameterTypesModule } from './parameter-types/parameter-types.module';
import { CartsModule } from './carts/carts.module';
import { FavoritesModule } from './favorites/favorites.module';
import { CartsProductsModule } from './carts-products/carts-products.module';
import { ComparedModule } from './compared/compared.module';
import { ReviewsModule } from './reviews/reviews.module';
import { RatingsModule } from './ratings/ratings.module';
import { OrdersModule } from './orders/orders.module';
import { OrdersProductsModule } from './orders-products/orders-products.module';
import { PricesHistoryModule } from './prices-history/prices-history.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    CategoriesModule,
    ImagesModule,
    UsersModule,
    RolesModule,
    AuthModule,
    ParameterCategoriesModule,
    ParametersModule,
    ProductsModule,
    ProductsImagesModule,
    ProductsParametersModule,
    ParameterTypesModule,
    CartsModule,
    FavoritesModule,
    CartsProductsModule,
    ComparedModule,
    ReviewsModule,
    RatingsModule,
    OrdersModule,
    OrdersProductsModule,
    PricesHistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
