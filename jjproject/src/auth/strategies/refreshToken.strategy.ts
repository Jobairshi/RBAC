/* eslint-disable prettier/prettier */
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

export class RefreshjwtStrategy extends PassportStrategy(Strategy, 'jwt-refresh')
{
    constructor()
    {
        super({
            jwtFromRequest: ExtractJwt.fromBodyField("refresh"),
            ignoreExpiration: false,
            secretOrKey:`${process.env.jwt_secret}`,
        })
    }

    async validate(payload:any)
    {
        return {user:payload.sub, email:payload.email}
    }
}