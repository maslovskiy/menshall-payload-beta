import React from 'react'

import styles from './style.module.scss'
import { Contact, Media, Page } from '@/payload-types'
import classNames from 'classnames'
import Section from '@/components/Section'
import CustomImage from '@/components/CustomImage'
import VideoPlayer from '@/components/VideoPlayer'
import CTALink from '@/components/CTA/CTALink'
import Socials from '@/components/Socials'
import RichText from '@/components/RichText'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

interface BannerProps {
  Title: string;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  content_html?: string | null;
  backgorund: string | Media;
  link: {
    linkType: 'internalLink' | 'externalLink';
    label?: string | null;
    internalLink?: (string | null) | Page;
    externalLink?: string | null;
    url?: string | null;
    secondaryLabel?: string | null;
    variant?: ('primary' | 'secondary' | 'none') | null;
    newTab?: boolean | null;
  };
  id?: string | null;
  blockName?: string | null;
  blockType: 'banner';
}

const Banner = async ({ block }: { block: BannerProps }) => {

  const payload = await getPayloadHMR({ config })

  const contacts: Contact = await payload.findGlobal({
    slug: 'contacts',
  });

  const image = typeof block.backgorund === 'string' ? undefined : block.backgorund.mimeType === 'video/mp4' ? (
    <VideoPlayer media={block.backgorund} />
  ) : (
    <CustomImage image={block.backgorund} loading="eager" fill />
  )

  return (
    <Section
      className={styles.banner}
      isFull
      isContainer
      media={image}
    >
      <div className={classNames(styles.container, 'grid-content')}>
        <div className={styles.details}>
          <h1 dangerouslySetInnerHTML={{ __html: `${block.Title}` }} />
          <RichText content={block.content_html} />
        </div>
          <div className={styles.right}>
            <div className={styles.rightInner}>
              <Socials contacts={contacts} />
              <CTALink link={block.link} />
            </div>
          </div>
      </div>
    </Section>
  )
}

export default Banner
