"use client";
// import { POST } from "@/app/api/register/route";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";

export default function Registerform(){
  const [showPassword, setShowPassword] = useState(false);
    const[name,Setname]=useState("");
    const[email,Setemail]=useState("");
    const[password,Setpassword]=useState("");
    const[error,Seterror]=useState("");
    const router=useRouter();

    // console.log(name);
    const handle= async(e)=>{
      e.preventDefault();

      if(!name||!email||!password){
        Seterror("All fields are neccessary!");
        return 
      }
     
     try {

     const resuser= await fetch("api/userExist",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({email})
        });

         const {gmail} =  await resuser.json();
         console.log(gmail);

         if(gmail){
        Seterror("user already exist");
        return;
      }

        const res= await fetch("/api/register",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                name,email,password
            })
        });
          const data = await res.json();
        if(res.ok){
           const form= e.target;
            form.reset();
    router.push("/login");
        }
        else{
            console.log("user registrartion failed")
        }
        if(data.message){
             Seterror(data.message);
             return
        }
     } catch (error) {
        console.log("user registration failed",error);
     }
    }
    return(
     <div className="min-h-screen grid place-items-center px-4 py-8">
 <div className="w-full max-w-md rounded-2xl border-t-4 border-green-400 shadow-lg p-5 sm:p-8">
  
      
     <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Register</h1>

       <form onSubmit={handle}  className="flex flex-col gap-4 w-full">
         <input onChange={(e)=> Setname(e.target.value)} type="text" placeholder="Full name" className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none focus:border-purple-500 transition"/>
        <input  onChange={(e) => Setemail(e.target.value)}type="email" placeholder="email"  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none focus:border-purple-500 transition"/>
        <div className="relative">

        
        <input   onChange={(e) => Setpassword(e.target.value)}  type={showPassword ? "text" : "password"} placeholder="password" className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none focus:border-purple-500 transition"/>
          <button
    type="button"
    onClick={() =>
      setShowPassword(!showPassword)
    }
    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition"
  >
    {showPassword ? (
      <EyeOff size={20} />
    ) : (
      <Eye size={20} />
    )}
  </button>


        </div>
        <div className="border border-indigo-500 rounded-lg p-3">
        <p className="text-sm text-zinc-400 ">
Password must contain:
</p>

<ul className="text-sm text-zinc-500 list-disc ml-5 space-y-1">
  <li>Minimum 8 characters</li>
  <li>One uppercase letter</li>
  <li>One lowercase letter</li>
  <li>One number</li>
  <li>One special character</li>
</ul>
</div>
        <button className="w-full rounded-xl bg-green-600 py-3 font-semibold hover:bg-green-700 transition">Register</button>
{error&&(
       <div className="w-full bg-red-600 text-white text-sm py-2 px-3 rounded-md mt-2 break-words">{error}</div>
)}
        
       </form>
   <button
     onClick={() =>
       signIn("google", {
         callbackUrl: "/",
       })
     }
     className="w-full flex items-center justify-center gap-3 bg-zinc-900 border border-white/10 hover:border-purple-500 hover:bg-zinc-800 transition-all duration-300 rounded-2xl py-3.5 font-medium text-white hover:shadow-lg hover:shadow-purple-500/20 active:scale-[0.98] mt-5 px-4 py-3 mb-2 "
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
   <Link href={'/login'} className="text-sm mt-3 text-center mt-4"> Already have a account? <span className="underline">Login</span> </Link>
    </div>
    </div>
    )
}