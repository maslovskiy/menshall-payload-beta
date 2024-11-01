'use client'

import React from 'react'

import ContactInfo from './ContactInfo'

import styles from './styles.module.scss'
import dynamic from 'next/dynamic'
import Section from '@/components/Section'
import { Contact } from '@/payload-types'

const Map = dynamic(() => import('./Map'), {
  ssr: false,
})

const Contacts = ({ contacts }: { contacts: Contact }) => {
  return (
    <Section>
      <div className={styles.contacts}>
        <div className={styles.details}>
          <ContactInfo contacts={contacts} />
        </div>
        <div className={styles.mapContainer}>
          <div className={styles.map}>
            <Map marker={contacts.general?.marker} />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contacts
