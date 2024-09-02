import express from "express";
import mongoose from "mongoose";
import { regValidation, loginValidation, postCreateValidation } from "./validations/validation.js"; 
import checkAuth from "./utils/checkAuth.js";
import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostController.js';

const DB = 'mongodb://localhost:27017/TSG'
mongoose
    .connect( DB )
    .then( () => console.log('DB Ok') )
    .catch( (err) => console.log('DB error', err) );
 
const app = express();

const PORT = "4444";

app.use( express.json() );

app.post('/auth/login', loginValidation, UserController.login);
app.post('/auth/registr', regValidation, UserController.registration);
app.get('/auth/user', checkAuth, UserController.getUser);

app.get('/posts', PostController.getAll);
app.get('/posts:id', PostController.getOne);
app.post('/posts', checkAuth, postCreateValidation, PostController.create);
//app.delete('/posts', PostController.remove);
//app.patch('/posts', PostController.update);

app.listen( PORT, (err) => {
    (err) ? console.log (err) : console.log ('Server On');
});