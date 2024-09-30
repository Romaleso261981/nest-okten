import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'field for set user name',
    default: 'Roman',
    required: false,
  })
  name: string;

  @ApiProperty({
    description: 'field for set user email',
    default: 'roman@gmail.com',
  })
  email: string;

  @ApiProperty()
  password: string;
}
