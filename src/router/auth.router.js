import express from 'express';
import authorize from '../middleware/authorize.middleware.js';
import { controllerAuthLogin, controllerAuthLogout } from '../controller/auth.controller.js';

const routerAuth = express.Router();

routerAuth.post('/login', controllerAuthLogin);
routerAuth.get('/logout', controllerAuthLogout)

export default routerAuth;