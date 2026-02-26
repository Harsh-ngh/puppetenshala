import {Router} from 'express';
import addCredentials from '../Controllers/CredentialController.js';
import { credentialValidation } from '../Middlewares/CredentialValidation.js';
import upload from '../Middlewares/Upload.js';

const router = Router();
router.post('/addCredentials',credentialValidation, upload.single('resume'), addCredentials);

export default router;