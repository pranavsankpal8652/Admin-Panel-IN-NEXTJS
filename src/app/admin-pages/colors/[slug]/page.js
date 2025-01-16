'use client'
import AddColor from '@/app/Components/AddColor'
import ManageColour from '@/app/Components/ManageColour'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const params=useParams()
    console.log(params.slug)
    const innerPage=params.slug
    
    const Mount={
        'add-color':<AddColor/>,
         'manage-colors':<ManageColour/>
    }
  return (
  <>
        {
            Mount[innerPage] || (
                
                    <div className='text-[30px] text-black flex h-screen items-center justify-center'>No Page found!</div>
                
            )
               
        
        }
  </>
  )
}
