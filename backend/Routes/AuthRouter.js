import { signup, login } from '../Controllers/AuthController.js';  
import { signupValidation, loginValidation } from '../Middlewares/AuthValidation.js';  
import { Router } from 'express';

const router = Router();

const authRoutes = () => {
    router.post('/login', loginValidation, login);
    router.post('/signup', signupValidation, signup);
}
export default authRoutes;
