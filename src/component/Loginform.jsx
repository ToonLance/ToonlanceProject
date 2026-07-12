"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";







export default function Loginform(){

    const[email,Setemail]=useState("");
    const[password,Setpassword]=useState("");
    const[error,Seterror]=useState("");
   const router=useRouter();
   const searchParams = useSearchParams();
    const callbackUrl =
  searchParams.get("callbackUrl") || "/";
    const handelsubmit= async (e)=>{
      e.preventDefault();

    try {
         const res=await signIn("credentials",{
          email,password,redirect:false
        });
        if(res.error){
           Seterror("invalid credentials");
           return
        }
      router.replace(callbackUrl);
    } catch (error) {
        console.log(error);
    }
    }

    return(
<div className="grid place-items-center h-screen">
   <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
      
      <h1 className="text-xl font-bold my-4">Login</h1>

       <form  onSubmit={handelsubmit} className="flex flex-col gap-3">
        <input  onChange={(e)=>Setemail(e.target.value)} type="text" placeholder="email"/>
        <input  onChange={(e)=>Setpassword(e.target.value)} type="text" placeholder="password"/>
        <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">Login</button>

{error&&(
 <div className="bg-red-600 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error } </div>

)}
 </form>
       <button
  onClick={() =>
    signIn("google", {
      callbackUrl: "/",
    })
  }
  className="w-full flex items-center justify-center gap-3 bg-zinc-900 border border-white/10 hover:border-purple-500 hover:bg-zinc-800 transition-all duration-300 rounded-2xl py-3.5 font-medium text-white hover:shadow-lg hover:shadow-purple-500/20 active:scale-[0.98] mt-5 p-5 mb-2 "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="w-6 h-6"
  >
    <path
      fill="#FFC107"
      d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.2 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
    />
    <path
      fill="#FF3D00"
      d="M6.3 14.7l6.6 4.8C14.7 15.3 18.9 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.2 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.2 0 10-2 13.6-5.3l-6.3-5.2C29.3 35.1 26.8 36 24 36c-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.7 39.6 16.3 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.4 5.5-6.3 7.1l6.3 5.2C39.1 36.8 44 31 44 24c0-1.3-.1-2.3-.4-3.5z"
    />
  </svg>

  <span>Continue with Google</span>
</button>

        <Link href={'/register'} className="text-sm mt-2 text-right"> Dont have a account? <span className="underline">Register</span> </Link>
      

    </div>
    </div>
    );
}