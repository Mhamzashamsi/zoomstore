
// import User from "../models/usermodel.js";

// export const getcurrentuser = async (req, res) => {
//   try {

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     return res.status(200).json(user);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: `Get current user error: ${error.message}` });
//   }
// };

// export const getadmin=async(req,res)=>{
//   try{

// let adminemail=req.adminEmail
// if(!adminemail){
//     return res.status(404).json({message:"Unauthorized login required"})
// }
// return res.status(201).json({email:adminemail,role:"admin"})
//   }
//   catch(error){
// console.log(error)
// return res.status(500).json({message:`Get admin error: ${error.message}`})
//   }
// }
// usercontroler.js
// usercontroler.js
import User from "../models/usermodel.js";

export const getcurrentuser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: `Get current user error: ${error.message}` });
  }
};

export const getadmin = async (req, res) => {
  try {
    let adminemail = req.adminEmail;
    if (!adminemail) {
      return res.status(404).json({ message: "Unauthorized login required" });
    }
    return res.status(201).json({ email: adminemail, role: "admin" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: `Get admin error: ${error.message}` });
  }
};