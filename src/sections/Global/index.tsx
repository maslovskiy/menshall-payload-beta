import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { AcademyProgram, AcademyTeachers, Contact, Reviews, Service } from '@/payload-types'
import ServicesSection from '@/sections/Global/Services/ServicesSection'
import CustomerReviews from '@/sections/Global/CustomerReviews'
import Contacts from '@/sections/Global/Contacts'
import Program from '@/sections/Global/Program'
import Teachers from '@/sections/Global/Teachers'
import { Barber } from '@/app-types'
import Barbers from '@/sections/Global/Barbers'

const Global = async ({ global, slug }: { global: string, slug: string }) => {
  const payload = await getPayloadHMR({ config })

  if (global === 'reviews') {
    const reviews: Reviews = await payload.findGlobal({
      slug: 'reviews' as 'reviews',
    })

    return <CustomerReviews reviews={reviews} />
  }

  if (global === 'services') {
    const services: Service = await payload.findGlobal({
      slug: 'services' as 'services',
    })

    return (
      <ServicesSection
        services={services} title={slug === 'index' ? 'secondaryTitle' : 'thirdTitle'}
        activeSlug={slug}
      />
    )
  }

  if (global === 'contacts') {
    const contacts: Contact = await payload.findGlobal({
      slug: 'contacts' as 'contacts',
    })

    return (
      <Contacts contacts={contacts} />
    )
  }
  if (global === 'barbers') {
    //@ts-ignore
    const barbers: Barber = await payload.findGlobal({
      slug: 'barbers' as 'barbers',
    })

    return (
      <Barbers barbers={barbers} />
    )
  }

  if (global === 'program') {
    return (
      <Program />
    )
  }

  if (global === 'teachers') {
    return (
      <Teachers />
    )
  }

  return (
    <div>
      <h1>{global}</h1>
    </div>
  )
}

export default Global
