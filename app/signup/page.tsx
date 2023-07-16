'use client';
import React, { FormEvent, useState } from "react";
import { useRouter } from 'next/navigation';
import signupComponent from "../../components/signupComponent";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { FirebaseError } from "firebase/app";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const {result, error} = await signupComponent({email, password});
    setIsLoading(false);
    console.log("email:", email, "password:", password);
    if(error){
      if(error instanceof FirebaseError){
        if (error.code === "auth/weak-password") {
        //  toast.error("week password...");
        } 
        else if(error.code === "auth/email-already-in-use") {
          // toast.error("email already in use");
        }
        else {
          return console.log("Firebase error:", error);
        }
      }else {
        return console.log("Other error:", error);
      }
    }
    console.log("Other error:", error);
    console.log("result:", result);
    // router.push("/login");
    };

  return (
    <div className="h-screen bg-primary flex">
      <div className="w-1/2 flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="mb-4">
            Already a member?{" "}
            <span className="font-bold text-white"><Link href="/login">SIGN IN</Link></span>
          </p>
          <p>Full Names</p>
          <input
            type="text"
            placeholder="enter Your email"
            className="w-80 p-2 rounded-sm border border-black bg-primary mb-3"
          />
          <p>Email</p>
          <input
            type="email"
            placeholder="enter Your email"
            className="w-80 p-2 rounded-sm border border-black bg-primary mb-3"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Password</p>
          <input
            type="password"
            placeholder="enter your password"
            className="w-80 p-2 border border-black rounded-sm bg-primary mb-3"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            type="submit"
            className="bg-black text-white w-80 h-10 rounded-sm font-bold mb-3"
          >
            {isLoading ? "Loading....." : "Create Account"}
          </button>

        </form>
      </div>
      <div className="w-1/2">
        <div className="relative w-full h-full">
          <Image
            src="/images/pexels-mo-eid-8347500 1.png"
            alt="no image provided"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
