/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "../user.entity";
import { UsersRepository } from "../users.repository";

@Injectable()
export class JwtStatregy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(UsersRepository)
        private userRepository: UsersRepository
    ) {
        super({
            secretOrKey: "topSecret51",
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate(payload: any): Promise<User> {
        const { username } = payload;
        const user = await this.userRepository.findOne(username);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }

}