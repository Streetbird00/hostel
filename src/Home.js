import React from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import "./Home.css"
import TopProperties from './TopProperties'

const Home = () => {
  return (
    <div>
       <Carousel/>
       <TopProperties/>
       <Footer/>
    </div>
  )
}

export default Home