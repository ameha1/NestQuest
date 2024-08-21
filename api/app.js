import express from "express";
import postRouter from './routes/post.route.js';
import auth from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cors({
    origin : "*",
  }));

app.use(express.json());
app.use(cookieParser());

app.use("/api/post", postRouter);
app.use("/api/auth",auth);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

