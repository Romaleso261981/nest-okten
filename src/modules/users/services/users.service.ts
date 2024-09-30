import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  findAll() {
    return `This action returns all users`;
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
