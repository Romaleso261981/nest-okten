import { Module } from '@nestjs/common';

import { PokemonsController } from './pokemons.controller';
import { PokemonsService } from './services/pokemons.service';

@Module({
  controllers: [PokemonsController],
  providers: [PokemonsService],
})
export class PokemonsModule {}
