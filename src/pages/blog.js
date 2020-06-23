import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import ParticleBackground from '../components/particle-background'

import { AnchorLink } from "gatsby-plugin-anchor-links";

import "react-typist/dist/Typist.css"
import "../assets/scss/main.scss"

const IndexPage = () => (
  <Layout title="Nicky.pro">
    <ParticleBackground />
    <div className="full-center-flex">
      <h1 style={{pointerEvents:  "all"}}>
        Things I Have Been Up to
        <br />
        <AnchorLink to="/blog#articles" className="transparent-button" stripHash>&#8964;</AnchorLink>
      </h1>
    </div>

    <div className="full-center-flex light-section" id="articles">
    <StaticQuery
      query={graphql`
        query{
          allStrapiArticle {
            edges {
              node {
                strapiId
                title
                image {
                  publicURL
                }
                published_at
                category {
                  name
                }
              }
            }
          }
        }
      `}
      render={data => {
        const articles = data.allStrapiArticle.edges.map(edge => edge.node)
        
        return (
        <div id="projects">
          {articles.map(article => 
            <h2>{article.title}</h2>
          )}
        </div>
        )}
      }
    />
  </div>
    
  </Layout>
)

export default IndexPage