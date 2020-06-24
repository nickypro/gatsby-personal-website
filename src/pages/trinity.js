import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import ParticleBackground from '../components/particle-background'
import "../assets/scss/trinity.scss"

const TrinityPage = () => {
  
  return (
  <Layout title="Trinity College Dublin" path="/trinity">
    <ParticleBackground />
    <div className="full-center-flex" style={{position: "absolute", top:"0px", zIndex: 10, pointerEvents: "none"}}>
      <h1 style={{pointerEvents:  "all", fontSize: "3rem"}}>
        
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
            }
          `}
          render={data => {
            const links = data.allStrapiPage.edges.filter(page => page.node.page_list_location.name === "trinity")

            return (
              <div>
                {links.map(page => 
                  <div style={{pointerEvents: "all", margin: "2rem"}}>
                  <Link to={`/${page.node.slug}`} className="trinity-main-link">
                    {page.node.title}
                  </Link>
                  </div>
                )}
              </div>
            )
          }}
        />

      </h1>
    </div>
  </Layout>
  )
}

export default TrinityPage