import React from "react";
import classNames from "classnames";

import styles from "../style.module.scss";
import { CTAButtonProps } from "../types";
import Spinner from '@/components/Spinner'
import { Icon } from '@/components/Icon'

export const SecondaryButton = (props: CTAButtonProps) => {
  const { iconPosition, loading, ...htmlProps } = props;
  return (
    <button
      {...htmlProps}
      disabled={loading || htmlProps.disabled}
      className={classNames(
        styles.secondary,
        props.className,
        iconPosition === "left" ? styles.reverse : "",
      )}
    >
      <span>{props.children}</span>
      <span className={styles.icon}>
        {loading ? (
          <Spinner />
        ) : (
          <Icon name="arrow-top" width={18} height={18} />
        )}
      </span>
    </button>
  );
};
