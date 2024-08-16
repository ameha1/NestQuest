import express from "express";

const router = express.Router();

router.get('/test',(req,res)=>{

    console.log('post route works !');
    
})

export default router;