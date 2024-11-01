import React from 'react'
import { Media, Page } from '@/payload-types'
import Section from '@/components/Section'
import styles from './styles.module.scss'
import classNames from 'classnames'
import RichText from '@/components/RichText'
import CTALink from '@/components/CTA/CTALink'
import CustomImage from '@/components/CustomImage'
import TabsBlock from '@/sections/Tabs'
import Tiles from '@/sections/Tiles'
import List from '@/sections/List'

type ContentProps = {
  block: {
    columns: {
      size: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
      blocks: (
        | {
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
        id?: string | null;
        blockName?: string | null;
        blockType: 'richText';
      }
        | {
        list: {
          title: string;
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
          id?: string | null;
        }[];
        id?: string | null;
        blockName?: string | null;
        blockType: 'list';
      }
        | {
        mobileHidden?: boolean | null;
        image: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'image';
      }
        | {
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
        blockType: 'linkBlock';
      }
        | {
        secondLabel?: string | null;
        thirdLabel?: string | null;
        list: {
          title: string;
          price: string;
          duration: string;
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
          image?: (string | null) | Media;
          id?: string | null;
        }[];
        id?: string | null;
        blockName?: string | null;
        blockType: 'tabs';
      }
        | {
        title?: string | null;
        list: {
          title: string;
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
          image: string | Media;
          id?: string | null;
        }[];
        id?: string | null;
        blockName?: string | null;
        blockType: 'tiles';
      }
        )[];
      id?: string | null;
    }[];
    id?: string | null;
    blockName?: string | null;
    blockType: 'content';
  }
}
const Content = ({ block }: ContentProps) => {
  const { columns } = block
  return (
    <Section>
      <div className={styles.grid}>
        {columns &&
          columns.length > 0 &&
          columns.map(({ size, blocks, id }) => {
            return (
              <div
                key={id}
                className={[styles.column, styles[`column--${size}`]].join(
                  ' ',
                )}
              >
                {blocks.map((block) => {
                  if (block.blockType === 'richText') {
                    return <RichText key={block.id} content={block.content_html} />
                  }
                  if (block.blockType === 'tabs') {
                    return <TabsBlock key={block.id} {...block} />
                  }
                  if (block.blockType === 'linkBlock') {
                    return <CTALink key={block.id} link={block.link} />
                  }

                  if (block.blockType === "list") {
                    return <List key={block.id} {...block} />;
                  }

                  if (block.blockType === 'tiles') {
                    return (
                      <Tiles key={block.id} {...block} />
                    )
                  }

                  if (block.blockType === 'image' && block.image) {
                    return (
                      <div
                        key={block.id}
                        className={classNames(
                          styles.media,
                          block.mobileHidden ? styles.mobileHidden : '',
                        )}
                      >
                        <CustomImage image={block.image} />
                      </div>
                    )
                  }
                })}
              </div>
            )
          })}
      </div>
    </Section>
  )
}

export default Content
