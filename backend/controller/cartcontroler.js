// // // import User from "../models/usermodel.js";







// // // export const addtocart = async (req,res)=>{

// // //     try{
// // // const {itemId,size} = req.body;

// // // const userdata = await User.findById(req.userId)

// // // // check if user exist
// // // if(!userdata){
// // //     return res.status(404).json({message:"User not found"});
// // // }
// // // let cartdata = userdata.cartdata || {};

// // // if(cartdata[itemId]){
// // //     if(cartdata[itemId][size]){
// // //         cartdata[itemId][size] += 1;

// // //     }
// // //     else{
// // //         cartdata[itemId][size] = 1;
// // //     }}
// // //     else{
// // // cartdata[itemId] = {};
// // //         cartdata[itemId] [size]=1 ;
// // //     }
// // //     await User.findByIdAndUpdate(req.userId,{cartdata});
// // // return res.status(201).json({message:"Added to cart"})









// // //     }

// // //     catch(error){
// // // console.log(error);
// // // return res.status(500).json({message:"add to cart  error"});
    
// // // }

// // // }


// // // export const updatecart = async(req,res)=>{

// // // try{
// // //     const {itemId,size,quantity} = req.body;
// // //     const userdata = await User.findById(req.userId)

// // // cartdata = [itemId][size] = quantity;
// // // await User.findByIdAndUpdate(req.userId,[cartdata])

// // // return res.status(201).json({message:"cart updated"})

// // // }
// // // catch(error){
// // //     console.log(error);
// // //     return res.status(500).json({message:"cart update error"});
// // // }


// // // }
 
// // // export const getusercart = async (req,res)=>{

// // //     try {
// // // const userdata = await User.findById(req.userId)
// // // let cartdata = await userdata.cartdata;

// // // return res.status(200).json(cartdata)



// // //     }
// // // catch(error){
// // //     console.log(error);
// // //     return res.status(500).json({message:"Error fetching user cart"});
// // // }








// // // }





// // import User from "../models/usermodel.js";

// // // ✅ ADD TO CART
// // export const addtocart = async (req, res) => {
// //     try {
// //         const { itemId, size } = req.body;

// //         const userdata = await User.findById(req.userId);

// //         if (!userdata) {
// //             return res.status(404).json({ message: "User not found" });
// //         }

// //         let cartdata = userdata.cartdata || {};

// //         if (cartdata[itemId]) {
// //             if (cartdata[itemId][size]) {
// //                 cartdata[itemId][size] += 1;
// //             } else {
// //                 cartdata[itemId][size] = 1;
// //             }
// //         } else {
// //             cartdata[itemId] = {};
// //             cartdata[itemId][size] = 1;
// //         }

// //         await User.findByIdAndUpdate(req.userId, { cartdata });

// //         return res.status(200).json({ message: "Added to cart" });

// //     } catch (error) {
// //         console.log(error);
// //         return res.status(500).json({ message: "Add to cart error" });
// //     }
// // };

// // // ✅ UPDATE CART (quantity change)
// // export const updatecart = async (req, res) => {
// //     try {
// //         const { itemId, size, quantity } = req.body;

// //         const userdata = await User.findById(req.userId);

// //         let cartdata = userdata.cartdata || {};

// //         if (cartdata[itemId] && cartdata[itemId][size] !== undefined) {
// //             if (quantity <= 0) {
// //                 delete cartdata[itemId][size];
// //             } else {
// //                 cartdata[itemId][size] = quantity;
// //             }
// //         }

// //         await User.findByIdAndUpdate(req.userId, { cartdata });

// //         return res.status(200).json({ message: "Cart updated" });

// //     } catch (error) {
// //         console.log(error);
// //         return res.status(500).json({ message: "Cart update error" });
// //     }
// // };

// // // ✅ GET USER CART
// // export const getusercart = async (req, res) => {
// //     try {
// //         const userdata = await User.findById(req.userId);
// //         return res.status(200).json(userdata.cartdata || {});
// //     } catch (error) {
// //         console.log(error);
// //         return res.status(500).json({ message: "Error fetching cart" });
// //     }
// // };

// // ADD TO CART
// export const addtocart = async (req, res) => {
//     try {
//         const { itemId, size } = req.body;

//         const userdata = await User.findById(req.userId);
//         if (!userdata) {
//             return res.status(404).json({ message: "User nahi mila" });
//         }

//         let cartdata = userdata.cartdata || {};

//         if (cartdata[itemId]) {
//             cartdata[itemId][size] = (cartdata[itemId][size] || 0) + 1;
//         } else {
//             cartdata[itemId] = { [size]: 1 };
//         }

//         userdata.cartdata = cartdata;
//         userdata.markModified("cartdata"); // ✅ Yeh line ZAROOR chahiye
//         await userdata.save();

//         return res.status(200).json({ message: "Cart mein add ho gaya" });

//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ message: "Add to cart error" });
//     }
// };

// // UPDATE CART
// export const updatecart = async (req, res) => {
//     try {
//         const { itemId, size, quantity } = req.body;

//         const userdata = await User.findById(req.userId);
//         if (!userdata) {
//             return res.status(404).json({ message: "User nahi mila" });
//         }

//         let cartdata = userdata.cartdata || {};

//         if (quantity <= 0) {
//             delete cartdata[itemId]?.[size];
//         } else {
//             if (!cartdata[itemId]) cartdata[itemId] = {};
//             cartdata[itemId][size] = quantity;
//         }

//         userdata.cartdata = cartdata;
//         userdata.markModified("cartdata"); // ✅ Yeh line ZAROOR chahiye
//         await userdata.save();

//         return res.status(200).json({ message: "Cart update ho gaya" });

//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ message: "Cart update error" });
//     }
// };

// // GET CART — Yeh theek hai, koi change nahi
// export const getusercart = async (req, res) => {
//     try {
//         const userdata = await User.findById(req.userId);
//         if (!userdata) {
//             return res.status(404).json({ message: "User nahi mila" });
//         }
//         return res.status(200).json(userdata.cartdata || {});
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ message: "Cart fetch error" });
//     }
// };
import User from "../models/usermodel.js";

// ADD TO CART
// ADD TO CART
export const addtocart = async (req, res) => {
    try {
        const { itemId, size } = req.body;

        const userdata = await User.findById(req.userId);
        if (!userdata) {
            return res.status(404).json({ message: "User not found" });
        }

        let cartdata = userdata.cartdata || {};

        if (!cartdata[itemId]) {
            cartdata[itemId] = {};
        }

        cartdata[itemId][size] = (cartdata[itemId][size] || 0) + 1;

        userdata.cartdata = cartdata;
        userdata.markModified("cartdata");   // ← Bahut zaroori
        await userdata.save();

        res.status(200).json({ 
            success: true, 
            message: "Added to cart",
            cartdata 
        });

    } catch (error) {
        console.log("Add to cart error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// UPDATE CART
export const updatecart = async (req, res) => {
    try {
        const { itemId, size, quantity } = req.body;
        const userdata = await User.findById(req.userId);

        if (!userdata) {
            return res.status(404).json({ message: "User nahi mila" });
        }

        let cartdata = userdata.cartdata || {};

        // ✅ Pehle check karo itemId exist karta hai ya nahi
        if (quantity <= 0) {
            if (cartdata[itemId]) {
                delete cartdata[itemId][size];
            }
        } else {
            if (!cartdata[itemId]) cartdata[itemId] = {};
            cartdata[itemId][size] = quantity;
        }

        userdata.cartdata = cartdata;
        userdata.markModified("cartdata");
        await userdata.save();

        return res.status(200).json({ message: "Cart update ho gaya" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Cart update error" });
    }
};

// GET CART
export const getusercart = async (req, res) => {
    try {
        const userdata = await User.findById(req.userId);

        if (!userdata) {
            return res.status(404).json({ message: "User nahi mila" });
        }

        return res.status(200).json(userdata.cartdata || {});

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Cart fetch error" });
    }
};