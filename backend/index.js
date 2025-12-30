
import express from 'express';
import authRoutes from './Routes/AuthRouter.js';  
import credentialRoutes from './Routes/CredentialRouter.js';
import messageRoutes from './Routes/MessageRouter.js';
import automationRoutes from './Routes/AutomationRouter.js'; 

import cors from 'cors';
import bodyParser from 'body-parser';
import db from './Models/db.js';


db();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/credential', credentialRoutes);
app.use('/message', messageRoutes);
app.use('/automation', automationRoutes);


app.get("/", (req, res) => {
    res.send("Server is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
