import ISessionDTO from "../dtos/ISessionDTO";
import ILoginService from "../interfaces/services/ILoginService";
import UserRepository from "../repositories/UserRepository";

class LoginService implements ILoginService {
    async session(user: string, keyAccess: string): Promise<ISessionDTO> {
        const userFind = await UserRepository.getOne(user,keyAccess);

        if(!userFind){
            return {
                status: false,
                message: 'Credencias inválidas!'
            };
        }

        return {
            status: true,
            message: 'Login realizado com sucesso!',
            token: ''
        };
    }

}

export default new LoginService();