import React from 'react'
export default function Header() {
  return (
    <>
    <div className='max-w-full border-b border-gray-500 flex justify-between p-3 z-[100] bg-white items-center'>
        <div className='text-center text-gray-500 opacity-[0.6] font-bold text-3xl bg-'>
            Dashboard
        </div>
        <div className='basis-[4%] cursor-pointer'>
            <img src='/2.jpg' alt='profile' className='w-[100%] rounded-full mx-auto'></img>
        </div>

        
    </div>
    </>
  )
}
