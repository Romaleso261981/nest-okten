import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PokemonsModule } from './pokemons/pokemons.module';
import { healthModule } from './modules/health/health.module';

@Module({
  imports: [UsersModule, PokemonsModule, healthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
