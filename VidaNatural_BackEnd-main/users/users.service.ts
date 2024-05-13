import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { User } from './user.interface';
const BASE_URL = 'http://localhost:3030/users/';

@Injectable()
export class UserService {
  async findUser(email: string): Promise<User> {
    const res = await fetch(BASE_URL);
    if (!res.ok)
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    const allUsers = await res.json();
    const user = allUsers.find((usr: User) => usr.Email === email);
    return user;
  }
}

