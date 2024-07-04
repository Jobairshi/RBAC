/* eslint-disable prettier/prettier */
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

export class jwtStrategy extends PassportStrategy(Strategy, 'jwt')
{
    constructor()
    {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey:`${process.env.jwt_secret}`,
        })
    }

    async validate(payload:any)
    {
        return {user:payload.sub, email:payload.email}
    }
}