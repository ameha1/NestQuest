import bcrypt from "bcrypt";

export const register = async (req,res)=>{
    console.log('user has been registered !');
    
    const {name,email,password} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10)

    console.log(hashedPassword);
    
}

export const login = (req,res) => {}

export const logout = (req,res) => {}
