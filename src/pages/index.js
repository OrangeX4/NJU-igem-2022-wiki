import React, { useEffect } from "react"
import { Link } from "gatsby"
import AOS from "aos"

import Icon from "../components/icon"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Top from "../components/top"

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
            data-aos-offset="-100"
            data-aos-duration="2000"
            className='planet'
            src='https://static.igem.wiki/teams/4173/wiki/wiki/planet3.png' alt='logo animation' />
        </div>
        <div className="home-content">
          <div className="home-row">
            <div data-aos="slide-right" data-aos-duration="3000" className='home-text'>
              <div className='home-box'>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur repellendus excepturi, consequatur illo rerum, non sint asperiores dolore sapiente, vitae blanditiis. Officiis at quaerat modi earum, fugiat magni impedit, aperiam.</p>
              </div>
              <img className="home-image" src='https://static.igem.wiki/teams/4173/wiki/wiki/supervisor2.png' alt='supervisor'></img>
            </div>
          </div>
          <div className="home-row">
            <div data-aos="slide-left" data-aos-duration="3000" className='home-text'>
              <img className="home-image" src='https://static.igem.wiki/teams/4173/wiki/wiki/supervisor.png' alt='supervisor'></img>
              <div className='home-box'>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur repellendus excepturi, consequatur illo rerum, non sint asperiores dolore sapiente, vitae blanditiis. Officiis at quaerat modi earum, fugiat magni impedit, aperiam.</p>
              </div>
            </div>
          </div>
          <div className="home-row">
            <div data-aos="slide-right" data-aos-duration="3000" className='home-text'>
              <div className='home-box'>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur repellendus excepturi, consequatur illo rerum, non sint asperiores dolore sapiente, vitae blanditiis. Officiis at quaerat modi earum, fugiat magni impedit, aperiam.</p>
              </div>
              <img className="home-image" src='https://static.igem.wiki/teams/4173/wiki/wiki/supervisor2.png' alt='supervisor'></img>
            </div>
          </div>
          <div className="home-row">
            <div data-aos="slide-left" data-aos-duration="3000" className='home-text'>
              <img className="home-image" src='https://static.igem.wiki/teams/4173/wiki/wiki/supervisor.png' alt='supervisor'></img>
              <div className='home-box'>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur repellendus excepturi, consequatur illo rerum, non sint asperiores dolore sapiente, vitae blanditiis. Officiis at quaerat modi earum, fugiat magni impedit, aperiam.</p>
              </div>
            </div>
          </div>
          <div className="home-row">
            <iframe title="NJU-China: No title (2022) - 10-second Highlight [English]" width="560" height="315" src="https://video.igem.org/videos/embed/503ed26a-210c-47c4-8180-d4f53b0ea5ec" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
          </div>
          <div className="home-row">
            <div>
              <h3>Quick Link:</h3>
              <div>
                <Link to="/description/" className="paper-btn btn-large btn-secondary-outline home-bottom">Project</Link>
                <Link to="/description/" className="paper-btn btn-large btn-secondary-outline home-bottom">Project</Link>
                <Link to="/description/" className="paper-btn btn-large btn-secondary-outline home-bottom">Project</Link>
                <Link to="/description/" className="paper-btn btn-large btn-secondary-outline home-bottom">Project</Link>
              </div>
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