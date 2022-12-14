import React from "react";
import bemCssModules from "bem-css-modules";

import { default as AsideMenuStyles } from "../AsideMenu.module.scss";
import { Link } from "react-router-dom";

const style = bemCssModules(AsideMenuStyles);

const UserMenu = ({ isUserLogged }) => {
  return (
    <>
      <p className={style("title")}>Panel Użytkownika</p>
      <nav>
        <ul>
          <li className={style("link")}>
            <Link to="/">Kursy w sprzedaży</Link>
          </li>

          {isUserLogged && (
            <li className={style("link")}>
              <Link to="/my-courses">Moje zakupione kursy</Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default UserMenu;
