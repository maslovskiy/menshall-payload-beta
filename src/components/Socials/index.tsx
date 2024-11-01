import * as React from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'
import { Contact } from '@/payload-types'
import Social from './Social'

const Socials = ({ className, contacts }: { className?: string; contacts: Contact }) => {
  return (
    <div className={classNames(styles.secondary, className)}>
      {contacts.socialsGroup?.socials?.map((social) => <Social key={social.id} name={social.name} link={social.link} />,
      )}
    </div>
  )
}

export default Socials
