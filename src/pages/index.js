import React, { useEffect } from "react"
import AOS from "aos"

import Icon from "../components/icon"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Top from "../components/top"
import Billboard from "../components/billboard"

import "papercss"
import 'aos/dist/aos.css'

function IndexPage() {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div>
      <Icon />
      <Nav />
      <div className="nav-space" />

      <div className='home-container'>
        <div className='header'>
          <img data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2000"
            className='icon'
            src='https://static.igem.wiki/teams/4173/wiki/wiki/icon.png' alt='logo animation' />
          <img data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="2000"
            className='title'
            src='https://static.igem.wiki/teams/4173/wiki/wiki/title.png' alt='logo animation' />
          <img data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="2000"
            className='description'
            src='https://static.igem.wiki/teams/4173/wiki/wiki/description.png' alt='logo animation' />
          <img data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="2000"
            className='hairball'
            src='https://static.igem.wiki/teams/4173/wiki/wiki/hairball.gif' alt='logo animation' />
          <img data-aos="slide-up"
            data-aos-delay="50"
            data-aos-duration="2000"
            className='planet'
            src='https://static.igem.wiki/teams/4173/wiki/wiki/planet2.png' alt='logo animation' />
        </div>
        <div className="home-content">
          <div className="home-row">
            <Billboard effect={'slide-right'}>
              <p>Kilotonnes of fishing nets get lost each year. These nets still have the capacity to catch fish and get stuck on the seafloor
                destroying corals and marine life. Apart from that, these nets also pollute the ocean having made out of plastic.</p>
            </Billboard>
            <div data-aos='fade-down-left' className="home-image">
              <p>Empty</p>
            </div>
          </div>
          <div className="home-row">
            <Billboard effect={'slide-left'}>
              <p>Kilotonnes of fishing nets get lost each year. These nets still have the capacity to catch fish and get stuck on the seafloor
                destroying corals and marine life. Apart from that, these nets also pollute the ocean having made out of plastic.</p>
            </Billboard>
            <div data-aos='fade-down-left' className="home-image">
              <p>Empty</p>
            </div>
          </div>
        </div>
      </div>


      <Footer />
      <Top />
    </div>
  )
}

export default IndexPage