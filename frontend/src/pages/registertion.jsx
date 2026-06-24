// // import { useNavigate } from 'react-router-dom'
// // import google from "../assets/google-logo.png"
// // import { IoEyeOutline } from "react-icons/io5";
// // import { IoEyeOffSharp } from "react-icons/io5";
// // import { AuthContext } from "../Context/Authcontext"
// // import { useContext, useState } from 'react';
// // import axios from 'axios'
// // import { signInWithPopup } from 'firebase/auth';
// // import { auth,provider } from '../utiles/firebase';
// // import { Userdatacontext } from '../Context/usercontext';

// // const registertion = () => {

// // let Navigate = useNavigate()

// // let {serverurl}=useContext(AuthContext)
// // let {getcurrentuser}=useContext(Userdatacontext)

// // const [show, setshow] = useState(false)

// // let [name, setname]= useState("")
// // let [email, setemail]= useState("")
// // let [password, setpassword]= useState("")

// // const handlesignup=async(e)=>{
// // e.preventDefault()
// // try{
// // let result = await axios.post(
// //   serverurl + "/api/auth/register",
// //   { name, email, password },
// //   { withCredentials: true }
// // );
// // console.log(serverurl)
// // console.log(result.data)
// // getcurrentuser()
// // Navigate("/")
// // }
// // catch(err){
// //   console.log(err)
// // }
// // }




// // const googlesignup = async()=>{

// // try{
// // const response = await signInWithPopup(auth,provider);
// // let user = response.user;
// // let name = user.displayName;
// // let email = user.email;

// // const result = await axios.post(serverurl + "/api/auth/googlelogin",{
// //   name,
// //   email
// // },{ withCredentials: true })
// // console.log(result.data)
// // Navigate("/")




// // }
// // catch{
// // console.log("Google login failed")
// // }






// // }



















// //   return (
// //     <div className=' w-[100vw] h-[100vh] bg-gradient-to-l from-[#141141] to-[#0c2025] text-[white] flex flex-col items-center justify-start '>



// //       <div className='w-[100%] h-[80px] flex items-center justify-start gap-[10px] px-[30px] cursor-pointer' onClick={()=>Navigate("/")}>
// //         <img className='w-[40px]' src="./src/vcart logo.png" alt="Logo" />
// //       <h1 className='text-[22px] font-sans'>Zoom mart</h1></div>
   
   
   
// //       <div className=' w-[100%] h-[100px] flex items-center justify-center gap-[10px] flex-col'>
// //         <span className='text-[25px] font-bold'>Registeration</span>
// //                 <span className='text-[16px]'>Welcome to zoom mart , Place your order   </span>

// //       </div>
// //       <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] rounded-[10px] border-[1px] border-[#96969635] backdrop:backdrop-blur-2xl rounded-lg flex items-center justify-center '>
// // <form onSubmit={handlesignup} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'  action="">
// // <div onClick={googlesignup}
// //  className='w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer'>
// //   <img className='w-[20px]' src={google} alt=""/> Register with google
// // </div>
// // <div className='w-[100%]  h-[20px] flex items-center justify-center gap-[10px] '>
// //   <div className='w-[40%] h-[1px] bg-[#96969635] '></div> 
// //   OR
// // <div className='w-[40%] h-[1px] bg-[#96969635] '></div>
// // </div>
// // <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative'> 
// // <input onChange={(e)=>setname(e.target.value)} value={name} type="text" required placeholder='UserName' className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold ' />
// // <input onChange={(e)=>setemail(e.target.value)} value={email} type="email" required placeholder='Email' className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold ' />
// // <input onChange={(e)=>setpassword(e.target.value)} value={password} type={show ? "text" : "password" } required placeholder='Password' className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold  ' />

// // {!show &&< IoEyeOffSharp className='w-[20px] h-[20px]  cursor-pointer absolute right-[5%] top-[50%]   ' onClick={()=>setshow(prev=> !prev)} />}
// //    { show &&<IoEyeOutline className='w-[20px] h-[20px]  cursor-pointer absolute right-[5%] top-[50%]  ' onClick={()=>setshow(prev=> !prev)} />}


// // <button className='w-[100%] h-[50px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg text-white font-bold cursor-pointer'>Create Account </button>
// // <p className='flex gap-[10px]'>Already have an account? <span className='text-blue-400 cursor-pointer text-[17px]' onClick={()=>Navigate("/login")}>Login</span></p>

// // </div>





















// // </form>
// //       </div>
      
      
      
      
      
      
      
      
      
       
      
      
// //        </div>
// //   )
// // }

// // export default registertion




// // hum na jo api baniy hain backend main ab hum osko frontend main lay kar ay ga

// // Final Simple Words Mein

// // show decide karta hai password dikhega ya nahi

// // !show opposite condition check karta hai

// // && ka matlab hai: "agar true hai to dikhao"



// // Matlab:

// // "React, mujhe previous value do... aur main uska ulta kar deta hoon"

// // 🔥 Step By Step Breakdown
// // prev kya hai?

// // prev = previous value of show
// import { useNavigate } from 'react-router-dom';
// import google from "../assets/google-logo.png";
// import { IoEyeOutline, IoEyeOffSharp } from "react-icons/io5";
// import { AuthContext } from "../Context/Authcontext";
// import { useContext, useState } from 'react';
// import axios from 'axios';
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '../utiles/firebase';
// import { Userdatacontext } from '../Context/usercontext';

// const Registertion = () => {
//   const Navigate = useNavigate();

//   const { serverurl } = useContext(AuthContext);
//   let { getcurrentuser } = useContext(Userdatacontext);

//   const [show, setshow] = useState(false);
//   const [name, setname] = useState("");
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");

//   // Regular signup
//   const handlesignup = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await axios.post(
//         `${serverurl}/api/auth/register`,
//         { name, email, password },
//         { withCredentials: true }
//       );
//       console.log("Server URL:", serverurl);
//       console.log("Response:", result.data);
//       getcurrentuser(); // fetch current user after signup
//       Navigate("/");
//     } catch (err) {
//       console.log("Signup Error:", err);
//     }
//   };

//   // Google signup
//   const googlesignup = async () => {
//     try {
//       const response = await signInWithPopup(auth, provider);
//       const user = response.user;
//       const name = user.displayName;
//       const email = user.email;

//       const result = await axios.post(
//         `${serverurl}/api/auth/googlelogin`,
//         { name, email },
//         { withCredentials: true }
//       );
//       console.log("Google Login Response:", result.data);
//       getcurrentuser();
//       Navigate("/");
//     } catch (err) {
//       console.log("Google login failed:", err);
//     }
//   };

//   return (
//     <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141141] to-[#0c2025] text-white flex flex-col items-center justify-start'>
      
//       {/* Logo */}
//       <div className='w-[100%] h-[80px] flex items-center justify-start gap-[10px] px-[30px] cursor-pointer' onClick={() => Navigate("/")}>
//         <img className='w-[40px]' src="./src/vcart logo.png" alt="Logo" />
//         <h1 className='text-[22px] font-sans'>Zoom mart</h1>
//       </div>

//       {/* Title */}
//       <div className='w-[100%] h-[100px] flex flex-col items-center justify-center gap-[10px]'>
//         <span className='text-[25px] font-bold'>Registration</span>
//         <span className='text-[16px]'>Welcome to Zoom Mart, place your order</span>
//       </div>

//       {/* Form container */}
//       <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] rounded-[10px] border-[1px] border-[#96969635] backdrop:backdrop-blur-2xl flex items-center justify-center'>
//         <form onSubmit={handlesignup} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>

//           {/* Google signup button */}
//           <div onClick={googlesignup} className='w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer'>
//             <img className='w-[20px]' src={google} alt=""/> Register with Google
//           </div>

//           {/* OR divider */}
//           <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
//             <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
//             OR
//             <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
//           </div>

//           {/* Form inputs */}
//           <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative'>
//             <input 
//               type="text" required placeholder='UserName' 
//               className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold'
//               value={name} onChange={e => setname(e.target.value)}
//             />
//             <input 
//               type="email" required placeholder='Email' 
//               className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold'
//               value={email} onChange={e => setemail(e.target.value)}
//             />
//             <input 
//               type={show ? "text" : "password"} required placeholder='Password'
//               className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold'
//               value={password} onChange={e => setpassword(e.target.value)}
//             />

//             {/* Show/hide password */}
//             {!show && <IoEyeOffSharp className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] top-[50%]' onClick={() => setshow(prev => !prev)} />}
//             {show && <IoEyeOutline className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] top-[50%]' onClick={() => setshow(prev => !prev)} />}

//             <button className='w-[100%] h-[50px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg text-white font-bold cursor-pointer'>
//               Create Account
//             </button>

//             <p className='flex gap-[10px]'>
//               Already have an account? 
//               <span className='text-blue-400 cursor-pointer text-[17px]' onClick={() => Navigate("/login")}>
//                 Login
//               </span>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Registertion;


import { useNavigate } from 'react-router-dom';
import google from "../assets/google-logo.png";
import { IoEyeOutline, IoEyeOffSharp } from "react-icons/io5";
import { AuthContext } from "../Context/Authcontext";
import { useContext, useState } from 'react';
import axios from 'axios';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utiles/firebase';

const Registertion = () => {
  const Navigate = useNavigate();
  const { serverurl, setToken, setUserdata } = useContext(AuthContext);

  const [show, setshow] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlesignup = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${serverurl}/api/auth/register`,
        { name, email, password },
        { withCredentials: true }
      );

      // ✅ Token save karo
      localStorage.setItem("token", result.data.token);
      setToken(result.data.token);
      setUserdata(result.data.user);

      Navigate("/");
    } catch (err) {
      console.log(err.response?.data || err.message)
    }
  };

  const googlesignup = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;

      const result = await axios.post(
        `${serverurl}/api/auth/googlelogin`,
        { name: user.displayName, email: user.email },
        { withCredentials: true }
      );

      // ✅ Token save karo
      localStorage.setItem("token", result.data.token);
      setToken(result.data.token);
      setUserdata(result.data.user);

      Navigate("/");
    } catch (err) {
      console.log("Google signup failed:", err);
    }
  };

  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141141] to-[#0c2025] text-white flex flex-col items-center justify-start'>
      <div className='w-[100%] h-[80px] flex items-center justify-start gap-[10px] px-[30px] cursor-pointer' onClick={() => Navigate("/")}>
        <img className='w-[40px]' src="./src/vcart logo.png" alt="Logo" />
        <h1 className='text-[22px] font-sans'>Zoom mart</h1>
      </div>

      <div className='w-[100%] h-[100px] flex flex-col items-center justify-center gap-[10px]'>
        <span className='text-[25px] font-bold'>Registration</span>
        <span className='text-[16px]'>Welcome to Zoom Mart, place your order</span>
      </div>

      <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] rounded-[10px] border-[1px] border-[#96969635] flex items-center justify-center'>
        <form onSubmit={handlesignup} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>

          <div onClick={googlesignup} className='w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer'>
            <img className='w-[20px]' src={google} alt="" /> Register with Google
          </div>

          <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
            <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
            OR
            <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
          </div>

          <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative'>
            <input type="text" required placeholder='UserName'
              className='w-[100%] h-[50px] border-[2px] border-[#96969635] rounded-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold'
              value={name} onChange={e => setname(e.target.value)} />

            <input type="email" required placeholder='Email'
              className='w-[100%] h-[50px] border-[2px] border-[#96969635] rounded-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold'
              value={email} onChange={e => setemail(e.target.value)} />

            <input type={show ? "text" : "password"} required placeholder='Password'
              className='w-[100%] h-[50px] border-[2px] border-[#96969635] rounded-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold'
              value={password} onChange={e => setpassword(e.target.value)} />

            {!show && <IoEyeOffSharp className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] top-[50%]' onClick={() => setshow(p => !p)} />}
            {show && <IoEyeOutline className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] top-[50%]' onClick={() => setshow(p => !p)} />}

            <button className='w-[100%] h-[50px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-bold cursor-pointer'>
              Create Account
            </button>

            <p className='flex gap-[10px]'>
              Already have an account?
              <span className='text-blue-400 cursor-pointer text-[17px]' onClick={() => Navigate("/login")}>
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registertion;
