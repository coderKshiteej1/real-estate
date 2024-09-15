import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from  './routes/user.routee.js'
import authRouter from './routes/authentica.route.js'
dotenv.config();
mongoose.connect(process.env.MONGO)
.then(()=> {
    console.log("connected");
    
})
.catch((err) => {
    console.log(err);
    
})
const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log("server running");
    
});

app.get('/test', (req, res)=> {
    res.json({
        message:'hi',
    });
});
app.use("/api/user", userRouter);
app.use("/api/authentica", authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal error';
    return res.status(statusCode).json({
 success: false,
 statusCode,
 message,
    })
})