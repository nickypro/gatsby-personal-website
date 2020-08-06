import React from "react"
import Layout from "../components/layout"
import ParticleBackground from '../components/particle-background'

import AboutMe from '../components/about-me'
import ListProjects from '../components/list-projects'

import Typist from 'react-typist'
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "react-typist/dist/Typist.css"
import "../assets/scss/main.scss"

const IndexPage = () => (
  <Layout title="Nicky.pro" path="/">
    
    <ParticleBackground />
    <div className="full-center-flex" style={{pointerEvents: "none", zIndex: 1}}>
      <span style={{pointerEvents:  "all", textAlign: "center"}}>
        <h1 style={{fontSize: "3rem"}}>
        <Typist avgTypingDelay={100}>
          <Typist.Delay ms={500} />
          <span style={{fontSize: "7rem"}}>Eoin Blunnie</span>
          <Typist.Delay ms={500} />
          <br/>
          {"Quality music, "} 
          <Typist.Delay ms={500} />  
          made in Ireland.
        </Typist>
<<<<<<< HEAD
        <AnchorLink to="/#about-me" className="transparent-button" stripHash>&#8964;</AnchorLink>
        <noscript>
          Nicky Pochinkov
        </noscript>
      </h1>
=======
        </h1>
      </span>
      <AnchorLink style={{pointerEvents:  "all"}} to="/#projects" className="transparent-button" stripHash>&#8964;</AnchorLink>
>>>>>>> 81dfa72 (Changed text to be for Eoin)
    </div>

    <AboutMe />

    <ListProjects />

  </Layout>
)

export default IndexPage