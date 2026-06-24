import express from 'express'
import isauth from '../middlewears/isauth.js'
import { getadmin, getcurrentuser } from '../controller/usercontroler.js'
import { adminauth } from '../middlewears/adminauth.js';

let userroutes= express.Router()
userroutes.get("/getcurrentuser",isauth,getcurrentuser);
userroutes.get("/getadmin",adminauth,getadmin);



export default userroutes