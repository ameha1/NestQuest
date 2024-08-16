import express from "express";
import postRouter from './routes/post.route.js';
import auth from './routes/auth.route.js';

const app = express();

app.use(express.json());

app.use("/api/post", postRouter);
app.use("/api/auth",auth);

app.listen(8080,()=>{
    console.log('server is running ...');
})
