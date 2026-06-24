import express from 'express'
import isauth from '../middlewears/isauth.js'
import {placeorder, userorders } from '../controller/ordercontroler.js'
import adminauth from '../middlewears/adminauth.js'
import { allorders, updatestatus } from '../controller/ordercontroler.js'


const orderroutes = express.Router()


// for user
orderroutes.post("/placeorder",isauth,placeorder)
orderroutes.post("/userorder",isauth,userorders)


// for admin
orderroutes.post("/list",adminauth,allorders)
orderroutes.post("/status",adminauth,updatestatus)



export default orderroutes