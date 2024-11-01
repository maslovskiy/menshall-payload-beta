import React from "react";
import styles from "./styles.module.scss";
import CustomImage from '@/components/CustomImage'
import RichText from '@/components/RichText'
import { Media } from '@/payload-types'

type Props = {
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
};

const Tiles = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <h2>{props.title}</h2>
      <div className={styles.advantages}>
        {props.list.map(({ title, content_html, image }) => (
          <div className={styles.adv} key={title}>
            <div className={styles.icon}>
              <CustomImage image={image} />
            </div>
            <div className={styles.desc}>
              <h5>{title}</h5>
              <RichText content={content_html} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tiles;
