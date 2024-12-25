import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  constructor() {}

  saltOrRounds = 10;

  hash(str: string) {
    return bcrypt.hash(str, this.saltOrRounds);
  }

  compare(decrypted: string, encrypted: string) {
    return bcrypt.compare(decrypted, encrypted);
  }
}
