import React from "react";

import ServiceCard from "./ServiceCard";

import styles from "./styles.module.scss";
import { Service } from "@/payload-types";
import Typography from '@/components/Typography'

interface IServices {
  services: Service;
  withDescription?: boolean;
  isAllVisible?: boolean;
  isBig?: boolean;
  title?: string | null;
  activeSlug?: string | null;
}

const Services = ({
  services,
  withDescription = true,
  isAllVisible = false,
  isBig = true,
  title,
  activeSlug,
}: IServices) => {
  const isActiveLink = (path: string) => path === activeSlug;

  return (
    <>
      {title && <h2>{title}</h2>}
      <div className={styles.services}>
        {services.services.map((service, index) => {
          return (
            (isAllVisible ||
              !isActiveLink(service.link.url as string)) && (
              <ServiceCard key={index} service={service} isBig={isBig}>
                {withDescription && (
                  <Typography size={2}>{service.description}</Typography>
                )}
              </ServiceCard>
            )
          );
        })}
      </div>
    </>
  );
};

export default Services;
