import { Router } from 'express';
import PingController from './app/modules/ping/PingController';
import loginRoutes from './app/modules/login/login.routes';

const routes = Router();

routes.get('/', PingController.ping);

routes.use('/login',loginRoutes);

export default routes;

