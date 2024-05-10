import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'Laura'
            password: 'lilo'
        },
        {
            userId: 1,
            username: 'Fede'
            password: 'lasFlores' 
        }
    ]

    ansync findone(username: string): promise<User | undefined> {
        return this.users.find(user => user.username === username);
    } 
}
