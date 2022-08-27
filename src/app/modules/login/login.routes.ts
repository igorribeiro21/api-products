import { Router } from 'express';
import LoginController from './controllers/LoginController';

const loginRoutes = Router();

loginRoutes.post(
    '/',
    LoginController.login
);

export default loginRoutes;