"use client";

import React from "react";
import Section from '@/components/Section'
import Services from '@/sections/Global/Services'
import { Service } from '@/payload-types'

type ServicesSectionProps = {
  title: "title" | "secondaryTitle" | "thirdTitle";
  activeSlug?: string | null;
  services: Service
};

const ServicesSection = (props: ServicesSectionProps) => {
  return (
    <Section heading={props.services[props.title]}>
      <Services services={props.services} activeSlug={props.activeSlug} />
    </Section>
  );
};

export default ServicesSection;
