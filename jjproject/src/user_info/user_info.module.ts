/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserInfoService } from './user_info.service';
import { UserInfoController } from './user_info.controller';


import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[JwtModule],
  controllers: [UserInfoController],
  providers: [UserInfoService],
})
export class UserInfoModule {}
