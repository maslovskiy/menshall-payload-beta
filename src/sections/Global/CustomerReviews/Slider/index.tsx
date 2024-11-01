"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import dynamic from "next/dynamic";

import ReviewSlide from "../Slide";

import { Reviews } from "@/payload-types";
import classNames from "classnames";
import styles from "../styles.module.scss";
import Section from '@/components/Section'
import CustomImage from '@/components/CustomImage'

const EmblaCarousel = dynamic(() => import("../../../../components/Embla"), {
  ssr: false,
});

const OPTIONS: EmblaOptionsType = {
  align: "start",
};

const Slider = ({ reviews }: { reviews: Reviews }) => {
  const { title, reviews: list } = reviews;

  if (!(list && list.length > 0)) {
    return <></>;
  }

  const data = list.map((review: any) => {
    const [firstName, lastName] = review.name.split(" ");
    return {
      ...review,
      user_name: `${firstName} ${lastName ? `${lastName[0]}.` : ""}`,
      href: review.link,
    };
  });

  return (
    <Section
      className={classNames("grid-content-full grid-container", styles.section)}
      media={typeof reviews.bg !== "string" && <CustomImage image={reviews.bg} fill />}
    >
      <EmblaCarousel
        options={OPTIONS}
        slides={data}
        slide={ReviewSlide}
        title={title}
      />
    </Section>
  );
};

export default Slider;
