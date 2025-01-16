'use client'

import AddStory from '@/app/Components/Add_Story'
import ManageStories from '@/app/Components/Manage_Stories'

import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
  const params = useParams()
  // console.log(params.slug)
  const innerPage = params.slug


  const Mount = {
    'add-story': <AddStory />,
    'manage-stories': <ManageStories />
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
