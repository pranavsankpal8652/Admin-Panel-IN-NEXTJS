'use client'

import AddSlider from '@/app/Components/Add_Slider'
import ManageSlider from '@/app/Components/Manage_Slider'


import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
  const params = useParams()
  // console.log(params.slug)
  const innerPage = params.slug


  const Mount = {
    'add-slider': <AddSlider />,
    'manage-sliders': <ManageSlider />
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
