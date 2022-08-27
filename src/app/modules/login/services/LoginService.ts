import ILoginDTO from "../dtos/ILoginDTO";
import ILoginService from "../interfaces/services/ILoginService";
import UserRepository from "../repositories/UserRepository";
import { sign } from 'jsonwebtoken';

class LoginService implements ILoginService {
    async login(user: string, keyAccess: string): Promise<ILoginDTO> {
        try {
            const userFind = await UserRepository.getOne(user, keyAccess);

            if (!userFind) {
                return {
                    status: false,
                    message: 'Credencias inválidas!'
                };
            }
            
            const token = sign({}, process.env.SECRET_TOKEN, {
                subject: userFind.id.toString(),
                expiresIn: process.env.EXPIRES_TOKEN
            });

            return {
                status: true,
                message: 'Login realizado com sucesso!',
                token
            };

        }
        catch (err) {            
            return {
                status: false,
                message: err.toString()
            }
        }
    }

}

export default new LoginService();