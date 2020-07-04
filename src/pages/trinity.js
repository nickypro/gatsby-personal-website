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

const qm = {
  title: "PY1T20 - Quantum Mechanics",
  lecturer: "Paul Eastham",
  link: "https://tcd.blackboard.com",
  files: [
    {
      name: "1 : Superposition",
      type: "lecture slide"
    },{
      name: "2 : Light as a Particle",
      type: "lecture slide"
    },{
      name: "3 : Particles as Waves",
      type: "lecture slide"
    },{
      name: "4 : Wavefunctions",
      type: "lecture slide"
    },{
      name: "5 : Wavefunction Collapse and Wavepackets",
      type: "lecture slide"
    },{
      name: "6 : Uncertainty Principle",
      type: "lecture slide"
    },{
      name: "7 : The Bohr Model",
      type: "lecture slide"
    },{
      name: "8 : Thermal Phenomena",
      type: "lecture slide"
    },{
      name: "9 : Schrodingers Equation",
      type: "lecture slide"
    },{
      name: "10 : Operators and Solving Schrodingers Equation",
      type: "lecture slide"
    },{
      name: "11 : More solutions of Schrodinger Equation",
      type: "lecture slide"
    },{
      name: "12 : Tunnelling",
      type: "lecture slide"
    },{
      name: "13 : Angular Momentum",
      type: "lecture slide"
    },{
      name: "14 : Atomic Structure",
      type: "lecture slide"
    },{
      name: "15 : Finale",
      type: "lecture slide"
    },{
      name: "hw 1 - due 11 Jan 2020",
      type: "homework"
    },{
      name: "hw 1 - due 11 Jan 2020",
      type: "homework"
    },{
      name: "hw 1 - due 11 Jan 2020",
      type: "homework"
    },{
      name: "hw 1 - due 11 Jan 2020",
      type: "homework"
    },{
      name: "hw 1 - due 11 Jan 2020",
      type: "homework"
    },{
      name: "hw 1 - due 11 Jan 2020",
      type: "homework"
    },{
      name: "hw 1 - due 11 Jan 2020",
      type: "homework"
    },{
      name: "hw 1 - due 11 Jan 2020",
      type: "homework"
    }
  ]
}

const module_data = [
  qm,
  qm,
  qm,
]

const TrinityPage = () => {
  
  return (
  <Layout title="Trinity College Dublin" path="/trinity">
    <ParticleBackground />
    <div className="full-center-flex">
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
            const links = data.allStrapiPage.edges.filter(page => 
              page.node.page_list_location.name === "trinity"
            )

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

    {/** UI list of module titles */}
    <div className="full-center-flex light-section">
      <ul className="trinity-modules-list">
        {modules.map(text => 
          <li key={text}>{text}</li>
        )}
      </ul>
    </div>
    
    <div className="full-center-flex dark-section">
      {/** List of modules with content */}
      <div> 
        <h2>This Page is Under Development</h2>
        {module_data.map((module, index) => {

          let fileTypes = new Set()

          module.files.forEach(file => 
            fileTypes.add(file.type.toLowerCase())  
          ) 

          fileTypes = [...fileTypes]

          console.log(fileTypes)

          return (
          <div className="triniy-module" key={module.title+index}>
          <a href={module.link}>
            <div>
              <h3>{module.title}</h3>
              <p>{module.lecturer}</p>
            </div>
          </a>
          <div>
          {
              module.files.map(file => {
              return (
                <div key={module.title+index}>
                  <ul className="trinity-modules-list">
                    {file.name}
                  </ul>
                </div>
                )
              })
            }
          </div>

          <div className="trinity-module-files">
          {fileTypes.forEach((fileType, index2) => 
            <div key={fileType+index+index2}>
            <h4>{fileType}</h4>
            </div>
          )}
          </div>
          </div>
          )
        })}
      </div>
    </div>
  </Layout>
  )
}

export default TrinityPage