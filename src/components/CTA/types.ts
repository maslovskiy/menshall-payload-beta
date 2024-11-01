import { Page } from '@/payload-types'
import { LinkProps } from "next/link";
import React, { ComponentPropsWithoutRef } from "react";

export type CTALinkPropsGeneral = {
  link: {
    linkType: 'internalLink' | 'externalLink';
    label?: string | null;
    internalLink?: (string | null) | Page;
    externalLink?: string | null;
    url?: string | null;
    secondaryLabel?: string | null;
    variant?: ('primary' | 'secondary' | 'none') | null;
    newTab?: boolean | null;
  };
  iconPosition?: "left" | "right";
  className?: string;
  children?: React.ReactNode;
};

export type CTALinkProps = LinkProps & {
  children: React.ReactNode;
  target?: string;
  rel?: string;
  className?: string;
};

export type CTAButtonProps = ComponentPropsWithoutRef<"button"> & {
  iconPosition?: "left" | "right";
  loading?: boolean;
};
