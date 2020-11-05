import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import ParticleBackground from '../components/particle-background'
import ProjectCard from "../components/project-card"

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

    <StaticQuery
      query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [fileAbsolutePath], order: DESC }, filter: {fileAbsolutePath: {regex: "/projects\//"}}) {
          edges {
            node {
              html
              fileAbsolutePath
              frontmatter {
                title
                type
                image {
                  childImageSharp {
                    resize(width: 500, height: 500) {
                      src
                    }
                    fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }

            }
          }
        }
      }
      `}
      render={data => {
        console.log(data)

        const projects = data.allMarkdownRemark.edges.map(edge => {
          return {
            ...edge.node, 
            image: edge.node.frontmatter.image && edge.node.frontmatter.image.childImageSharp }
        })

        return (
        <div id="projects">
          {/** Main Projects */}
          <div className="full-center-flex light-section">
            <noscript><style>{`
            .animated {
              opacity: 1;
            }
            `}</style></noscript>
            <h1> Main Projects </h1>
            <div className="projects-section">
          
              {
                projects.map((proj, i) => {
                  return <ProjectCard key={proj.fileAbsolutePath} project={proj}/>
                })
              }
              {/*<ProjectsComponent projects={data.allStrapiProject.edges} projectTypes={projectTypes} />*/}

            </div>
          </div>
        </div>
        )}
      }
    />
  </Layout>
)

export default IndexPage