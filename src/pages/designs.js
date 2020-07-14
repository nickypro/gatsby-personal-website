import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/layout"
import ParticleBackground from '../components/particle-background'
import "../assets/scss/designs.scss"

const TrinityPage = () => {
  
  return (
  <Layout title="My Designs" path="/designs">
    <ParticleBackground />
    <div className="full-center-flex">
      <h1 style={{pointerEvents:  "all", fontSize: "3rem"}}>
        My Designs  
      </h1>
      <AnchorLink to="/designs#designs" className="transparent-button" stripHash>&#8964;</AnchorLink>
    </div>
    
    <div id="designs">
      <StaticQuery 
        query={graphql`
          query{
            allFile(filter: {
              extension: {regex: "/(jpg)|(png)/"},
              relativeDirectory:  {eq: "posters"}
            }) {
              edges {
                node {
                  relativeDirectory,
                  name,
                  relativePath
                  publicURL
                }
              }
            }

          }
        `}
        render={data => {
          const images = data.allFile.edges.map(edge => edge.node)
          
          return (
            <div className="full-center-flex light-section">
              
                <div>
                  <h2>Posters</h2>

                  <div className="design-grid">
                  {images
                    .map(image =>   
                  
                    <div key={image.name} className="design-grid-item">
                      <img src={image.publicURL} 
                        alt={image.name} 
                        className="design-grid-image"/> 
                      <a href={image.publicURL} 
                        alt={image.name} 
                        target="_blank" 
                        rel="noreferrer"
                        >
                        <div className="design-grid-info">
                          <h3>{image.name}</h3>
                        </div>
                      </a>
                    </div>  
                  )}
                  </div>
                </div>
              
            </div>
          )
        }}
      />

    </div>
  </Layout>
  )
}

export default TrinityPage