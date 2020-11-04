import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import ParticleBackground from '../components/particle-background'
import TrinityFiles from '../components/trinity-files'
import "../assets/scss/trinity.scss"

const TrinityPage = () => {
  
  return (
  <Layout title="Trinity College Dublin" path="/trinity">
    
    <StaticQuery 
      query={graphql`
        query{
          
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
        const regexTest = /^trinity[/](.*)[/](.*)[/](.*)/

        /* Extract data from file directory */
        const files = data.allFile.edges
          .filter(edge => regexTest.test(edge.node.relativeDirectory))
          .map(edge => {
          
          const [, semester, module, section] = edge.node.relativeDirectory.replace(/_/g, " ").replace(/-/g, " - ").match(regexTest) 
          
          return {
            ...edge.node,
            semester,
            module,
            section
          } 
        } 
        )

        /* Object-ify the files packaged into semesters */
        const semesters = {}

        files.forEach(file => {
          const {semester, module, section, name, publicURL, extension} = file

          if (!semesters[semester])
            semesters[semester] = {}

          if (!semesters[semester][module])
            semesters[semester][module] = {}
          
          if (!semesters[semester][module][section])
            semesters[semester][module][section] = []

          semesters[semester][module][section].push({name, publicURL, extension})
          
        });

        return (
          <div>
            <ParticleBackground />
            <div className="full-center-flex">
                <h1 style={{pointerEvents:  "all", fontSize: "3rem"}}>
                  TCD Theoretical Physics
                </h1>
            </div>
            <TrinityFiles semestersObj={semesters} />
          </div>
        )
      }}
    />

  </Layout>
  )
}

export default TrinityPage