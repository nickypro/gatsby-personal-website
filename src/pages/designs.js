import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/layout"
import ParticleBackground from '../components/particle-background'
import "../assets/scss/designs.scss"

const TrinityPage = () => {
  
  return (
  <Layout title="My Designs">
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
            allStrapiDesign {
              edges {
                node {
                  strapiId
                  title
                  order
                  image {
                    publicURL
                  }
                  image_hd {
                    publicURL
                  }
                  design_type {
                    name
                  }
                }
              }
            }
            allStrapiDesignType {
              edges {
                node {
                  name
                }
              }
            }

          }
        `}
        render={data => {
          const designTypes = data.allStrapiDesignType.edges.map(edge => edge.node.name)
          const designs = data.allStrapiDesign.edges.map(edge => edge.node)

          return (
            <div className="full-center-flex light-section">
              {designTypes.map(type =>
                <div key={type}>
                  <h2>{type}</h2>

                  <div className="design-grid">
                  {designs
                    .filter(design => design.design_type.name === type)
                    .sort((a, b) => a.order - b.order)
                    .map(design =>   
                  
                    <div key={design.title} className="design-grid-item">
                      <img src={design.image.publicURL} 
                        alt={design.title} 
                        className="design-grid-image"/> 
                      <a href={design.image_hd.publicURL} 
                        alt={design.title} 
                        target="_blank" 
                        rel="noreferrer"
                        >
                        <div className="design-grid-info">
                          <h3>{design.title}</h3>
                        </div>
                      </a>
                    </div>  
                  )}
                  </div>
                </div>
              )}
            </div>
          )
        }}
      />

    </div>
  </Layout>
  )
}

export default TrinityPage