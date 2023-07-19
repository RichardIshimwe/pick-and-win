'use client';
import React from 'react';
import Header from '@/components/header';
import { ToastContainer } from 'react-toastify';
import Image from "next/image"

const Page = () => {
  const array = ["1","2","3","4"];
  return (
    <div>
      <div className="h-screen grid grid-rows-6 gap-2">
      <Header />
      <div className='bg-white grid grid-rows-5 h-screen'>
      <div className='bg-green-400 row-span-2 flex items-center justify-center'>
        <div className='bg-white grid' style={{ width: "90%", height: "100%", borderRadius : "10px"}}>
          <div className='bg-blue-300'> 
          </div>
          <div className='bg-blue-800 flex justify-around items-center'>
            {array ? array.map((item) =>
             <div key={item} className='bg-white flex' style={{ width: "280px", height: "100px", borderRadius : "10px" }}>
              <div className='bg-yellow-300 relative flex items-center justify-center' style={{ flexBasis: '30%' }}>
             <div className="row-span-6 relative" style={{ width: '45px', height: '45px' }}>
                <Image
               src="/images/Group 2.png"
               alt="no image provided"
               layout="fill"
               objectFit="cover"
               objectPosition="center"
              />
                </div>
                </div>
              <div className='bg-yellow-800' style={{ flexBasis: '70%' }}>
              {item}
              </div>
              </div>): <p>loading......</p>}
          </div>
        </div>
      </div>
      <div className='bg-yellow-600 row-span-3'></div>
    </div>
      <ToastContainer />
    </div>
    </div>
  )
}

export default Page
