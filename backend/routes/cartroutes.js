// import express from "express";
// import { addtocart, getusercart, updatecart } from "../controller/cartcontroler.js";
// import isauth from "../middlewears/isauth.js";


// const cartroutes = express.Router();

// cartroutes.post("/get",isauth,getusercart)
// cartroutes.post("/add",isauth,addtocart)
// cartroutes.post("/update",isauth,updatecart)
// export default cartroutes;

import express from "express";
import { addtocart, getusercart, updatecart } from "../controller/cartcontroler.js";
import isauth from "../middlewears/isauth.js";

const router = express.Router();

router.post("/add", isauth, addtocart);
router.post("/update", isauth, updatecart);
router.get("/get", isauth, getusercart);

export default router;