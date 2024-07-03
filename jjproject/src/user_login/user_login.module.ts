/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserLoginService } from './user_login.service';
import { UserLoginController } from './user_login.controller';


@Module({
  
  controllers: [UserLoginController],
  providers: [UserLoginService],
})
export class UserLoginModule {}
