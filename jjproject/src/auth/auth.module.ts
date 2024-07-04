/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserLoginService } from 'src/user_login/user_login.service';
import { JwtModule} from '@nestjs/jwt';
import { localStrategy } from './strategies/local-strategy';
import { DatabaseService } from 'src/database/database.service';
import { jwtStrategy } from './strategies/jwt-stretegy';
import { RefreshjwtStrategy } from './strategies/refreshToken.strategy';

@Module({
  providers: [AuthService,UserLoginService,localStrategy,jwtStrategy,DatabaseService,RefreshjwtStrategy],
  controllers: [AuthController],
  imports:[JwtModule.register({
    secret:`${process.env.jwt_secret}`,
    signOptions:{expiresIn:'60s'},
  })]
})
export class AuthModule {}
