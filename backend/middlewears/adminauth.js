// import jwt from "jsonwebtoken";

// export const adminauth =async(req,res,next)=>{
//     try{
// let {token}=req.cookies
// if(!token){
//     return res.status(401).json({message:"Unauthorized login required"})
// }
// let verify = jwt.verify(token,process.env.JWT_SECRET)
// if(!verify){
//     return res.status(401).json({message:"Not Authorized please login first"})
// }
// req.admin = verify.admin
// next()
//     }
//     catch(error){
//         return res.status(500).json({message:`Internal Server Error,${error.message}`})
//     }
// }
import jwt from "jsonwebtoken";

export const adminauth = async (req, res, next) => {
  try {
    let { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized login required" });
    }

    let verify = jwt.verify(token, process.env.JWT_SECRET);
    if (!verify) {
      return res.status(401).json({ message: "Not Authorized please login first" });
    }

    req.adminEmail = verify.email; // ✅ was verify.admin — payload key is "email"
    next();
  } catch (error) {
    return res.status(500).json({ message: `Internal Server Error, ${error.message}` });
  }
};
export default adminauth;