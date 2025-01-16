'use client'

import AddSize from '@/app/Components/AddSize'
import ManageSizes from '@/app/Components/ManageSize'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
  const params = useParams()
  // console.log(params.slug)
  const innerPage = params.slug


  const Mount = {
    'add-size': <AddSize />,
    'manage-sizes': <ManageSizes />
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
