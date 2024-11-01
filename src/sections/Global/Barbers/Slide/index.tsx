"use client";

import React from "react";
import Link from "next/link";


import styles from "./styles.module.scss";
import CustomImage from '@/components/CustomImage'
import Typography from '@/components/Typography'
import { Icon } from '@/components/Icon'

const BarberSlide = (props: any) => {
  return (
    <Link
      prefetch={true}
      href={`/schedule?location=${props.location}&master=${props.id}`}
      className={styles.card}
    >
      {props.image && <CustomImage image={props.image} />}
      <div className={styles.content}>
        <div className={styles.desc}>
          <h4>{props.name}</h4>
          <Typography size={3}>{props.specialization}</Typography>
        </div>
        <span className={styles.link}>
          {props.buttonText}
          <Icon name="arrow-top" color="var(--primary-dark)" />
        </span>
      </div>
    </Link>
  );
};

export default BarberSlide;
