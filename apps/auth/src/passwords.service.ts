import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { pbkdf2Sync } from 'crypto';

@Injectable()
export default class PasswordService {
  constructor(private readonly _config: ConfigService) {}

  generatePassword(password: string) {
    // Hash the password with the salt
    const hashedPassword = this.generateHash(
      password,
      this._config.get('JWT_SECRET') as string,
    );

    // Return the salt and hashed password
    return hashedPassword;
  }

  comparePasswords(password: string, hashedPassword: string): boolean {
    // Hash the input password with the provided salt
    const hash = this.generateHash(
      password,
      this._config.get('JWT_SECRET') as string,
    );

    // Compare the hashed input password with the provided hashed password
    return hash === hashedPassword;
  }

  generateHash(password: string, salt: string) {
    return pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  }
}
