import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration from './configs/configuration';
import { CommentsModule } from './modules/comments/comments.module';
import { healthModule } from './modules/health/health.module';
import { PokemonsModule } from './modules/pokemons/pokemons.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    UsersModule,
    PokemonsModule,
    healthModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
