import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Carousel from './Carousel'
import HondaShowcase from './HondaShowcase'
import MapContentSplit from './MapContentSplit'
import WelcomeSection from './WelcomeSection'


const Home = () => {
  return (
    <>
    <Carousel/>
    <WelcomeSection/>
    <HondaShowcase/>
    <MapContentSplit/>
    </>
  )
}

export default Home