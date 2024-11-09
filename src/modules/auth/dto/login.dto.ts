import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ name: 'Email' })
  email: string;
  @ApiProperty({ name: 'Password' })
  password: string;
}
