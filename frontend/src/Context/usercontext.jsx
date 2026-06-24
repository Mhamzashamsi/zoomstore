

// // // import { createContext, useState, useEffect, useContext } from "react";
// // // import axios from "axios";
// // // import { AuthContext } from "./Authcontext.jsx";

// // // export const Userdatacontext = createContext();

// // // const usercontext = ({ children }) => {
// // //   const [userdata, setuserdata] = useState(null);
// // //   const { serverurl, token } = useContext(AuthContext); // ✅ token bhi lo

// // //   const getcurrentuser = async () => {
// // //     try {
// // //       const storedToken = token || localStorage.getItem("token"); // ✅ token lo

// // //       if (!storedToken) {
// // //         setuserdata(null);
// // //         return; // ✅ Token nahi hai toh call mat karo
// // //       }

// // //       const result = await axios.get(
// // //         `${serverurl}/api/user/getcurrentuser`,
// // //         {
// // //           headers: { token: storedToken } // ✅ Header mein bhejo
// // //         }
// // //       );

// // //       setuserdata(result.data);
// // //       console.log("Current User:", result.data);

// // //     } catch (error) {
// // //       setuserdata(null);
// // //       console.error("Error fetching current user:", error.response?.data || error.message);
// // //     }
// // //   };

// // //   // ✅ Token aaye tab user fetch karo
// // //   useEffect(() => {
// // //     if (token) {
// // //       getcurrentuser();
// // //     }
// // //   }, [token]); // ✅ token change ho toh dobara fetch karo

// // //   const value = { userdata, setuserdata, getcurrentuser };

// // //   return (
// // //     <Userdatacontext.Provider value={value}>
// // //       {children}
// // //     </Userdatacontext.Provider>
// // //   );
// // // };

// // // export default usercontext;

// // import { createContext, useState, useEffect, useContext } from "react";
// // import axios from "axios";
// // import { AuthContext } from "./Authcontext";

// // export const Userdatacontext = createContext();

// // const Usercontext = ({ children }) => {
// //   const [userdata, setUserdata] = useState(null);
// //   const { serverurl } = useContext(AuthContext);

// //   const getcurrentuser = async () => {
// //     try {
// //       const res = await axios.get(
// //         `${serverurl}/api/user/getcurrentuser`,
// //         { withCredentials: true }
// //       );

// //       setUserdata(res.data.user);
// //     } catch (err) {
// //       setUserdata(null);
// //     }
// //   };

// //   useEffect(() => {
// //     getcurrentuser();
// //   }, []);

// //   return (
// //     <Userdatacontext.Provider
// //       value={{ userdata, setUserdata, getcurrentuser }}
// //     >
// //       {children}
// //     </Userdatacontext.Provider>
// //   );
// // };

// // export default Usercontext;
// import { createContext, useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "./Authcontext";

// export const Userdatacontext = createContext();

// const Usercontext = ({ children }) => {
//   const [userdata, setUserdata] = useState(null);
//   const [loading, setLoading] = useState(true); // ✅ NEW
//   const { serverurl } = useContext(AuthContext);

//   const getcurrentuser = async () => {
//     try {
//       setLoading(true); // ✅ start loading

//       const res = await axios.get(
//         `${serverurl}/api/user/getcurrentuser`,
//         { withCredentials: true }
//       );

//       setUserdata(res.data.user);

//     } catch (err) {
//       setUserdata(null);
//     } finally {
//       setLoading(false); // ✅ end loading
//     }
//   };

//   useEffect(() => {
//     getcurrentuser();
//   }, []);

//   return (
//     <Userdatacontext.Provider
//       value={{ userdata, setUserdata, getcurrentuser, loading }} // ✅ loading pass karo
//     >
//       {children}
//     </Userdatacontext.Provider>
//   );
// };

// export default Usercontext;
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./Authcontext";


export const Userdatacontext = createContext();

const Usercontext = ({ children }) => {
  const [userdata, setUserdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const { serverurl, token, setToken } = useContext(AuthContext);
  

  const getcurrentuser = async () => {
    try {
      setLoading(true);
      const storedToken = token || localStorage.getItem("token");

      if (!storedToken) {
        setUserdata(null);
        return;
      }

      const res = await axios.get(
        `${serverurl}/api/user/getcurrentuser`,
        { headers: { token: storedToken } }
      );

      setUserdata(res.data); // ✅ res.data — controller sirf user return karta hai

      console.log(res.data)
    } catch (err) {
      setUserdata(null);
    } finally {
      setLoading(false);
    }
  };

  // ✅ logout function bhi yahan
 const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUserdata(null);
};

  useEffect(() => {
    getcurrentuser();
  }, [token]);

  return (
    <Userdatacontext.Provider
      value={{ userdata, setUserdata, getcurrentuser, loading, logout }}
    >
      {children}
    </Userdatacontext.Provider>
  );
};

export default Usercontext;