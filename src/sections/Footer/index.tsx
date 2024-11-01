import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import * as PayloadTypes from '@/payload-types'
import classes from "./styles.module.scss";
import CustomImage from '@/components/CustomImage'
import Link from 'next/link'
import Typography from '@/components/Typography'
import CTALink from '@/components/CTA/CTALink'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import Socials from '@/components/Socials'

const Footer = async () => {
  const payload = await getPayloadHMR({ config })

  const footer: PayloadTypes.Footer = await payload.findGlobal({
    slug: 'footer' as 'footer',
  });

  const contacts: PayloadTypes.Contact = await payload.findGlobal({
    slug: 'contacts' as 'contacts',
  });

  const settings: PayloadTypes.Settings = await payload.findGlobal({
    slug: 'settings' as 'settings',
  });

  return (
    <footer className="grid-container grid-content-full">
      <div className="grid-content">
        <div className={classes.footer}>
          <div className={classes.nav}>
            <ScrollToTopButton />
            <div className={classes.logo}>
              {settings.logo && (
                <Link href="/" prefetch={true}>
                  <CustomImage image={settings.logo} width={64} height={64} />
                </Link>
              )}
              <Typography size={3}>{footer.title}</Typography>
              <Socials contacts={contacts} />
            </div>
            <nav className={classes.menus}>
              {footer.sections.map(({ links, label }) => {
                return (
                  <div key={label} className={classes.menu}>
                    <h5>{label}</h5>
                    {links?.map(({ link }, i) => (
                      <Typography size={4} key={i}>
                        <CTALink link={link} />
                      </Typography>
                    ))}
                  </div>
                );
              })}
              <div className={classes.menu}>
                <h5>{contacts?.general?.title}</h5>
                {contacts.addressGroup.addresses.map(({ links }) => {
                  return links.map(({ link }) => (
                    <Typography size={4} key={link?.label}>
                      <CTALink link={link} />
                    </Typography>
                  ));
                })}
                <Typography size={4}>
                  <a href={contacts.phoneNumber.url}>
                    {contacts.phoneNumber.label}
                  </a>
                </Typography>
              </div>
            </nav>
          </div>
          <div className={classes.bottom}>
            <Typography size={4}>© 2024 {contacts?.copyright}</Typography>
            <Socials contacts={contacts} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
