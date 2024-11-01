import Link from "next/link";
import styles from "../style.module.scss";
import React from "react";
import { CTALinkProps } from "../types";
import classNames from "classnames";
import { Icon } from '@/components/Icon'

export const SecondaryLink = (props: CTALinkProps) => {
  return (
    <Link
      href={props.href}
      target={props.target}
      rel={props.rel}
      className={classNames(styles.secondary, props.className)}
    >
      {props.children}
      <span className={styles.icon}>
        <Icon
          name="arrow-top"
          width={18}
          height={18}
          color="var(--primary-dark)"
        />
      </span>
    </Link>
  );
};
