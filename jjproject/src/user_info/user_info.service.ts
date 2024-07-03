/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class UserInfoService {
  constructor (private readonly databaseService:DatabaseService)
  {
  
  }
  
  create(createUserInfoDto: Prisma.usersCreateInput) {
    
    // createUserInfoDto.id = this.authService.createToken(createUserInfoDto.email);
    // console.log(createUserInfoDto.id);
    return this.databaseService.users.create({
      data:createUserInfoDto
    })
  }

  findAll() {
    return this.databaseService.users.findMany({});
  }

  findOne(id: string) {
    return this.databaseService.users.findUnique({
      where:{id:id}
    })
  }

  update(id: string, updateUserInfoDto:Prisma.usersUpdateInput) {
    return this.databaseService.users.update({
      where:{id:id},
      data:updateUserInfoDto
    })
  }

  remove(id: string) {
    return this.databaseService.users.delete({
      where:{id:id}
    })
  }
}
