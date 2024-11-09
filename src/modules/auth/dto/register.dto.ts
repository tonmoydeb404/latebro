import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ name: 'Email' })
  email: string;
  @ApiProperty({ name: 'Password' })
  password: string;
}
