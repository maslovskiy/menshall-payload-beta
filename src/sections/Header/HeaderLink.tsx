"use client";

import React from "react";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";
import { Header } from "@/payload-types";
import classNames from "classnames";
import Typography from '@/components/Typography'
import CTALink from '@/components/CTA/CTALink'

const HeaderLink = ({
  link,
  size = 3,
}: {
  link: Header["navItems"][0]['link'];
  size?: 1 | 3;
}) => {
  const activeSlug = usePathname();

  const isBold = size === 1 ? "b-500" : "";

  return (
    <>
      <Typography
        size={size}
        className={classNames(
          `/${link.url}` === activeSlug ? styles.active : styles.link,
          isBold,
        )}
      >
        <CTALink link={link} />
      </Typography>
    </>
  );
};

export default HeaderLink;
