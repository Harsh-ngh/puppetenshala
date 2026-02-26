import Router from 'express';
import { addMessage, getMessage, updateMessage, deleteMessage } from '../Controllers/MessageController.js';
import { messageValidation } from '../Middlewares/MessageValidation.js';

const router = Router();
router.post('/addMessage',addMessage);
router.get('/getMessage', getMessage);
router.put('/updateMessages/:id', messageValidation, updateMessage);
router.delete('/deleteMessages/:id', deleteMessage);

export default router;


// frontend -> api -> backend server request -> router -> controller -> model -> db
// frontend <- api <- backend server response <- router <- controller <- model <- db