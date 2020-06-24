import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import ParticleBackground from '../components/particle-background'
import ProjectsComponent from "../components/projects"

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
      </h1>
    </div>

    <StaticQuery
      query={graphql`
        query {
          allStrapiProject {
            edges {
              node {
                strapiId
                name
                tools
                image {
                  publicURL
                }
                summary
                project_type {
                  type
                }
              }
            }
          }
          allStrapiProjectType {
            edges {
              node {
                order
                type
                updated_at
              }
            }
          }
        }
      `}
      render={data => {
        const projectTypes = data.allStrapiProjectType.edges.sort((typeA, typeB) => typeA.node.order - typeB.node.order)
        return (
        <div id="projects">
          <div>
            <ProjectsComponent projects={data.allStrapiProject.edges} projectTypes={projectTypes} />
          </div>
        </div>
        )}
      }
    />
  </Layout>
)

export default IndexPage