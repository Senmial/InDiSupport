import express from 'express';
import { registerUser } from '../controllers/userController.js';

const Router = express.Router()

Router.post('/', registerUser)

export default Router;