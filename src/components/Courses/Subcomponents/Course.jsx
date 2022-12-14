import React from 'react';

import bemCssModules from 'bem-css-modules'

import { default as CourseStyle } from './Course.module.scss'

const style = bemCssModules(CourseStyle)

const Course = ({ authors, img, price, title}) => {

   const allAuthors = authors.join(', ');

   return (
     <li>
       <article className={style()}>
         <h3 className={style("title")}></h3>
         <img className={style("image")} src={img} alt={title} />
         <p className={style("price")}>{`Koszt kursu: ${price}zł`}</p>
         <p className={style("authors")}>{`Autorzy kursu: ${allAuthors}`}</p>
       </article>
     </li>
   );
}
 
export default Course;