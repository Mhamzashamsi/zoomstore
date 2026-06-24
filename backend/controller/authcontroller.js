// // // // // import validator from 'validator';
// // // // // import User from '../models/usermodel.js';
// // // // // import bcrypt from 'bcryptjs';
// // // // // import { generatetoken } from '../config/token.js';


// // // // // export const register = async(req,res)=>{
// // // // // try{
// // // // //     const {name,email,password}=req.body;




// // // // // const existuser= await User.findOne({email:email})
// // // // // if(existuser){
// // // // //     return res.status(400).json({message:"user already exists"})
// // // // // }





// // // // // if(!validator .isEmail(email)){
// // // // //         return res.status(400).json({message:"Enter valid email"})

// // // // // }

// // // // // if(password.length >8){
// // // // //     return res.status(400) .json({message:"Enter strong password"})
// // // // // }

// // // // // let hasspassword = await bcrypt.hash(password,10)

// // // // // const user =await user.create({
// // // // //     name,
// // // // //     email,
// // // // //     password:hasspassword,
// // // // // })


// // // // // let token =await generatetoken(user._id)
// // // // // res.cookie("token",token,{
// // // // //     httponly:true,
// // // // //     secure:false,
// // // // //     samesite:"Strict",
// // // // //     maxage:7 * 24 * 60 * 60 * 1000
// // // // // })
// // // // // return res.status(201).json(user)
// // // // // }
// // // // // catch(error){
// // // // //     console.log(error);
// // // // //     return res.status(500).json({message:"Internal server error"})
// // // // // }

// // // // // }











// // // // // // let hasspassword = await bcrypt.hash(password,10)

// // // // // // 🤔 Agar simple bolun…

// // // // // // User ne signup pe likha:

// // // // // // password = "123456"
// // // // // // ❌ Galat tareeqa (unsafe)

// // // // // // Database mein save ho:

// // // // // // 123456

// // // // // // ❌ Hacker aaye → sab passwords mil gaye 💥

// // // // // // ✅ Sahi tareeqa (bcrypt use karke)
// // // // // // hashPassword = "$2b$10$KJd83jdn...xyz"

// // // // // // ✔️ Ye unreadable hota hai
// // // // // // ✔️ Original password wapas nahi milta
// // // // // // ✔️ Super secure 🔒

// // // // // // 🧠 bcrypt.hash(password, 10) ka matlab
// // // // // // 🔹 password

// // // // // // User ka real password

// // // // // // 🔹 10 (salt rounds)

// // // // // // Matlab 10 baar algorithm ghoomay ga

// // // // // // Jitna zyada number → utni zyada security

// // // // // // Commonly:

// // // // // // 10 ✅ (best balance)

// // // // // // 12 (zyada secure, thora slow)
// // // // import validator from 'validator';
// // // // import User from '../models/usermodel.js';
// // // // import bcrypt from 'bcryptjs';
// // // // import { generatetoken } from '../config/token.js';

// // // // export const register = async (req, res) => {
// // // //     try {
// // // //         const { name, email, password } = req.body;

// // // //         const existuser = await User.findOne({ email });
// // // //         if (existuser) {
// // // //             return res.status(400).json({ message: "User already exists" });
// // // //         }

// // // //         if (!validator.isEmail(email)) {
// // // //             return res.status(400).json({ message: "Enter valid email" });
// // // //         }

// // // //         if (password.length < 8) {
// // // //             return res.status(400).json({ message: "Password must be at least 8 characters" });
// // // //         }

// // // //         const hashpassword = await bcrypt.hash(password, 10);

// // // //         const user = await User.create({
// // // //             name,
// // // //             email,
// // // //             password: hashpassword,
// // // //         });

// // // //         const token = await generatetoken(user._id);
// // // //         res.cookie("token", token, {
// // // //             httpOnly: true,
// // // //             secure: false,
// // // //             sameSite: "Strict",
// // // //             maxAge: 7 * 24 * 60 * 60 * 1000
// // // //         });

// // // //         return res.status(201).json(user);

// // // //     } catch (error) {
// // // //         console.log(error);
// // // //         return res.status(500).json({ message: "Internal server error" });
// // // //     }
// // // // };
// // // import { useState, useContext } from "react";
// // // import axios from "axios";
// // // import { AuthContext } from "../Context/Authcontext";
// // // import { useNavigate } from "react-router-dom";

// // // const Registertion = () => {
// // //   const navigate = useNavigate();
// // //   const { serverurl } = useContext(AuthContext);

// // //   const [name, setname] = useState("");
// // //   const [email, setemail] = useState("");
// // //   const [password, setpassword] = useState("");
// // //   const [show, setshow] = useState(false);

// // //   const handlesignup = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const result = await axios.post(
// // //         serverurl + "/api/auth/register",
// // //         { name, email, password },
// // //         { withCredentials: true }
// // //       );
// // //       console.log(result.data);
// // //       navigate("/login");
// // //     } catch (err) {
// // //       console.log(err.response?.data || err.message);
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handlesignup}>
// // //       <input value={name} onChange={e => setname(e.target.value)} placeholder="Name" />
// // //       <input value={email} onChange={e => setemail(e.target.value)} placeholder="Email" />
// // //       <input value={password} onChange={e => setpassword(e.target.value)} type={show ? "text" : "password"} placeholder="Password" />
// // //       <button type="submit">Register</button>
// // //     </form>
// // //   );
// // // };

// // // export default Registertion;
// // import pkg from 'validator';
// // const { isStrongPassword } = pkg;
// // import User from '../models/usermodel.js';
// // import bcrypt from 'bcryptjs';
// // import { generatetoken, gentoken1 } from '../config/token.js';
// // import jwt from 'jsonwebtoken'  // ← Yeh add karein


// // export const register = async (req, res) => {
// //   try {
// //     const { name, email, password } = req.body;

// //     if (!validator.isEmail(email)) return res.status(400).json({ message: "Enter valid email" });
// //     if (password.length < 8) return res.status(400).json({ message: "Password must be at least 8 characters" });

// //     const existuser = await User.findOne({ email });
// //     if (existuser) return res.status(400).json({ message: "User already exists" });

// //     const hashpassword = await bcrypt.hash(password, 10);

// //     const user = await User.create({ name, email, password: hashpassword });

// //     const token = generatetoken(user._id);
// //     res.cookie("token", token, {
// //       httpOnly: true,
// //       secure: false,
// //       sameSite: "lax",
// //       maxAge: 7 * 24 * 60 * 60 * 1000
// //     });

// //     res.status(201).json(user);
// //   } catch (error) {
// //     console.log(error);
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // };

// // export const login = async(req,res)=>{
// //   try{
// //     let {email,password}= req.body;
// //     const user = await User.findOne({email})
// //  if(!user){
// //   return res.status(400).json({message:"Invalid email or password"})
// //  }
 
// // let ismatch =await bcrypt.compare(password,user.password)
// // if(!ismatch){
// //   return res.status(400).json({message:"Invalid email or password"})
// // }

// //  const token = generatetoken(user._id);
// //     res.cookie("token", token, {
// //       httpOnly: true,
// //       secure: false,
// //       sameSite: "lax",
// //       maxAge: 7 * 24 * 60 * 60 * 1000
// //     });

// //     res.status(201).json(user);


// //   }
// //   catch(error){
// //     console.log(error);
// //     res.status(500).json({message:"Internal server error"})
// //   }
// // }






// // export const logout =async(req,res)=>{
// // try{
// // res.clearCookie("token")
// //     res.status(200).json({message:"Logged out successfully"})



// // }
// // catch{
// //  console.log(error);
// //     res.status(500).json({message:"Internal server error"})
// // }


// // }

// // export const googlelogin = async (req, res) => {
// //   try {

// //     const { email, name } = req.body;

// //     let user = await User.findOne({ email });

// //     if (!user) {
// //       user = await User.create({
// //         name,
// //         email
// //       });
// //     }

// //     if (!user) {
// //   user = await User.create({
// //     name,
// //     email,
// //     provider: "google"
// //   });
// // }
// //     const token = generatetoken(user._id);

// //     res.cookie("token", token, {
// //       httpOnly: true,
// //       secure: false,
// //       sameSite: "lax",
// //       maxAge: 7 * 24 * 60 * 60 * 1000
// //     });

// //     return res.status(200).json(user);

// //   } catch (error) {
// //     console.log(error);
// //     res.status(500).json({ message: `google login failed: ${error.message}` });
// //   }
// // };









// // export const adminlogin = async (req, res) => {
// //   try {
// //     let { email, password } = req.body;
// //     if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
// //       let token = await gentoken1(email);

// //       res.cookie("token", token, {
// //         httpOnly: true,
// //         secure: false,
// //         sameSite: "lax",
// //         maxAge: 1 * 24 * 60 * 60 * 1000
// //       });

// //       return res.status(200).json(token);
// //     }

// //     return res.status(400).json({ message: "Invalid admin credentials" });

// //   } catch (error) {
// //     console.log(error);
// //     res.status(500).json({ message: `admin login error: ${error.message}` });
// //   }
// // }

// import validator from 'validator';  // ✅ Sahi import
// import User from '../models/usermodel.js';
// import bcrypt from 'bcryptjs';
// import { generatetoken } from '../config/token.js';

// export const register = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!validator.isEmail(email)) 
//       return res.status(400).json({ message: "Valid email daalo" });
    
//     if (password.length < 8) 
//       return res.status(400).json({ message: "Password 8 characters ka hona chahiye" });

//     const existuser = await User.findOne({ email });
//     if (existuser) 
//       return res.status(400).json({ message: "User pehle se exist karta hai" });

//     const hashpassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hashpassword });

//     const token = generatetoken(user._id);

//     // ✅ Token dono jagah bhejo
//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: false,
//       sameSite: "lax",
//       maxAge: 7 * 24 * 60 * 60 * 1000
//     });

//     return res.status(201).json({ success: true, token, user });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     const user = await User.findOne({ email });
//     if (!user) 
//       return res.status(400).json({ message: "Email ya password galat hai" });

//     const ismatch = await bcrypt.compare(password, user.password);
//     if (!ismatch) 
//       return res.status(400).json({ message: "Email ya password galat hai" });

//     const token = generatetoken(user._id);

//     // ✅ Token dono jagah bhejo
//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: false,
//       sameSite: "lax",
//       maxAge: 7 * 24 * 60 * 60 * 1000
//     });

//     return res.status(200).json({ success: true, token, user });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// export const logout = async (req, res) => {
//   try {
//     res.clearCookie("token");
//     return res.status(200).json({ message: "Logout ho gaye" });
//   } catch (error) {  // ✅ error parameter add kiya
//     console.log(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
import validator from 'validator';
import User from '../models/usermodel.js';
import bcrypt from 'bcryptjs';
import { generatetoken, gentoken1 } from '../config/token.js';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!validator.isEmail(email))
      return res.status(400).json({ message: "Valid email daalo" });

    if (password.length < 8)
      return res.status(400).json({ message: "Password 8 characters ka hona chahiye" });

    const existuser = await User.findOne({ email });
    if (existuser)
      return res.status(400).json({ message: "User pehle se exist karta hai" });

    const hashpassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashpassword });
    const token = generatetoken(user._id);

    res.cookie("token", token, {
      httpOnly: true, secure: false, sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(201).json({ success: true, token, user });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Email ya password galat hai" });

    const ismatch = await bcrypt.compare(password, user.password);
    if (!ismatch)
      return res.status(400).json({ message: "Email ya password galat hai" });

    const token = generatetoken(user._id);

    res.cookie("token", token, {
      httpOnly: true, secure: false, sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(200).json({ success: true, token, user });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logout ho gaye" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const googlelogin = async (req, res) => {
  try {
    const { email, name } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email, provider: "google" });
    }

    const token = generatetoken(user._id);

    res.cookie("token", token, {
      httpOnly: true, secure: false, sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(200).json({ success: true, token, user });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Google login failed: ${error.message}` });
  }
};

export const adminlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = gentoken1(email);

      res.cookie("token", token, {
        httpOnly: true, secure: false, sameSite: "lax",
        maxAge: 1 * 24 * 60 * 60 * 1000
      });

      return res.status(200).json({ success: true, token });
    }

    return res.status(400).json({ message: "Invalid admin credentials" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Admin login error: ${error.message}` });
  }
};