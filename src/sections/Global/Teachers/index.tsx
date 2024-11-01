//@ts-nocheck

import React from 'react'
import { AcademyTeachers } from '@/payload-types'
import Section from '@/components/Section'
import styles from './styles.module.scss';
import Typography from '@/components/Typography'
import CustomImage from '@/components/CustomImage'
import Social from '@/components/Socials/Social'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

const Teachers = async () => {

  const payload = await getPayloadHMR({ config })

  const academyTeachers: AcademyTeachers = await payload.findGlobal({
    slug: 'academyTeachers' as 'academyTeachers',
  })

  return (
    <Section heading={academyTeachers.title}>
      <div className={styles.masters}>
        {academyTeachers.teachers.map(
          ({ name, description, text, image, socialsGroup }) => {
            return (
              <div className={styles.master} key={name}>
                <Typography size={2}>{text}</Typography>
                <div>
                  <CustomImage image={image as string} />
                  <div className={styles.masterDetails}>
                    <div className={styles.masterHeader}>
                      <h3>{name}</h3>
                      {socialsGroup.socials?.map((s) => (
                        <Social
                          name={s.name}
                          link={s.link}
                          key={s.id}
                        />
                      ))}
                    </div>
                    <Typography size={2}>{description}</Typography>
                  </div>
                </div>
              </div>
            );
          },
        )}
      </div>
    </Section>
  )
}

export default Teachers
