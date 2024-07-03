/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserInfoService } from './user_info.service';
import { Prisma } from '@prisma/client';


@Controller('userinfo')
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}

  @Post()
  create(@Body() createUserInfoDto: Prisma.usersCreateInput) {
    return this.userInfoService.create(createUserInfoDto);
  }

  @Get()
  findAll() {
    return this.userInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userInfoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserInfoDto: Prisma.usersUpdateInput) {
    return this.userInfoService.update(id, updateUserInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userInfoService.remove(id);
  }
}
