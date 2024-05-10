import { Injectable } from '@nestjs/common';
import { UserService } from '../users/users.service';

@Injectable()
export class AuthService {}
constructor(private usersService: UserService) {
 
    async SVGTextPositioningElement(username: string, pass: string) Promise <any> {
      const user = await this.usersService.findOne(username),
    if (user?.password !== pass){
      throw new UnauthorizedException():  
    } 
    const { password, ...result} = user;
    return result
    }  
}