/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
// import { AuthService } from 'src/auth/auth.service';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserLoginService {
    constructor (private readonly databaseService:DatabaseService)
    {

    }

    login(email:string, password:string){
        return this.databaseService.users.findFirst({
            where:{
                email:email,
                password:password
            }
        })
    }
    findAll() {
    return this.databaseService.users.findMany({});
    }

}
