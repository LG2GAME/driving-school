import { useCallback, useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

import { Button } from "@components/ui/index.ts";

import { useMediaQuery } from "@hooks/useMediaQuery";

import * as styles from "./navigation.css";
import { mq } from "@styles/theme.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile: boolean = useMediaQuery(mq.lg);

  const toggleNavigation = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    if (isMobile) document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isMobile, isOpen]);

  const Burger = () => (
    <div
      className={styles.burger}
      onClick={toggleNavigation}
      aria-expanded={isOpen}
      aria-controls="nav-menu"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && toggleNavigation()}
    >
      <span />
      <span />
      <span />
    </div>
  );

  return (
    <nav className={styles.navigation}>
      <HashLink
        to="/#strona-glowna"
        className={styles.logo}
        onClick={toggleNavigation}
      >
        Grzegorz Szarek
      </HashLink>
      <Burger />
      <ul
        id="nav-menu"
        className={styles.menu({ open: isMobile ? isOpen : true })}
        tabIndex={isMobile ? -1 : undefined}
      >
        <li className={styles.menuItem} onClick={toggleNavigation}>
          <HashLink to="#dlaczego-my">Dlaczego my?</HashLink>
        </li>
        <li className={styles.menuItem} onClick={toggleNavigation}>
          <HashLink to="#kursy">Oferta</HashLink>
        </li>
        <li className={styles.menuItem} onClick={toggleNavigation}>
          <HashLink to="#o-nas">O nas</HashLink>
        </li>
        <Button label="Kontakt" to="#kontakt" onClick={toggleNavigation} />
      </ul>
    </nav>
  );
};

export default Navigation;
