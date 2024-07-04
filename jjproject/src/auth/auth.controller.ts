/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { localAuthGuard } from './guards/local-auth.guard';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { Refreshjwtguard } from './guards/refresh-jwt-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService ,private dataService:DatabaseService)
    {

    }


   @UseGuards(localAuthGuard)
    @Post('login')
    async login(@Body() body:{email:string; password:string} ){
       const {email,password} = body;
        const user = await this.dataService.users.findUnique({
            where:{email:email,password:password}
        })
        return await this.authService.login(user);
    }

    // login(@Body() body:{email:string; password:string} ){
    //     const {email,password} = body;
    //     return  this.userLoginService.login(email,password);
    //     }
    @Post('register')
    async register(@Body() createUserInfoDto: Prisma.usersCreateInput)
    {
        return await this.dataService.users.create({
            data:createUserInfoDto
        })
    }

    @UseGuards(Refreshjwtguard)
    @Post('refresh')
    async refresh(@Request() req)
    {
        return this.authService.refreshToken(req.user);
    }
    
}
