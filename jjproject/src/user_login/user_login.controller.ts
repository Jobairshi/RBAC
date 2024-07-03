/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserLoginService } from './user_login.service';

@Controller('userlogin')
export class UserLoginController {
  constructor(private readonly userLoginService: UserLoginService) {}

  @Post()
  login(@Body() body:{email:string; password:string} ){
    const {email,password} = body;
    return  this.userLoginService.login(email,password);
    }
  @Get()
  findAll(){
    return this.userLoginService.findAll();
  }

}
