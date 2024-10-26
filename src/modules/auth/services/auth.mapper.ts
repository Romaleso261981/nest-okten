import { UserMapper } from 'src/modules/users/services/user.mapper';

import { UserEntity } from '../../../database/entities/user.entity';
import { AuthResDto } from '../models/dto/res/auth.res.dto';
import { TokenPairResDto } from '../models/dto/res/token-pair.res.dto';
import { ITokenPair } from '../models/interfaces/token-pair.interface';

export class AuthMapper {
  public static toResponseDTO(
    user: UserEntity,
    tokenPair: ITokenPair,
  ): AuthResDto {
    return {
      tokens: this.toResponseTokensDTO(tokenPair),
      user: UserMapper.toResDto(user),
    };
  }

  public static toResponseTokensDTO(tokenPair: ITokenPair): TokenPairResDto {
    return {
      accessToken: tokenPair.accessToken,
      refreshToken: tokenPair.refreshToken,
    };
  }
}
