
// import jwt from "jsonwebtoken";

// export const generatetoken = (userId) => {
//   return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
// };



// // admin panel ka liya token generate karway raha hain

// export const gentoken1 = async(email) => {
// try{
//   let token = await jwt.sign({email}, process.env.JWT_SECRET, { expiresIn: "7d" });
//   return token;
// }
// catch(error){
//   console.log("admin token error ",error);
// }

// };





// // import jwt from "jsonwebtoken";

// // export const generatetoken = (userid) => {
// //   return jwt.sign(
// //     { userid },
// //     process.env.JWT_SECRET,
// //     { expiresIn: "7d" }
// //   );
// // };

import jwt from "jsonwebtoken";

export const generatetoken = (userId) => {
  return jwt.sign(
    { id: userId }, // ✅ 'userId' → 'id'
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

export const gentoken1 = (email) => {
  return jwt.sign(
    { email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};
