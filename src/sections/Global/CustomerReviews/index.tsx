'use client';

import React from 'react'
import dynamic from 'next/dynamic'
import { Reviews } from '@/payload-types'

const Slider = dynamic(() => import('./Slider'), {
  ssr: false,
})

const CustomerReviews = ({ reviews }: { reviews: Reviews }) => {
  return <Slider reviews={reviews} />
}

export default CustomerReviews
