import React, { useContext } from 'react'

import bemCssModule from 'bem-css-modules'

import {default as UserCoursesStyles} from './UserCourses.module.scss'
import { StoreContext } from '../../store/StoreProvider'
import Course from '../Courses/Subcomponents/Course'

const style = bemCssModule(UserCoursesStyles)



const UserCourses = () => {

   const {user, courses} = useContext(StoreContext);

   const boughtCourses = courses
      .filter(course => user.courses.includes(course.id))
      .map(course => <Course key={course.id} {...course}/>);

   return ( 
      <section className={style()}>
         <h2 className={style('title')}>Twoje wykupione kursy</h2>
         <ul className={style('list')}>
          {boughtCourses}  
         </ul>
      </section>
    );
}
 
export default UserCourses;