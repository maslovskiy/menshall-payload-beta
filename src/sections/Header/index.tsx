//@ts-nocheck

import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { Contact, Header, Settings } from '@/payload-types'
import Link from 'next/link'
import styles from './styles.module.scss'
import classNames from 'classnames'
import GradientBg from '@/components/GradientBg'
import CustomImage from '@/components/CustomImage'
import RoundButton from '@/components/RoundButton'
import { Icon } from '@/components/Icon'
import { getUser } from '@/lib/cookies'
import { Services } from '@/app-types'
import DesktopNav from '@/sections/Header/DesktopNav'

const HeaderServer = async () => {
  const payload = await getPayloadHMR({ config })

  const header: Header = await payload.findGlobal({
    slug: 'header' as 'header',
  })

  const settings: Settings = await payload.findGlobal({
    slug: 'settings' as 'settings',
  })

  const contacts: Contact = await payload.findGlobal({
    slug: 'contacts' as 'contacts',
  })

  //@ts-ignore
  const services: Services = await payload.findGlobal({
    slug: 'services' as 'services',
  })

  const user = await getUser()

  return (
    <header className={classNames(styles.header, 'grid-container grid-content-full')}>
      <GradientBg />
      <div className={classNames(styles.inner, 'grid-content')}>
        <div className={styles.logo}>
          <Link href="/" aria-label="Home Link">
            <CustomImage image={settings.logo} />
          </Link>
        </div>
        <DesktopNav header={header} services={services} />
        {/*{windowWidth > 767 ? (*/}
        {/*  <DesktopNav header={header} services={services} />*/}
        {/*) : (*/}
        {/*  <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer}>*/}
        {/*    <MobileNav*/}
        {/*      header={header}*/}
        {/*      settings={settings}*/}
        {/*      contacts={contacts}*/}
        {/*    />*/}
        {/*  </Drawer>*/}
        {/*)}*/}
        <div className={styles.right}>
          <RoundButton>
            <a href={contacts.phoneNumber.url}>
              <Icon
                name="phone"
                width={18}
                height={18}
                color="var(--primary-dark)"
              />
            </a>
          </RoundButton>
          <RoundButton>
            <Link
              prefetch={true}
              href={user?.token ? '/user-account' : '/sign-in'}
            >
              {user?.name ? (
                user.name[0]
              ) : (
                <Icon
                  name="account"
                  width={18}
                  height={18}
                  color="var(--primary-dark)"
                />
              )}
            </Link>
          </RoundButton>
          {/*{windowWidth < 767 && (*/}
          {/*  <button*/}
          {/*    className={styles.hamburger}*/}
          {/*    onClick={toggleDrawer}*/}
          {/*    aria-label="Menu button"*/}
          {/*  >*/}
          {/*    {isDrawerOpen ? (*/}
          {/*      <Icon name="close" width={24} height={24} />*/}
          {/*    ) : (*/}
          {/*      <Icon name="menu" width={24} height={24} />*/}
          {/*    )}*/}
          {/*  </button>*/}
          {/*)}*/}
        </div>
      </div>
    </header>
  )
}

export default HeaderServer
