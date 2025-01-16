'use client'

import ProductDetails from '@/app/Components/Product_Add'
import ManageProducts from '@/app/Components/Product_Manage'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
  const params = useParams()
  // console.log(params.slug)
  const innerPage = params.slug


  const Mount = {
    'add-product': <ProductDetails />,
    'manage-products': <ManageProducts />
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
