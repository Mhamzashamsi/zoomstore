


// import { createContext, useState } from "react";

// export const AuthContext = createContext();

// const Authcontext = ({ children }) => {
//   const serverurl = "http://localhost:8000";
  
//   // ✅ Token aur userdata state add karo
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const [userdata, setUserdata] = useState(null);

//   const value = { 
//     serverurl,
//     token,
//     setToken,
//     userdata,
//     setUserdata
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default Authcontext;
import { createContext, useState } from "react";

export const AuthContext = createContext();

const Authcontext = ({ children }) => {
  // const serverurl = "http://localhost:8000";
const serverurl = "https://zoomstore-backend-jade.vercel.app";

  const [token, setToken] = useState(localStorage.getItem("token") || "");

  // ✅ userdata HATA diya — sirf Usercontext mein rahega
  const value = {
    serverurl,
    token,
    setToken,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authcontext;