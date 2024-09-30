import { Module } from '@nestjs/common';
import { healthModule } from './modules/health/health.module';
import { PokemonsModule } from './modules/pokemons/pokemons.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule, PokemonsModule, healthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
