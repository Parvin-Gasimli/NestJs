import { Strategy } from "passport-jwt";
import { User } from "../user.entity";
import { UsersRepository } from "../users.repository";
declare const JwtStatregy_base: new (...args: any[]) => Strategy;
export declare class JwtStatregy extends JwtStatregy_base {
    private userRepository;
    constructor(userRepository: UsersRepository);
    validate(payload: any): Promise<User>;
}
export {};
