import React from "react";
import styles from "./styles.module.scss";
import { Header, Service } from '@/payload-types'
import HeaderLink from '@/sections/Header/HeaderLink'
import ServicePopup from '@/sections/Global/Services/ServicePopup'

const DesktopNav = ({
  header,
                      services,
}: {
  header: Header;
  services: Service;
}) => {
  return (
    <nav className={styles.nav}>
      {header.navItems.map(({ link, subNavItems }, i) => {
        if (i === 0) {
          return "";
        }
        if (subNavItems && subNavItems.length) {
          return (
            <React.Fragment key={i}>
              <ServicePopup parent={link?.label || ""} services={services} title={services.title} />
              <span>/</span>
            </React.Fragment>
          );
        }
        return (
          <React.Fragment key={i}>
            <HeaderLink link={link}/>
            {i + 1 < header.navItems.length && <span>/</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default DesktopNav;
