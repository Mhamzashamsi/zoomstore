// // // // // import jwt from 'jsonwebtoken'

// // // // // const isauth = async(req,res,next)=>{
// // // // //     try{
// // // // // let {token}=req.cookies;
// // // // // if(!token){
// // // // //     return res.status(400).json({message:"user does not exist"})
// // // // // }
// // // // // let verifytoken = jwt.verify(token,process.env.JWT_SECRET)
// // // // // if(!verifytoken){
// // // // //     return res.status(400).json({message:"user does not have a valid token"})
// // // // // }
// // // // // req.userid = verifytoken.userid
// // // // // next()
// // // // //     }
// // // // //     catch(error){
// // // // // console.log("isauth error");
// // // // // return res.status(500).json({message:"isauth error ",error})
// // // // //     }
// // // // // }
// // // // // export default isauth




// // // // // import jwt from "jsonwebtoken";

// // // // // const isauth = (req, res, next) => {
// // // // //   try {
// // // // //     const token = req.cookies?.token; // safe access
// // // // //     console.log("Cookies received:", req.cookies);

// // // // //     if (!token) {
// // // // //       return res.status(401).json({ message: "Please login first" });
// // // // //     }

// // // // //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// // // // //     console.log("Decoded token:", decoded);

// // // // //     if (!decoded?.userid) {
// // // // //       return res.status(401).json({ message: "Invalid token structure" });
// // // // //     }

// // // // //     req.userid = decoded.userid;
// // // // //     next();
// // // // //   } catch (error) {
// // // // //     console.log("JWT Error:", error.message);
// // // // //     return res.status(401).json({ message: "Invalid or expired token", error: error.message });
// // // // //   }
// // // // // };

// // // // // export default isauth;


// // // // import jwt from "jsonwebtoken";

// // // // const isauth = (req, res, next) => {
// // // //   try {
// // // //     const token = req.cookies.token; // ✅ COOKIE SE LO

// // // //     if (!token) {
// // // //       return res.status(401).json({ message: "Pehle login karo" });
// // // //     }

// // // //     const decoded = jwt.verify(token, process.env.JWT_SECRET);

// // // //     req.userId = decoded.id;

// // // //     next();
// // // //   } catch (error) {
// // // //     return res.status(401).json({ message: "Token invalid ya expire" });
// // // //   }
// // // // };

// // // // export default isauth;
// // // import jwt from "jsonwebtoken";

// // // const isauth = (req, res, next) => {
// // //   try {
// // //     // ✅ HEADER se lo — cookie se nahi
// // //     const token = req.headers.token;

// // //     console.log("TOKEN MILA:", token); // debug ke liye

// // //     if (!token) {
// // //       return res.status(401).json({ message: "Pehle login karo" });
// // //     }

// // //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// // //     console.log("DECODED:", decoded); // debug ke liye

// // //     req.userId = decoded.id;
// // //     next();

// // //   } catch (error) {
// // //     console.log("JWT ERROR:", error.message);
// // //     return res.status(401).json({ message: "Token invalid ya expire" });
// // //   }
// // // };

// // // export default isauth;
// // import jwt from "jsonwebtoken";

// // const isauth = (req, res, next) => {
// //   try {
// //     // Frontend se "token" header mein aa raha hai
// //     const token = req.headers.token || req.headers.authorization;

// //     console.log("🔑 Received Token:", token ? "Yes" : "No");

// //     if (!token) {
// //       return res.status(401).json({ message: "Pehle login karo" });
// //     }

// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //     console.log("✅ Decoded User:", decoded);

// //     // ✅ Yeh line important hai — decoded mein kya key hai?
// //     req.userId = decoded.id || decoded.userid;   

// //     next();
// //   } catch (error) {
// //     console.log("JWT ERROR:", error.message);
// //     return res.status(401).json({ 
// //       message: "Token invalid ya expire ho gaya",
// //       error: error.message 
// //     });
// //   }
// // };

// // export default isauth;
// import jwt from "jsonwebtoken";

// const isauth = (req, res, next) => {
//   try {
//     const token = req.headers.token;   // Frontend se yahi aa raha hai

//     if (!token) {
//       return res.status(401).json({ message: "Pehle login karo" });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
//     req.userId = decoded.id || decoded.userid;   // dono possibilities
//     next();

//   } catch (error) {
//     console.log("JWT Error:", error.message);
//     return res.status(401).json({ message: "Invalid or expired token" });
//   }
// };

// export default isauth;
import jwt from "jsonwebtoken";

const isauth = (req, res, next) => {
  try {

    const token = req.headers.token || req.cookies?.token;  // ✅ header aur cookie dono check

    if (!token) {
      return res.status(401).json({ message: "Pehle login karo" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id || decoded.userid;   // ✅ dono possibilities handle

    next();

  } catch (error) {
    console.log("JWT Error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default isauth;