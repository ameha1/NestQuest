import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req,res)=>{
    console.log('user has been registered !');
    
    const {username,email,password} = req.body;

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
    

};

export const login = (req,res) => {}

export const logout = (req,res) => {}
