import React from "react";
import { Icon, IconName } from '@/components/Icon'
import CTALink from '@/components/CTA/CTALink'

const Social = ({ name, link }: { name: string; link: any }) => {
  return (
    <CTALink key={name} link={link}>
      <Icon name={name as IconName} width={24} height={24} />
    </CTALink>
  );
};

export default Social;
