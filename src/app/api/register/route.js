import { connectMongodb } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { isStrongPassword } from "../../../../lib/passwordvalidator";




export  async function POST(req){
    try {
         const body = await req.json();
const name = body.name;
const email = body.email.trim().toLowerCase();
const password = body.password;
    



         if (!isStrongPassword(password)) {
  return NextResponse.json(
    {
      message:
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
    },
    {
      status:400,
    }
  );
}
         const hashpassword=await bcrypt.hash(password,10);
         await connectMongodb();
         await User.create({name,email,password:hashpassword});

         return NextResponse.json({message:"user registered"},{status:201})
    } catch (error) {
         console.log("REGISTER ERROR:", error);
        return NextResponse.json({message:"an eror occur while registering a user"},{status:500})
    }

}
