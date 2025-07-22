import express from "express";
import { login, registerUser, verifyUser } from "../controller/user.controller.js"; //remember to use add .js 

const router = express.Router();

// - Define all routes in this file
// - these routes will be imported in index.js
// - resgisterUser is function defined in user.controller.jrouter.get('/register',registerUser)

router.post('/register', registerUser); // this is the route for registering a user
router.get("/verify/:token", verifyUser);
router.post("/login", login);
export default router;