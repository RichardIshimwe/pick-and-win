import Link from "next/link"
import { useEffect, useState } from "react";

const Header = () => {

  const [user, setUser] = useState<string>("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pointLocal = localStorage.getItem('userIn'); 
      setUser(pointLocal ?? "");
      console.log("user loged in:", pointLocal);
    }
  }, []);

  const handleLogout = () =>{
    localStorage.removeItem("userIn");
  }

  return (
    <div className="row-span-1 flex justify-between items-center">
    <div className="text-white jolly-logder text-4xl ml-4">Pick and Win</div>
    <div>
      { user ?
      <p className='text-white text-2xl px-12 py-2 mr-4' onClick={handleLogout}><Link href="/">Logout</Link></p> 
      :<button className='text-white border border-white px-12 py-2 rounded-sm mr-4'><Link href="/login">Login</Link></button>
    } 
    </div>
  </div>
  )
}

export default Header
