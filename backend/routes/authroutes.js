// import express from "express";
// import { register } from "../controller/uthancontroller.js";

// // const authroutes =express.Router();
// // authroutes.post("/register",register)
// const authroutes = express.Router();
// authroutes.post("/register", register);

// export default authroutes; // ⚡ Ye bahut zaroori hai
import express from "express";
import { adminlogin, googlelogin, login,logout,register } from "../controller/authcontroller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/googlelogin", googlelogin);
router.post("/adminlogin", adminlogin);




export default router;