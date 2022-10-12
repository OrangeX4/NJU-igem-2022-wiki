import React, { useEffect } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
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
      <Helmet>
        <title>NJU-China/Home - 2022.igem.wiki</title>
      </Helmet>
      <Icon />
      <Nav />
      {/* <div className="nav-space" /> */}

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
            src='https://static.igem.wiki/teams/4173/wiki/wiki/title2.png' alt='logo animation' />
          <img data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="2000"
            className='description'
            src='https://static.igem.wiki/teams/4173/wiki/wiki/description2.png' alt='logo animation' />
          <img data-aos="fade-up"
            data-aos-delay="500"
            data-aos-offset="-100"
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
          <div className="home-row" style={{ paddingTop: 150 }}>
            <iframe title="NJU-China: Hairy-Scary Monster (2022) - Project Promotion [English]" width="800" height="450" src="https://video.igem.org/videos/embed/fe52e96a-7144-4d93-8b1e-e744a4899e4d" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
          </div>
          <div className="home-row">
            <div data-aos="slide-right" data-aos-duration="2000" className='home-text'>
              <div className='home-box'>
                <h1>Androgenetic alopecia</h1>
                <p>Androgenetic Alopecia is the most prevalent type of hair loss, affecting around half of all males over the age of 50 and roughly half of all women over the age of 65. Younger men and women can be affected by androgenetic alopecia. Androgenetic alopecia is most likely caused by a combination of genetic and environmental causes.</p>
              </div>
              <img className="home-image" src='https://static.igem.wiki/teams/4173/wiki/wiki/alopecia.png' alt='supervisor'></img>
            </div>
          </div>
          <div className="home-row">
            <div data-aos="slide-left" data-aos-duration="2000" className='home-text'>
              <img className="home-image" src='https://static.igem.wiki/teams/4173/wiki/wiki/1spaceship.png' alt='supervisor'></img>
              <div className='home-box'>
                <h1>RNA interference (RNAi)</h1>
                <p>RNA interference (RNAi) is a conserved biological response to double-stranded RNA that provides resistance to both endogenous parasite and exogenous pathogenic nucleic acids and regulates the expression of protein-coding genes. A gene is silenced as a result of RNA degradation into small RNAs (siRNAs and microRNAs) that activate ribonucleases to target homologous mRNA.</p>
              </div>
            </div>
          </div>
          <div className="home-row">
            <div data-aos="slide-right" data-aos-duration="2000" className='home-text'>
              <div className='home-box'>
                <h1>Small extracellular vesicles (sEVs)</h1>
                <p>Small extracellular vesicles (sEVs) are cell-created protein, lipid, or nucleic acid delivery systems that also serve as a form of extracellular communication. sEVs are now at the forefront of research with various physiologic and pathological activities. sEVs are considered to be a good biocompatible delivery system for RNAi technique.</p>
              </div>
              <img className="home-image" src='https://static.igem.wiki/teams/4173/wiki/wiki/1doctor.png' alt='supervisor'></img>
            </div>
          </div>
          <div className="home-row">
            <div data-aos="slide-left" data-aos-duration="2000" className='home-text'>
              <img className="home-image" src='https://static.igem.wiki/teams/4173/wiki/wiki/supervisor.png' alt='supervisor'></img>
              <div className='home-box'>
                <h1>NJU-China's project</h1>
                <p>NJU-China iGEM team's goal is to develop a AGA drug with minimal side effects, stable results, and ease of use. On the one hand, we applied the RNAi technique and mRNA embedding elements to regulate gene expression particularly. On the other hand, we used sEV and microneedles to carry and deliver siRNA and mRNA to follicle cells.</p>
              </div>
            </div>
          </div>
          <div className="home-row">
            <div>
              <h3>Quick Link:</h3>
              <div>
                <Link to="/project/description/" className="paper-btn btn-large btn-secondary-outline home-bottom">Project</Link>
                <Link to="/human-practices/overview/" className="paper-btn btn-large btn-secondary-outline home-bottom">Human Practices</Link>
                <Link to="/model/epidemiology-analysis/" className="paper-btn btn-large btn-secondary-outline home-bottom">Model</Link>
                <Link to="/achievements/" className="paper-btn btn-large btn-secondary-outline home-bottom">Achievements</Link>
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