import { Request, Response } from 'express';
import LoginService from '../services/LoginService';

class LoginController {
    async login(req: Request, res: Response): Promise<Response> {
        const { user, keyAccess } = req.body;

        const login = await LoginService.login(user, keyAccess);

        if (!login.status) {
            return res.status(401).json({
                message: login.message
            });
        }

        return res.status(200).json(login);
    }


}

export default new LoginController();