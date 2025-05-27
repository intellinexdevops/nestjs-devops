import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Your username', example: 'chenterphai' })
  username: string;
  @ApiProperty({
    description: 'Your email',
    example: 'chenterphai61@gmail.com',
  })
  email: string;
  @ApiProperty({ description: 'Your password' })
  password: string;
  status: boolean;
}
