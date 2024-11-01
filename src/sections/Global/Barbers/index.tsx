//@ts-nocheck
'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { Barber } from '@/app-types'

const Slider = dynamic(() => import('./Slider'), {
  ssr: false,
})

const Barbers = ({ barbers }: { barbers: Barber }) => {
  return <Slider barbersData={barbers} />
}

export default Barbers
