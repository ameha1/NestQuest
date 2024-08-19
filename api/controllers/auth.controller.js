import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import { json } from "express";

export const register = async (req,res)=>{

    console.log('user has been registered !');
    
    const {username,email,password} = req.body;

    try{

    const hashedPassword = await bcrypt.hash(password, 10)

    // console.log(hashedPassword);

    const newUser = await prisma.user.create({
        data : {
            username,
            email,
            password:hashedPassword,
        },
    });

    console.log(newUser);
    
    res.status(201).json({message:'user registered'});
    }catch(err){

    console.log(err);
    res.status(500).json({message:"Failed to register a user"});

    }

};

export const login = async (req,res) => {

    const {username, password} = req.body;

    try{
    // CHECK WHETHER USER EXISTS

    const user = await prisma.user.findUnique({
        where: { username },
    });

    if (!user) return res.status(401).json({message: "Invalid Credentials!"})

    //CHECK IF PASSWORD IS CORRECT

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) return res.status(401).json({message:'Invalid Credentials!'})

    // res.setHeader("Set-Cookie", "test=" + "myValue").json("success");

    //GENERATE COOKIE TOKEN TO SEND TO USER
    const age = 100 * 60 * 60 *24 * 7;

    const token = jwt.sign({
        id:user.id
    }, process.env.JWT_SECRET_KEY,
       {expiresIn: age} 
    );

    res
    .cookie("token", token, {
        httpOnly: true,
        maxAge: age,
    })
    .status(200)
    .json({message: "Login successful"});

    }catch(err){
    
    console.log(err);
    // res.status(500).json({message:"Failed to login a user"});

    }

}

export const logout = (req,res) => {

    res.clearCookie("token").status(200).json({message:"Logout Successful"})
}
