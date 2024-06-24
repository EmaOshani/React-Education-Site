import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Company from '../components/Company-section/Company'


import AboutUs from '../components/About-us/AboutUs'
import Courses from '../components/Course-section/Course'
import ChooseUs from '../components/Choose-us/ChooseUs'
import Feature from '../components/Feature-section/Feature'
import FreeCourse from '../components/Free-course-section/FreeCourse'



const Home = () => {
  return  (
  <Fragment>

    <Header />
    <Hero />
    <Company />
    < AboutUs/>
    < Courses/>
    <ChooseUs />
    < Feature/>
    <FreeCourse />
  

  </Fragment>
  
  )
}

export default Home
