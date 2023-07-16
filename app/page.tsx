'use client';
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import Image from "next/image"
import Link from "next/link";

const Index: React.FC = () => {

const router = useRouter();

const handleClick = () => {
router.push("/signup")
}

  return (
    <div className="h-screen grid grid-rows-10 gap-2">
      <Header />
<div className="row-span-6 relative flex justify-center">
<div className="row-span-6 relative" style={{ width: '90%', height: '95%' }}>
  <Image
    src="/images/Rectangle 37.png"
    alt="no image provided"
    layout="fill"
    objectFit="cover"
    objectPosition="center"
  />
</div>
</div>
      <div className="row-span-3 grid grid-cols-3 gap-4">
      <div className="p-4 relative">
        <div className="w-4/5 h-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sd">
        <Image
         src="/images/Rectangle 7.png"
         alt="no image provided" 
         layout="fill" 
         objectFit="cover"
         objectPosition="center"
         className="rounded-sd"
         />
        </div>
      </div>
      <div className="p-4 relative">
        <div className="w-4/5 h-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sd">
        <Image
         src="/images/Rectangle 9.png"
         alt="no image provided" 
         layout="fill" 
         objectFit="cover"
         objectPosition="center"
         />
        </div>
      </div>    
       <div className="p-4 relative">
        <div className="w-4/5 h-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sd">
        <Link href="/countries">
        <Image
         src="/images/Rectangle 8 (1).png"
         alt="no image provided" 
         layout="fill" 
         objectFit="cover"
         objectPosition="center"
         />
         </Link>
        </div>
      </div>
      </div>
         {/* <Link href="/login"><button type="submit" className="bg-black text-white w-80 h-10 rounded-sm font-bold mb-3">Sign In</button></Link> */}
      </div>
  )
}

export default Index
