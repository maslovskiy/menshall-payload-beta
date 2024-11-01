import React from 'react'
import styles from './styles.module.scss'
import RichText from '@/components/RichText'

type Props = {
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

const List = (props: Props) => {
  return (
    <div className={styles.stages}>
      <div className={styles.stageContent}>
        {props.list.map(l => {
            return (
              <div className={styles.stage} key={l.title}>
                <h4>{l.title}</h4>
                <RichText content={l.content_html} />
              </div>
            )
          },
        )}
      </div>
    </div>
  )
}

export default List
