import { getAllUserController, getUserByIdController } from "../controlers/user.controlers.js";
import { deleteProfileController, updateProfileController } from "../controlers/profile.controller.js";
import { loginFuncController, registerFunc } from "../controlers/auth.controller.js";
import { getProductController, postProductController } from "../controlers/productConntroller.js";
import { GetAllVideo, VideoUpload } from "../controlers/VideoController.js";
import chatBot from "../service/chatBot.js";
import deserializerUser from "../middlewair/deserializerUser.js";

const routeCollection = (app) => {

  // ✅ Health check (Railway ke liye MUST)
  app.get("/", (req, res) => {
    res.status(200).json({
      success: true,
      message: "Backend is working 🚀",
    });
  });

  // 🔓 Public routes
  app.post("/login", loginFuncController);
  app.post("/register", registerFunc);

  app.get("/user", getAllUserController);
  app.get("/user/:id", getUserByIdController);

  app.get("/videos", GetAllVideo);
  app.post("/createv", VideoUpload);

  app.get("/get-product", getProductController);
  app.post("/upload-product", postProductController);

  app.post("/api/chat", chatBot);

  // 🔐 Protected route example
  app.get(
    "/user-profile",
    deserializerUser,
    (req, res) => {
      res.json({
        success: true,
        user: req.user,
      });
    }
  );

  app.put("/update-profile/:id", deserializerUser, updateProfileController);
  app.delete("/delete-profile/:id", deserializerUser, deleteProfileController);
};

export default routeCollection;
