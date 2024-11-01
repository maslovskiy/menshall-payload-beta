import React from "react";
import { EmblaOptionsType } from "embla-carousel";

import Slide from "../Slide";

import styles from "../styles.module.scss";
import { Barbers } from "@/payload-types";
import Section from '@/components/Section'
import EmblaCarousel from '@/components/Embla'

const OPTIONS: EmblaOptionsType = {
  align: "start",
};

const OurBarbers = ({ barbersData }: { barbersData: Barbers }) => {
  const { title, barbers, buttonText } = barbersData;
  return (
    <Section isFull isContainer>
      <EmblaCarousel
        className={styles.slider}
        viewportClassName={styles.viewport}
        slideClassName={styles.slide}
        options={OPTIONS}
        slides={barbers}
        slide={Slide}
        title={title}
        buttonText={buttonText}
        keyValue="buttonLink"
      />
    </Section>
  );
};

export default OurBarbers;
