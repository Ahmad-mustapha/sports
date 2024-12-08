import React from 'react'
import { Navbar, Footer, Header, Mainheader, Hero, Jobs, Latestnews, Usefullinks, Partners} from '../../components/index'

const Homepage = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Mainheader />
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
