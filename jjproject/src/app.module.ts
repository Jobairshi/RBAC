/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserInfoModule } from './user_info/user_info.module';
import { UserLoginModule } from './user_login/user_login.module';
// import { AuthModule } from './auth/auth.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, UserInfoModule, UserLoginModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
