import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { List, Navigation, StyledLink } from "../data/styles";

const NavigationMenu: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [scrollY, setScrollY] = useState(0); // добавлено
  const location = useLocation();

  const handleScroll = useCallback(() => {
    const indentTop = 900;
    const step = 10;

    let delta = window.scrollY - scrollY;

    if (isHidden && window.scrollY < indentTop) {
      setIsHidden(false);
    } else {
      if (Math.abs(delta) > step && window.scrollY > indentTop) {
        delta > 0 ? setIsHidden(true) : setIsHidden(false);
        setScrollY(window.scrollY); // добавлено
      }
    }
  }, [isHidden, scrollY]); // добавлено scrollY

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Очистка обработчика события при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Navigation isHidden={isHidden}>
      <List>
        <li>
          <StyledLink
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Главная
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/products"
            className={
              location.pathname.startsWith("/products") ? "active" : ""
            }
          >
            Магазин
          </StyledLink>
        </li>
      </List>
    </Navigation>
  );
};

export default NavigationMenu;
