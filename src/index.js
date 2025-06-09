import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import userRoutes from './routes/user.routes.js'; // ✅ add this line

dotenv.config({
    path:'./.env'
})

const app = express();

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Register routes
app.use("/api/v1/users", userRoutes); // Now /register will work

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at the port ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log("MongoDB connection failed !!", err);
});
