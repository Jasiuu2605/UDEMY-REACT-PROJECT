import React from "react";
import { useContext } from "react";
import bemCssModules from "bem-css-modules";
import { StoreContext } from "../../../store/StoreProvider";
import request from "../../../helpers/request";
import { useHistory } from "react-router-dom";

import { default as CourseStyle } from "./Course.module.scss";

const style = bemCssModules(CourseStyle);

const Course = ({ authors, img, price, title, id, isUserContext = false }) => {
  const { user, setUser } = useContext(StoreContext);
  const history = useHistory();

  const allAuthors = authors.join(", ");

  const isUserLogged = Boolean(user);

  const handleOnCLick = async () => {
    try {
      const { data, status } = await request.patch("/users", {
        login: user.login,
        courseId: id,
      });

      if (status === 202) {
        setUser(data.user);
        history.push("/my-courses");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const shouldBeBuyButtonVisible = isUserLogged && !isUserContext;

  return (
    <li>
      <article className={style()}>
        <h3 className={style("title")}>{title}</h3>
        <img
          className={style("image")}
          src="https://cdn.pixabay.com/photo/2017/11/16/09/32/matrix-2953869_960_720.jpg"
          alt={title}
        />
        <p className={style("price")}>{`Koszt kursu: ${price}zł`}</p>
        <p className={style("authors")}>{`Autorzy kursu: ${allAuthors}`}</p>
        {shouldBeBuyButtonVisible && (
          <button onClick={handleOnCLick}>Zakup ten kurs</button>
        )}
      </article>
    </li>
  );
};

export default Course;
