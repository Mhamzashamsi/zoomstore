import express from 'express';

import { addproduct, listproduct, removeproduct } from '../controller/productcontroler.js';
import upload from '../middlewears/multer.js';
import adminAuth from '../middlewears/adminAuth.js';



let productrouter = express.Router()

productrouter.post("/addproduct",upload.fields([
   { name:"image1",maxCount:1},
    { name:"image2",maxCount:1},
    { name:"image3",maxCount:1},
    { name:"image4",maxCount:1},
]),addproduct)



productrouter.get("/list",listproduct)
productrouter.post("/remove/:id",adminAuth,removeproduct)





export default productrouter