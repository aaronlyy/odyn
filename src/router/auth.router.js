import express from 'express';
import authorize from '../middleware/authorize.middleware.js';
import { controllerAuthLogin } from '../controller/auth.controller.js';

const routerAuth = express.Router();

routerAuth.get('/login', controllerAuthLogin);

export default routerAuth;