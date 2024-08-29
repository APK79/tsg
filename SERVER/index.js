import express from "express";
import mongoose from "mongoose";
import { regValidation } from "./validations/auth.js"; 
import checkAuth from "./utils/checkAuth.js";
import * as UserController from './controllers/UserController.js'

const DB = 'mongodb://localhost:27017/TSG'
mongoose
    .connect( DB )
    .then( () => console.log('DB Ok') )
    .catch( (err) => console.log('DB error', err) );
 
const app = express();

const PORT = "4444";

app.use( express.json() );

app.post('/auth/login', UserController.login);
app.post('/auth/registr', regValidation, UserController.registration);
app.get('/auth/user', checkAuth, UserController.getUser);


app.listen( PORT, (err) => {
    (err) ? console.log (err) : console.log ('Server On');
});