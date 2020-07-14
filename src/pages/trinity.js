import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import ParticleBackground from '../components/particle-background'
import "../assets/scss/trinity.scss"

const modules = [
  "MAU22101 - Group theory ",
  "MAU23203 - Analysis in Several Real Variables",
  "MAU23401 - Advanced Classical Mechanics I",
  "MAU23403 - Equations of Mathematical Physics I ",
  "MAU23204 - Intro to Complex Analysis ",
  "MAU23206 - Calculus on Manifolds ",
  "MAU23402 - Advanced Classical Mechanics II",
  "MAU23404 - Equations of Mathematical Physics II",
]


const TrinityPage = () => {
  
  return (
  <Layout title="Trinity College Dublin" path="/trinity">
    
    <StaticQuery 
      query={graphql`
        query{
          allStrapiPage {
            edges {
              node {
                strapiId
                title
                slug
                isMenuItem
                page_list_location {
                  name
                }
              }
            }
          }
          
          allFile (filter:{
            relativeDirectory: {
              regex: "/^trinity/"
            }
          }) {
            edges {
              node {
                publicURL
                name
                relativeDirectory
                extension
              }
            }
          }
          
        }
      `}
      render={data => {
        const links = data.allStrapiPage.edges.filter(page => 
          page.node.page_list_location.name === "trinity"
        )

        const regexTest = /^trinity[/](.*)[/](.*)[/](.*)/
          
        const modules = data.allFile.edges
          .filter(edge => regexTest.test(edge.node.relativeDirectory))
          .map(edge => {
          
          const [dir, semester, module, section] = edge.node.relativeDirectory.match(regexTest) 
          
          return {
            ...edge.node,
            semester,
            module,
            section
          } 
        } 
        )

        return (
          <div>
            <ParticleBackground />
            <div className="full-center-flex">
                <h1 style={{pointerEvents:  "all", fontSize: "3rem"}}>
    
                {/* Top Links to Sections */}
                {links.map(page => 
                  <div style={{pointerEvents: "all", margin: "2rem"}}>
                  <Link to={`/${page.node.slug}`} className="trinity-main-link">
                    {page.node.title}
                  </Link>
                  </div>
                )}

                </h1>
              </div>
            <div className="full-center-flex light-section">
            
                {/* Module Data */}
                {modules.map(file => 
                  <a href={file.publicURL}>
                    {file.name}
                  </a>
                )}
                
            </div>
            <div className="full-center-flex dark-section">
            
            </div>
          </div>
        )
      }}
    />

  </Layout>
  )
}

export default TrinityPage