import express from "express";
import { registerUser } from "../controller/user.controller.js"; //remember to use add .js 

const router = express.Router();

// - Define all routes in this file
// - these routes will be imported in index.js
// - resgisterUser is function defined in user.controller.jrouter.get('/register',registerUser)

router.get('/register', registerUser); // this is the route for registering a user

export default router;