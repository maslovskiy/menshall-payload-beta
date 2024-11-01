import React from "react";
import Link from "next/link";
import { CTALinkPropsGeneral } from "./types";
import { PrimaryLink } from "./Links/PrimaryLink";
import { SecondaryLink } from "./Links/SecondaryLink";
import styles from "./style.module.scss";
import classNames from "classnames";

const CTALink = (props: CTALinkPropsGeneral) => {
  const { link, className, children = "", iconPosition = "right" } = props;

  const reverse = iconPosition === "left" ? styles.reverse : "";

  if (link.url) {
    const newTabProps = link?.newTab
      ? { target: "_blank", rel: "noopener noreferrer" }
      : { target: "", rel: "" };

    if (link?.variant === "primary") {
      return (
        <PrimaryLink
          href={link.url}
          target={newTabProps.target}
          rel={newTabProps.rel}
          className={classNames(className, reverse)}
        >
          {children || props.link?.label}
        </PrimaryLink>
      );
    }

    if (link?.variant === "secondary") {
      return (
        <SecondaryLink
          href={link.url}
          target={newTabProps.target}
          rel={newTabProps.rel}
          className={classNames(className, reverse)}
        >
          {children || props.link?.label}
        </SecondaryLink>
      );
    }

    return (
      <Link href={link.url} className={classNames(className, reverse)}>
        {children || props.link?.label}
      </Link>
    );
  }

  return "No Href";
};

export default CTALink;
