"use client";
import React from "react";
import classNames from "classnames";

import useWindowSize from "@/hooks/useWindowSize";
import Dropdown from "./Dropdown";

import tabsStyles from "./tabstyles.module.scss";
import Typography from '@/components/Typography'
import RichText from '@/components/RichText'
import CustomImage from '@/components/CustomImage'
import { Media } from '@/payload-types'
import { Icon } from '@/components/Icon'

type Props = {
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
};

const TabsBlock = (props: Props) => {
  const { list, secondLabel, thirdLabel } = props;
  const [active, setActive] = React.useState(0);
  const { windowWidth } = useWindowSize();
  const onClick = (index: number) => {
    setActive(index);
  };

  const tab = React.useMemo(() => {
    return list[active];
  }, [active, list]);

  return (
    <>
      <div className={tabsStyles.tabs}>
        {windowWidth > 767 ? (
          <Buttons active={active} onClick={onClick} tabs={list} />
        ) : (
          <Dropdown active={active} onSelect={onClick} tabs={list} />
        )}

        <div className={tabsStyles.content}>
          <h3>{tab.title}</h3>
          <div className={tabsStyles.description}>
            <div className={tabsStyles.subs}>
              <div className={tabsStyles.sub}>
                <span>{secondLabel}</span>
                <Typography size={2}>{tab.price}</Typography>
              </div>
              <div className={tabsStyles.sub}>
                <span>{thirdLabel}</span>
                <Typography size={2}>{tab.duration}</Typography>
              </div>
            </div>
            <div className={tabsStyles.text}>
              <RichText content={tab.content_html}></RichText>
            </div>
          </div>
          {tab.image && (
            <div className={tabsStyles.image}>
              <CustomImage image={tab.image} width={100} height={330} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TabsBlock;

// @ts-ignore
const Buttons = ({ tabs, onClick, active }) => {
  const buttonId = React.useId();
  return (
    <div className={tabsStyles.buttons}>
      {tabs.map((tab: any, index: any) => {
        return (
          <button
            key={`${buttonId}${index}`}
            onClick={() => onClick(index)}
            className={classNames(
              tabsStyles.button,
              active === index ? tabsStyles.active : "",
            )}
          >
            <span>
              <Icon name="arrow-short" height={18} width={18} />
            </span>
            {tab.title}
          </button>
        );
      })}
    </div>
  );
};
