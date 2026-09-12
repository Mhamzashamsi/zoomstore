// // import express from 'express';
// // import dotenv from 'dotenv';
// // dotenv.config();
// // import cors from 'cors';
// // import connectDB from './config/db.js';
// // import authroutes from './routes/authroutes.js';
// // import cookieParser from 'cookie-parser';
// // import userroutes from './routes/userroutes.js';
// // import productrouter from './routes/productRoutes.js';
// // import cartroutes from './routes/cartroutes.js';
// // import orderroutes from './routes/orderroutes.js';
// // const app = express();

// // // ✅ CORS pehle aana chahiye
// // app.use(cors({
// //   origin: ["http://localhost:5173", "http://localhost:5174"],
// //   credentials: true
// // }));

// // app.use(express.json());
// // app.use(cookieParser()); // ✅ CORS ke baad

// // // Routes
// // app.use("/api/auth", authroutes);
// // app.use("/api/user", userroutes);
// // app.use("/api/product", productrouter);
// // app.use("/api/cart",cartroutes);
// // app.use("/api/order",orderroutes);


// // app.get("/test", (req, res) => res.json({ message: "Backend working" }));

// // const port = process.env.PORT || 8000;
// // app.listen(port, () => {
// //   console.log(`Server running on port ${port}`);
// //   connectDB();
// // });
// import express from 'express';
// import dotenv from 'dotenv';
// dotenv.config();
// import cors from 'cors';
// import connectDB from './config/db.js';
// import authroutes from './routes/authroutes.js';
// import cookieParser from 'cookie-parser';
// import userroutes from './routes/userroutes.js';
// import productrouter from './routes/productRoutes.js';
// import cartroutes from './routes/cartroutes.js';
// import orderroutes from './routes/orderroutes.js';

// const app = express();

// // ✅ Database connect (serverless mein listen() ke bharose nahi reh sakte)
// connectDB();

// // ✅ CORS pehle aana chahiye
// app.use(cors({
//   origin: [
//     "http://localhost:5173",
//     "http://localhost:5174",
//     "https://zoomstore.vercel.app",   // ✅ live frontend domain add kiya
//         "https://zoomstore-admin.vercel.app"
  

//   ],
//   credentials: true
// }));

// app.use(express.json());
// app.use(cookieParser()); // ✅ CORS ke baad

// // Routes
// app.use("/api/auth", authroutes);
// app.use("/api/user", userroutes);
// app.use("/api/product", productrouter);
// app.use("/api/cart", cartroutes);
// app.use("/api/order", orderroutes);

// app.get("/test", (req, res) => res.json({ message: "Backend working" }));
// app.get("/", (req, res) => res.json({ message: "API is live" })); // ✅ root route add kiya (404 fix)

// // ✅ Local dev ke liye (Vercel pe ye block ignore hota hai)
// if (process.env.NODE_ENV !== "production") {
//   const port = process.env.PORT || 8000;
//   app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
//   });
// }

// // ✅ Vercel ko app export karna zaroori hai (serverless function ke liye)
// export default app;
// import express from 'express';
// import dotenv from 'dotenv';
// dotenv.config();
// import cors from 'cors';
// import connectDB from './config/db.js';
// import authroutes from './routes/authroutes.js';
// import cookieParser from 'cookie-parser';
// import userroutes from './routes/userroutes.js';
// import productrouter from './routes/productRoutes.js';
// import cartroutes from './routes/cartroutes.js';
// import orderroutes from './routes/orderroutes.js';
// const app = express();

// // ✅ CORS pehle aana chahiye
// app.use(cors({
//   origin: ["http://localhost:5173", "http://localhost:5174"],
//   credentials: true
// }));

// app.use(express.json());
// app.use(cookieParser()); // ✅ CORS ke baad

// // Routes
// app.use("/api/auth", authroutes);
// app.use("/api/user", userroutes);
// app.use("/api/product", productrouter);
// app.use("/api/cart",cartroutes);
// app.use("/api/order",orderroutes);


// app.get("/test", (req, res) => res.json({ message: "Backend working" }));

// const port = process.env.PORT || 8000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
//   connectDB();
// });
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import connectDB from './config/db.js';
import authroutes from './routes/authroutes.js';
import cookieParser from 'cookie-parser';
import userroutes from './routes/userroutes.js';
import productrouter from './routes/productRoutes.js';
import cartroutes from './routes/cartroutes.js';
import orderroutes from './routes/orderroutes.js';

const app = express();

// ✅ Database connect (serverless mein listen() ke bharose nahi reh sakte)
connectDB();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://zoomstore.vercel.app",   // ✅ live frontend domain add kiya
  "https://zoomstore-admin.vercel.app"
];

// ✅ CORS pehle aana chahiye
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// ✅ Explicit preflight handling — Vercel serverless functions kabhi kabhi
// cors package ka automatic OPTIONS response reliably pass nahi karte,
// isliye manually bhi confirm kar rahe hain taake preflight kabhi 404 na ho
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, token, Authorization");
  }
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());
app.use(cookieParser()); // ✅ CORS ke baad

// Routes
app.use("/api/auth", authroutes);
app.use("/api/user", userroutes);
app.use("/api/product", productrouter);
app.use("/api/cart", cartroutes);
app.use("/api/order", orderroutes);

app.get("/test", (req, res) => res.json({ message: "Backend working" }));
app.get("/", (req, res) => res.json({ message: "API is live" })); // ✅ root route add kiya (404 fix)

// ✅ Local dev ke liye (Vercel pe ye block ignore hota hai)
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// ✅ Vercel ko app export karna zaroori hai (serverless function ke liye)
export default app;