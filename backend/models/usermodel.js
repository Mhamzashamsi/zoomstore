// // const mongoose = require("mongoose");

// // const userSchema = new mongoose.Schema(
// //   {
// //     name: {
// //       type: String,
// //       required: true,
// //     },
// //     email: {
// //       type: String,
// //       required: true,
// //       unique: true,
// //     },
// //     password: {
// //       type: String,
// //       required: true,
// //     },
// //     cart: {
// //       type: Object,   // Cart ka structure ek object hai
// //       default: {},    // Agar nahi diya to empty object set hoga
// //     },
// //   },
// //   {
// //     timestamps: true,  // createdAt aur updatedAt automatically add ho jayenge
// //     minimize: false,   // Empty objects bhi database me save honge
// //   }
// // );

// // const User = mongoose.model("User", userSchema);

// // module.exports = User;




// // // createdAt → Ye field record kab create hua, uska date & time store karta hai.

// // // updatedAt → Ye field record kab last update hua, uska date & time store karta hai.
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     cart: {
//       type: Object,
//       default: {},
//     },
//   },
//   {
//     timestamps: true,
//     minimize: false,
//   }
// );

// const User = mongoose.model("User", userSchema);

// export default User;   // ✅ IMPORTANT










// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
// provider:{type:String,default:"local"},
//   cart: { type: Object, default: {} },
// }, {
//   timestamps: true,
//   minimize: false
// });

// const User = mongoose.model("User", userSchema);
// export default User;






import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // important for local auth
  provider: { type: String, default: "local" },
  cartdata: { type: Object, default: {} },
}, {
  timestamps: true,
  minimize: false
});

const User = mongoose.model("User", userSchema);
export default User;