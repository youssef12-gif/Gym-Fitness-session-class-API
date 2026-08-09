
import { Router } from 'express'
import {signin, signout, signup} from '../controllers/authentication-controllers.js';
import { validateToken , checkuserInfoSignUp , checkuserInfoSignIn } from '../middlewares/middlewares.js';

export const authRouter = Router();

authRouter.post('/signup', checkuserInfoSignUp , signup);
authRouter.post('/signin' , checkuserInfoSignIn , signin);
authRouter.get('/signout', validateToken  , signout);
