import React from 'react'
import Navbar from './component/nav/Navbar'
import Carousel from './component/carousel/Carousel'
import Listing from './component/listing/Listing'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Listing/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App