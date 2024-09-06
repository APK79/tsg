import { regValidation, loginValidation, postCreateValidation } from "../validations/validation.js"; 
import checkAuth from "../utils/checkAuth.js";
import * as UserController from '../controllers/UserController.js';
import * as PostController from '../controllers/PostController.js';


const router = () => {

app.post('/auth/login', loginValidation, UserController.login);
app.post('/auth/registr', regValidation, UserController.registration);
app.get('/auth/user', checkAuth, UserController.getUser);

app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.post('/posts', checkAuth, postCreateValidation, PostController.create);
app.delete('/posts/:id', checkAuth, PostController.remove);
app.patch('/posts/:id', checkAuth, postCreateValidation, PostController.update);

}

export default router;