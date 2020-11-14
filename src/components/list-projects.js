import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ProjectCard from "../components/project-card"

const ListProjects = () => {
  
  return (
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
  )
}

export default ListProjects