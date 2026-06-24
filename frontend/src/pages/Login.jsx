
// import { useNavigate } from 'react-router-dom'
// import google from "../assets/google-logo.png"
// import { IoEyeOutline, IoEyeOffSharp } from "react-icons/io5";
// import { AuthContext } from "../Context/Authcontext"
// import { Userdatacontext } from "../Context/usercontext"
// import { useContext, useState, useEffect } from 'react';
// import axios from 'axios'
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '../utiles/firebase';
// import { toast } from 'react-toastify'


// const Login = () => {
//   const navigate = useNavigate();
//   const [show, setshow] = useState(false)
//   const [email, setemail] = useState("")
//   const [password, setpassword] = useState("")

//   const { serverurl, setToken } = useContext(AuthContext) // ✅ sirf setToken
//   const { userdata } = useContext(Userdatacontext)        // ✅ userdata yahan se lo

//   // ✅ userdata aate hi navigate karo
//   useEffect(() => {
//     if (userdata) navigate("/")
//   }, [userdata])

//   const handlelogin = async (e) => {
//     e.preventDefault()
//     try {
//       const result = await axios.post(
//         serverurl + "/api/auth/login",
//         { email, password },
//         { withCredentials: true }
//       );
//       localStorage.setItem("token", result.data.token);
//       setToken(result.data.token); // ✅ Yeh set hote hi usercontext token fetch karega
//             console.log(result.data)
// toast.success(" Login Successfully")      

//     } catch (err) {
//       console.log(err.response?.data || err.message)
//     toast.error("Login failed")
//     }
//   }

//   const googlelogin = async () => {
//     try {
//       const response = await signInWithPopup(auth, provider);
//       if (!response.user) return;

//       const result = await axios.post(
//         serverurl + "/api/auth/googlelogin",
//         { name: response.user.displayName, email: response.user.email },
//         { withCredentials: true }
//       );

//       if (result.data.success) {
//         localStorage.setItem("token", result.data.token);
//         setToken(result.data.token); // ✅ Yeh set hote hi usercontext token fetch karega
//       console.log(result.data)
// toast.success("Google Login Successfully")      
//       }
//     } catch (err) {
//       console.log("Google login failed", err)
//       toast.error("Google login failed")
//     }
//   }

//   return (
//     <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141141] to-[#0c2025] text-white flex flex-col items-center justify-start'>
//       <div className='w-[100%] h-[80px] flex items-center justify-start gap-[10px] px-[30px] cursor-pointer' onClick={() => navigate("/")}>
//         <img className='w-[40px]' src="./src/vcart logo.png" alt="Logo" />
//         <h1 className='text-[22px] font-sans'>Zoom mart</h1>
//       </div>

//       <div className='w-[100%] h-[100px] flex items-center justify-center gap-[10px] flex-col'>
//         <span className='text-[25px] font-bold'>Login</span>
//         <span className='text-[16px]'>Welcome back to zoom mart, Place your order</span>
//       </div>

//       <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] rounded-[10px] border-[1px] border-[#96969635] flex items-center justify-center'>
//         <form onSubmit={handlelogin} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>

//           <div onClick={googlelogin} className='w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer'>
//             <img className='w-[20px]' src={google} alt="" /> Login with Google
//           </div>

//           <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
//             <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
//             OR
//             <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
//           </div>

//           <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative'>
//             <input type="email" required placeholder='Email'
//               className='w-[100%] h-[50px] border-[2px] border-[#96969635] rounded-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold'
//               onChange={(e) => setemail(e.target.value)} value={email} />

//             <input type={show ? "text" : "password"} required placeholder='Password'
//               className='w-[100%] h-[50px] border-[2px] border-[#96969635] rounded-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold'
//               onChange={(e) => setpassword(e.target.value)} value={password} />

//             {!show && <IoEyeOffSharp className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[53%]' onClick={() => setshow(p => !p)} />}
//             {show && <IoEyeOutline className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[53%]' onClick={() => setshow(p => !p)} />}

//             <button className='w-[100%] h-[50px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-bold cursor-pointer'>
//               Login
//             </button>
//             <p className='flex gap-[10px]'>Create an account?
//               <span className='text-blue-400 cursor-pointer text-[17px]' onClick={() => navigate("/signup")}>
//                 Signup
//               </span>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login
import { useNavigate } from 'react-router-dom'
import google from "../assets/google-logo.png"
import { IoEyeOutline, IoEyeOffSharp } from "react-icons/io5"
import { AuthContext } from "../Context/Authcontext"
import { Userdatacontext } from "../Context/usercontext"
import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../utiles/firebase'
import { toast } from 'react-toastify'

const Login = () => {
  const navigate = useNavigate()

  const [show, setShow] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { serverurl, setToken } = useContext(AuthContext)
  const { userdata } = useContext(Userdatacontext)

  // ✅ Redirect only when user exists
  useEffect(() => {
    if (userdata) {
      navigate("/")
    }
  }, [userdata, navigate])

  // ================= LOGIN =================
  const handlelogin = async (e) => {
    e.preventDefault()

    try {
      const result = await axios.post(
        `${serverurl}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      )

      if (result.data?.token) {
        setToken(result.data.token)
        localStorage.setItem("token", result.data.token)

        toast.success("Login Successful")

        setTimeout(() => {
          navigate("/")
        }, 500)
      }

    } catch (err) {
      console.log(err?.response?.data || err.message)
      toast.error("Login failed")
    }
  }

  // ================= GOOGLE LOGIN =================
  const googlelogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider)

      if (!response.user) return

      const result = await axios.post(
        `${serverurl}/api/auth/googlelogin`,
        {
          name: response.user.displayName,
          email: response.user.email
        },
        { withCredentials: true }
      )

      if (result.data?.success) {
        setToken(result.data.token)
        localStorage.setItem("token", result.data.token)

        toast.success("Google Login Successful")

        setTimeout(() => {
          navigate("/")
        }, 500)
      }

    } catch (err) {
      console.log("Google login failed", err)
      toast.error("Google login failed")
    }
  }

  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141141] to-[#0c2025] text-white flex flex-col items-center justify-start'>

      {/* Header */}
      <div
        className='w-full h-[80px] flex items-center gap-[10px] px-[30px] cursor-pointer'
        onClick={() => navigate("/")}
      >
        <img className='w-[40px]' src="./src/vcart logo.png" alt="Logo" />
        <h1 className='text-[22px] font-sans'>Zoom mart</h1>
      </div>

      {/* Title */}
      <div className='w-full h-[100px] flex flex-col items-center justify-center gap-[10px]'>
        <span className='text-[25px] font-bold'>Login</span>
        <span className='text-[16px]'>
          Welcome back to zoom mart, Place your order
        </span>
      </div>

      {/* Form Box */}
      <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] rounded-[10px] border border-[#96969635] flex items-center justify-center'>

        <form
          onSubmit={handlelogin}
          className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'
        >

          {/* Google Login */}
          <button
            type="button"
            onClick={googlelogin}
            className='w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] cursor-pointer'
          >
            <img className='w-[20px]' src={google} alt="" />
            Login with Google
          </button>

          {/* Divider */}
          <div className='w-full flex items-center justify-center gap-[10px]'>
            <div className='w-[40%] h-[1px] bg-[#96969635]' />
            OR
            <div className='w-[40%] h-[1px] bg-[#96969635]' />
          </div>

          {/* Inputs */}
          <div className='w-[90%] flex flex-col gap-[15px] relative'>

            <input
              type="email"
              required
              placeholder='Email'
              className='w-full h-[50px] border border-[#96969635] rounded-lg bg-transparent px-[20px] font-semibold'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className='relative w-full'>
              <input
                type={show ? "text" : "password"}
                required
                placeholder='Password'
                className='w-full h-[50px] border border-[#96969635] rounded-lg bg-transparent px-[20px] font-semibold'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {show ? (
                <IoEyeOutline
                  className='w-[20px] h-[20px] cursor-pointer absolute right-[15px] top-[15px]'
                  onClick={() => setShow(false)}
                />
              ) : (
                <IoEyeOffSharp
                  className='w-[20px] h-[20px] cursor-pointer absolute right-[15px] top-[15px]'
                  onClick={() => setShow(true)}
                />
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className='w-full h-[50px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold'
            >
              Login
            </button>

            {/* Signup */}
            <p className='flex gap-[10px] justify-center'>
              Create an account?
              <span
                className='text-blue-400 cursor-pointer'
                onClick={() => navigate("/signup")}
              >
                Signup
              </span>
            </p>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Login