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
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const Burger = () => (
    <div className={styles.burger} onClick={toggleNavigation}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  return (
    <nav className={styles.navigation}>
      <HashLink to="/" className={styles.logo}>
        Grzegorz Szarek
      </HashLink>
      <Burger />
      <ul className={styles.menu(isMobile ? { open: isOpen } : undefined)}>
        <li className={styles.menuItem}>
          <HashLink to="#dlaczego-my">Dlaczego my?</HashLink>
        </li>
        <li className={styles.menuItem}>
          <HashLink to="#oferta">Oferta</HashLink>
        </li>
        <li className={styles.menuItem}>
          <HashLink to="#o-nas">O nas</HashLink>
        </li>
        <Button label="Kontakt" to="kontakt" />
      </ul>
    </nav>
  );
};

export default Navigation;
