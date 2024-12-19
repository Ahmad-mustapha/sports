import React from 'react'
import { Navbar, Footer, Mainheader, Hero, Latestnews, Usefullinks, Partners, LoginSignup} from '../../components/index'

const Homepage = () => {
  return (
    <div className='relative'>
      <Mainheader />
      {/* <LoginSignup /> */}
      {/* <Navbar /> */}
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
