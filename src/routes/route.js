// import deserializerUser from './middlewair/deselirizetion.middlewaire.js';
import { getAllUserController, getUserByIdController } from '../controlers/user.controlers.js';
import { deleteProfileController, updateProfileController } from '../controlers/profile.controller.js';
import { loginFuncController,  registerFunc } from '../controlers/auth.controller.js';
import { getProductController, postProductController } from '../controlers/productConntroller.js';
import { GetAllVideo, VideoUpload } from '../controlers/VideoController.js';
import chatBot from '../service/chatBot.js';

const routeCollection = (app)=>{

app.get("/user", getAllUserController);

app.get("/videos", GetAllVideo );

app.get("/user/:id", getUserByIdController);

app.post("/login", loginFuncController);

app.post("/register", registerFunc);

app.post("/createv", VideoUpload);

app.put("/update-profile/:id", updateProfileController);

app.delete("/delete-profile/:id", deleteProfileController);

app.get("/get-product", getProductController);

app.post("/upload-product", postProductController);

app.post('/api/chat', chatBot);

// app.get('/user-profile', deserializerUser);
// app.get("/logout", logoutController);


}

export default routeCollection;