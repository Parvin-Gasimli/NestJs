import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UsersRepository } from './users.repository';
export declare class AuthService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    private jwtService;
    SignUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    SignIn(authCredentialsDto: AuthCredentialsDto): Promise<void>;
}
