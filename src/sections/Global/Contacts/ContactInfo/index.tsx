import React from "react";


import styles from "./styles.module.scss";
import { Contact } from "@/payload-types";
import CTALink from '@/components/CTA/CTALink'
import Typography from '@/components/Typography'
import Socials from '@/components/Socials'

const ContactsInfo = ({ contacts }: { contacts: Contact }) => {
  const { general, emailGroup, workingHours, phoneNumber } = contacts;

  return (
    <div className={styles.details}>
      <h2>{general?.secondaryTitle}</h2>
      <CTALink link={general.link} />

      <div className={styles.list}>
        {contacts.addressGroup.addresses.map(({ label, links }) => {
          return (
            <div key={label} className={styles.item}>
              <span>{label}</span>
              {links.map(({ link }) => (
                <Typography size={2} key={link.url}>
                  <CTALink link={link} />
                </Typography>
              ))}
            </div>
          );
        })}
        {emailGroup?.emails?.map(({ link }) => {
          return (
            <div key={link.label} className={styles.item}>
              {emailGroup?.emailTitle && <span>{emailGroup?.emailTitle}</span>}
              <Typography size={2}>
                <CTALink link={link} />
              </Typography>
            </div>
          );
        })}
        <div className={styles.item}>
          <span>{phoneNumber.title}</span>
          <Typography size={2}>
            <a href={phoneNumber.url}>{phoneNumber.label}</a>
          </Typography>
        </div>
        {workingHours?.title && workingHours?.text && (
          <div className={styles.item}>
            {workingHours?.title && <span>{workingHours?.title}</span>}
            {workingHours?.text && (
              <Typography size={2}>{workingHours?.text}</Typography>
            )}
          </div>
        )}
        <Socials contacts={contacts} />
      </div>
    </div>
  );
};

export default ContactsInfo;
