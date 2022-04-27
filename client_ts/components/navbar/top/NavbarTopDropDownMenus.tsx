import React, { useContext } from "react";
import NavbarDropdown from "./NavbarDropdown";
import {
  dashboardRoutes,
  appRoutes,
  pagesRoutes,
  modulesRoutes,
  documentationRoutes,
} from "routes/routes";
import { Dropdown } from "react-bootstrap";
import Link from "next/link";
import { flatRoutes } from "helpers/utils";
import NavbarDropdownApp from "./NavbarDropdownApp";
import AppContext from "context/Context";

const NavbarTopDropDownMenus = () => {
  const {
    config: { navbarCollapsed, showBurgerMenu },
    setConfig,
  } = useContext(AppContext);

  const handleDropdownItemClick = () => {
    if (navbarCollapsed) {
      setConfig("navbarCollapsed", !navbarCollapsed);
    }
    if (showBurgerMenu) {
      setConfig("showBurgerMenu", !showBurgerMenu);
    }
  };
  return (
    <>
      <NavbarDropdown title="dashboard">
        {dashboardRoutes.children[0].children.map((route) => (
          <Dropdown.Item
            key={route.name}
            as={Link}
            className={route.active ? "link-600" : "text-500"}
            to={route.to}
            onClick={handleDropdownItemClick}
          >
            {route.name}
          </Dropdown.Item>
        ))}
      </NavbarDropdown>

      <NavbarDropdown title="app">
        <NavbarDropdownApp items={appRoutes.children} />
      </NavbarDropdown>

      <NavbarDropdown title="documentation">
        {flatRoutes(documentationRoutes.children).map((route) => (
          <Dropdown.Item
            key={route.name}
            as={Link}
            className={route.active ? "link-600" : "text-500"}
            href={route.to}
            onClick={handleDropdownItemClick}
          >
            {route.name}
          </Dropdown.Item>
        ))}
      </NavbarDropdown>
    </>
  );
};

export default NavbarTopDropDownMenus;