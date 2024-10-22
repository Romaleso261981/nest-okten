/* eslint-disable no-console */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfig, Config } from 'src/configs/config.type';

import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService<Config>) {}

  create(createUserDto: CreateUserDto) {
    const appConfig = this.configService.get<AppConfig>('app');

    console.log('appConfig', appConfig);
    return createUserDto;
  }

  findAll() {
    const appConfig = this.configService.get<AppConfig>('app');

    return `This action returns all users ${JSON.stringify(appConfig)}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const data = JSON.stringify(updateUserDto);
    console.log('data', data);
    return { id, updateUserDto };
  }

  remove(id: number) {
    return `This action removes user by id:${id} user`;
  }
}
