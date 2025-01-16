'use client'

import AddCategory from '@/app/Components/AddCategory'
import ManageCategory from '@/app/Components/ManageCategory'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
  const params = useParams()
  // console.log(params.slug)
  const innerPage = params.slug


  const Mount = {
    'add-subcategory': <AddCategory pageFor="SubCategory" />,
    'manage-subcategory': <ManageCategory pageFor="SubCategory" />
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
