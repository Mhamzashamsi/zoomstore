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

// ✅ CORS pehle aana chahiye
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser()); // ✅ CORS ke baad

// Routes
app.use("/api/auth", authroutes);
app.use("/api/user", userroutes);
app.use("/api/product", productrouter);
app.use("/api/cart",cartroutes);
app.use("/api/order",orderroutes);


app.get("/test", (req, res) => res.json({ message: "Backend working" }));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectDB();
});