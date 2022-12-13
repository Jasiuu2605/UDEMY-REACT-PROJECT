import bemCssModules from "bem-css-modules";
import React from 'react'
import { StoreContext } from "../store/StoreProvider";
import { useContext, useState } from "react";
import {default as HeaderStyles} from './Header.module.scss'
import LoginForm from "./LoginForm/LoginForm";

const style = bemCssModules(HeaderStyles)

const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user, setUser } = useContext(StoreContext);

  const handleOnClose = ( ) => setIsModalOpen(false);

  const handleOnClick = () => {
    if (Boolean(user)) {
      setUser(null)
    } else {
      setIsModalOpen(true);
    }
  }

  const setProperlyLabel = Boolean(user) ? "Wyloguj się" : "Zaloguj sie";

  return (
    <header className={style()}>
      <div className={style("logo-wrapper")} />
      <h1 className={style("title")}>Super kursy dla programistów!</h1>
      <button onClick={handleOnClick}>{setProperlyLabel}</button>
      <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen} />
    </header>
  );
};

export default Header;
