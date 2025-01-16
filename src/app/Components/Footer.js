import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
   <>
   <div className='flex justify-between p-2 border-t border-gray-400 opacity-[60%]'>
        <div>© 2024 Frank and Oak™. All Rights Reserved.
        </div>
        <div className='italic'>
            Design By <a href='https://github.com/pranavsankpal8652' target='_blank' className='text-blue-800'>Pranav Sankpal</a>
        </div>
   </div>
   </>
  )
}
