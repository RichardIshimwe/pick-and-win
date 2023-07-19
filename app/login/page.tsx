'use client';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import loginComponent from "@/components/loginComponent";
import Link from "next/link";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import { FirebaseError } from 'firebase/app';

const Login: React.FC = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isLoading, setIsLoading] = useState(false);

const router = useRouter()

const handleClick = async (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();
setIsLoading(true);
const {result, error} = await loginComponent({email, password});
setIsLoading(false);
if(error) {
  // router.push("/signup")
  if(error instanceof FirebaseError){
    if (error.code === "auth/wrong-password") {
     toast.error("Invalid Credentials..");
    } 
    else if(error.code === "auth/user-not-found") {
      toast.error("Please Signup");
        router.push("/signup")
    }
    else {
      return console.log("Firebase error:", error);
    }
  }else {
    return console.log("Other error:", error);
  }
  // return console.log("error:", error)
};
console.log("email:", email, "password:", password);
console.log("result:", result);
toast.success(".......");
localStorage.setItem("userIn", email);
router.push("/");
}

  return (
    <div className="h-screen flex">
    {/* <div className="h-screen bg-primary flex"> */}
      <div className="w-1/2 flex justify-center items-center bg-primary">
        <form onSubmit={handleClick}>
         <h1 className="text-3xl font-bold">HI, Welcome back!</h1>
         <p className="mb-4">Welcome back! Please enter your Details.</p>
         <p>Email</p>
         <input 
         type="email" 
         placeholder="enter Your email" 
         className="w-80 p-2 rounded-sm border border-black bg-primary mb-3 text-white" 
         onChange={(e) => setEmail(e.target.value)}
         />
         <p>Password</p>
         <input 
         type="password" 
         placeholder="enter your password" 
         className="w-80 p-2 border border-black rounded-sm bg-primary mb-3 text-white" 
         onChange={(e) => setPassword(e.target.value)}
         /><br />
         <button type="submit" className="bg-black text-white w-80 h-10 rounded-sm font-bold mb-3">{isLoading ? "Loading....." : "Sign in"}</button>
         {/* <Link href="/signup"><button type="submit" className="bg-black text-white w-80 h-10 rounded-sm font-bold mb-3">Sign In</button></Link> */}
         <p>Dont Have an account? <span className="text-white font-semibold"><Link href="/signup">Sign up</Link></span></p>
         </form>
      </div>
      <div className="w-1/2">
        <div className="relative w-full h-full">
        <Image
         src="/images/pexels-ekaterina-bolovtsova-6192326 1.png"
         alt="no image provided" 
         layout="fill" 
         objectFit="cover"
         objectPosition="center"
         />
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login
