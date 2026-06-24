// // import order from "../models/ordermodel.js"
// // import User from '../models/usermodel.js'

// //  export const placeorder = async (req,res) =>{

// // try{

// // const { items, amount, address } = req.body;
// // const userId = req.userId;
// // const orderdata = {
// //     items,
// //     amount,
// //     userId,
// //     address,
// //     paymentMETHOD:'COD',
// //     payment:false,
// //     date:Date.now()
// // }
// // const neworder = new order (orderdata)
// // await neworder.save()
// // await User.findByIdAndUpdate(userId,{cartdata:{}})
// // return res.status(201).json({message:'Order Place'})
// // res.json({ success: true, message: 'Order Placed Successfully' })

// // }
// // catch(error){
// //     console.log(error)
// // res.status(500).json({message:" Order place error"})
// // }


// // }



// import order from "../models/ordermodel.js"
// import User from '../models/usermodel.js'



// export const placeorder = async (req, res) => {
//   try {

//     const { items, amount, address } = req.body;
//     const userId = req.userId;

//     const orderdata = {
//       items,
//       amount,
//       userId,
//       address,
//       paymentMETHOD: 'COD',
//       payment: false,
//       date: Date.now()
//     };

//     const neworder = new order(orderdata);
//     await neworder.save();

//     await User.findByIdAndUpdate(userId, { cartdata: {} });

//     return res.status(201).json({
//       success: true,
//       message: 'Order Placed Successfully'
//     });

//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       success: false,
//       message: "Order place error"
//     });
//   }
// };


// export const userorders = async (req,res) =>{
//     try{
//         const userId = req.userId;
//         const orders = await Order.find({userId})
//         return res.status(200).json(orders)
//     }
//     catch(error){
//         console.log(error)
// return res.status(500).json({message : "userorders error"})
//     }
// }














import order from "../models/ordermodel.js"
import User from '../models/usermodel.js'




//for user
export const placeorder = async (req, res) => {
  try {

    const { items, amount, address } = req.body;
    const userId = req.userId;

    const orderdata = {
      items,
      amount,
      userId,
      address,
      paymentMETHOD: 'COD',
      payment: false,
      date: Date.now()
    };

    const neworder = new order(orderdata);
    await neworder.save();

    await User.findByIdAndUpdate(userId, { cartdata: {} });

    return res.status(201).json({
      success: true,
      message: 'Order Placed Successfully'
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Order place error"
    });
  }
};


export const userorders = async (req, res) => {
  try {

    const userId = req.userId;                      // ✅ isauth se aa raha hai
    const orders = await order.find({ userId })     // ✅ lowercase order (import match)

    return res.status(200).json(orders)

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "userorders error" })
  }
}

// fro admin

export const allorders = async (req,res)=>{
  try{
const orders = await order.find({})
res.status(200).json(orders)
  }
  catch(error){
    console.log(error)
    return res.status(500).json({ message: "allorders error" })
  }
}


export const updatestatus = async (req,res) =>{
  try{

const {orderId,status} = req.body
await order.findByIdAndUpdate(orderId,{status})
return res.status(200).json({message:"Status Updated"})

  }
  catch(error){
    console.log(error)
    return res.status(500).json({ message: "updatestatus error" })
  }
}