import 'dotenv/config';
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { regValidation, loginValidation, postCreateValidation } from "./validations/validation.js"; 
import checkAuth from "./utils/checkAuth.js";
import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostController.js';
//import router from './router/router.js';


const app = express();

const DB = process.env.DB_URL;
const PORT = process.env.PORT_URL || "4444";

app.use( express.json() );
app.use(cors());

const start = async () => {
    try {

        await mongoose.connect( DB )
            .then( () => console.log('Database Connection Success') )
            .catch( (err) => console.log('Database Connection error', err) );

        app.listen( PORT, (err) => {
            (err) ? console.log (err) : console.log (`Server started on PORT ${PORT}`);
        });


    } catch (err) {
        console.log (err);
    }

 }
 app.post('/auth/login', loginValidation, UserController.login);
 app.post('/auth/registr', regValidation, UserController.registration);
 app.get('/auth/user', checkAuth, UserController.getUser);
 
 app.get('/posts', PostController.getAll);
 app.get('/posts/:id', PostController.getOne);
 app.post('/posts', checkAuth, postCreateValidation, PostController.create);
 app.delete('/posts/:id', checkAuth, PostController.remove);
 app.patch('/posts/:id', checkAuth, postCreateValidation, PostController.update);

start();
