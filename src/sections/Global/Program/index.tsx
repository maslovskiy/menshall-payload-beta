import React from 'react'
import CTALink from '@/components/CTA/CTALink'
import CustomImage from '@/components/CustomImage'
import styles from './styles.module.scss'
import Section from '@/components/Section'
import Typography from '@/components/Typography'
import { AcademyProgram } from '@/payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

const Program = async () => {

  const payload = await getPayloadHMR({ config })

  const academyProgram: AcademyProgram = await payload.findGlobal({
    slug: 'academyProgram',
  })

  return (
    <Section className={styles.programSection}>
      <div className={styles.programWrapper}>
        <div className={styles.programDesc}>
          <div className={styles.programHeader}>
            <h2>{academyProgram.title}</h2>
            <Typography size={2}>{academyProgram.description}</Typography>
          </div>
          <div className={styles.programItems}>
            {academyProgram.program.map(({ number, description }) => {
              return (
                <div key={number}>
                  <h3>{number}</h3>
                  <Typography size={2}>{description}</Typography>
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.programImage}>
          <CustomImage image={academyProgram.image as string} />
          <CTALink link={academyProgram.link} />
        </div>
      </div>
    </Section>
  )
}

export default Program
