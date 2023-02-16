import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { RolesModule } from 'src/roles/roles.module';
import { UsersModule } from 'src/users/users.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { CartsModule } from 'src/carts/carts.module';
import { FavoritesModule } from 'src/favorites/favorites.module';
import { ComparedModule } from 'src/compared/compared.module';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('ACCESS_TOKEN_SECRET'),
      }),
    }),
    UsersModule,
    RolesModule,
    CartsModule,
    FavoritesModule,
    ComparedModule
  ],
  providers: [AuthService, AuthResolver, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
