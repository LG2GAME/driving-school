import { HashLink } from "react-router-hash-link";
import classNames from "classnames";

import { Button } from "@components/ui";
import { useState, useCallback } from "react";

import "./Navigation.scss";

export default function Navigation() {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpand = useCallback(() => setExpanded((prev) => !prev), []);

  const Burger = () => (
    <div className="burger" onClick={handleExpand}>
      <div />
      <div />
      <div />
    </div>
  );

  return (
    <div className="navigation">
      <HashLink to="/" className="logo">
        Grzegorz Szarek
      </HashLink>
      <Burger />
      <nav
        className={classNames("navigation__menu", {
          "navigation__menu--expanded": expanded,
        })}
      >
        <ul>
          <li className="nav-item" onClick={handleExpand}>
            <HashLink to="/">Strona główna</HashLink>
          </li>
          <li className="nav-item" onClick={handleExpand}>
            <HashLink to="#dlaczego-my">Dlaczego my?</HashLink>
          </li>
          <li className="nav-item" onClick={handleExpand}>
            <HashLink to="#oferta">Oferta</HashLink>
          </li>
          <li className="nav-item" onClick={handleExpand}>
            <HashLink to="#o-nas">O nas</HashLink>
          </li>
        </ul>
        <Button label="Kontakt" to="kontakt" onClick={handleExpand} />
      </nav>
    </div>
  );
}
