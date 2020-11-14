import React from "react"
import Layout from "../components/layout"
import ParticleBackground from '../components/particle-background'
import ListProjects from '../components/list-projects'

import Typist from 'react-typist'
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "react-typist/dist/Typist.css"
import "../assets/scss/main.scss"

const IndexPage = () => (
  <Layout title="Nicky.pro" path="/">
    
    <ParticleBackground />
    <div className="full-center-flex" style={{pointerEvents: "none", zIndex: 1}}>
      <h1 style={{pointerEvents:  "all"}}>
        <Typist avgTypingDelay={100}>
          <Typist.Delay ms={500} />
          Nicky Pochinkov.
        </Typist>
        <AnchorLink to="/#projects" className="transparent-button" stripHash>&#8964;</AnchorLink>
        <noscript>
          Nicky Pochinkov
        </noscript>
      </h1>
    </div>

    <ListProjects />

  </Layout>
)

export default IndexPage