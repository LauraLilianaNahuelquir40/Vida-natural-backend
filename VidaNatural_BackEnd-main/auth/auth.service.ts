import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
    ) {}
  async login(email: string, pass: string): Promise<any> {
    const user = await this.userService.findUser(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, name: user.NombreApellido, email: user.Email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}


