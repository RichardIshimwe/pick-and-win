'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page: React.FC = () => {
    const [points, setPoints] = useState<number | null>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const pointLocal = localStorage.getItem('points');
          setPoints(parseInt(pointLocal ?? '0'));
        }
      }, []);

  return (
    <div className='bg-black flex justify-center items-center' style={{height : "100vh"}}>
      <div className='bg-gray-800 text-white flex items-center justify-center' style={{width : "40%", height : "60%", borderRadius : "20px"}}>
        <div>
      <h1 className='font-bold text-center text-3xl '>welcome to the result page</h1>
      <h2 className='font-bold text-center text-xl mt-4'>SCORE</h2>
      <div className='flex justify-center'>
        <div className='flex'>
      <div className="row-span-6 relative" style={{ width: '75px', height: '45px' }}>
                <Image
               src="/images/coins12-removebg-preview (3) 1.png"
               alt="no image provided"
               layout="fill"
               objectFit="cover"
               objectPosition="center"
              />
      </div>
      <h2 className='font-bold text-center mt-4'>{points}</h2>
      </div>
      </div>
      <div className="flex justify-center items-center mt-11">
    <Link href="/countries"><button className="bg-green-600 text-white w-80 h-10 rounded-sm font-bold mb-3">Play</button></Link>
    </div>
    <div className="flex justify-center items-center">
    <Link href="/"><button className="bg-green-900 text-white w-80 h-10 rounded-sm font-bold mb-3">Home</button></Link>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Page;
