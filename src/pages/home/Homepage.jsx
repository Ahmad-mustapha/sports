import React from 'react'
import { Navbar, Footer, Mainheader, Hero, Latestnews, Usefullinks, Partners} from '../../components/index'

const Homepage = () => {
  return (
    <div className='relative'>
      <Mainheader />
      <Navbar />
      <Hero />
      <Latestnews />
      <Usefullinks />
      <Partners />
      {/* <Jobs /> */}
      {/* <Header /> */}
      <Footer />
    </div>
  )
}

export default Homepage
