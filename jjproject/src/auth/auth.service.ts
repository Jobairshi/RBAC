/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { users } from '@prisma/client';
import { UserLoginService } from 'src/user_login/user_login.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService:UserLoginService, private readonly jwtService:JwtService)
    {

    }
    async validateUser(email:string , password:string)
    {
        const user = await this.userService.login(email,password);
        if(user)
        {
            const {password, ...result} = user;
            return result;
          //  return user;
        }
        return null;
    }
    async login(user:users)
    {
        const payload = {email:user.email, sub:user.name};
        console.log(payload);
        return {
            ...user,
            accessToken:this.jwtService.sign(payload),
            refershToken:this.jwtService.sign(payload,{expiresIn:'7d'})
        }
    }

    async refreshToken(user:users)
    {
        const payload = {email:user.email, sub:user.name};
        console.log(payload);
        return {
            accessToken:this.jwtService.sign(payload),
         
        }
    }


}
