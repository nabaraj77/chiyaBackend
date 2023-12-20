import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
} from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

//register user
router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);

//login user
router.route("/login").post(loginUser);

//SECURE ROUTE
//logout user
router.route("/logout").post(verifyJWT, logoutUser);
//refreshAccessToken
router.route("/refresh-access-token").post(refreshAccessToken);
//update password
router.route("/update-password").post(verifyJWT, changeCurrentPassword);
//get current user
router.route("/get-current-user").post(verifyJWT, getCurrentUser);

export default router;
