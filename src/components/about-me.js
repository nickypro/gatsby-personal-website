import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import "../assets/scss/about-me.scss"

import ContactDetails from '../components/contact-details'

const AboutMe = () => {
  
  return (
  <StaticQuery
      query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [fileAbsolutePath], order: DESC }, filter: {fileAbsolutePath: {regex: "/home\/about-me/"}}) {
          edges {
            node {
              html
              fileAbsolutePath
              frontmatter {
                type
                image {
                  childImageSharp {
                    resize(width: 400, height: 400) {
                      src
                    }
                    fluid(maxWidth: 400) {
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

        const aboutMe = data.allMarkdownRemark.edges[0].node

        return (
        <div id="about-me">

          <div className="light-section center-flex">
            <noscript><style>{`
            .animated {
              opacity: 1;
            }
            `}</style></noscript>
            <div className="center-text-width row-flex">
          
              <div class="about-me-image">
                {aboutMe.frontmatter.image &&
                  <Img fluid={aboutMe.frontmatter.image.childImageSharp.fluid}/>
                }
              </div>

              <div class="about-me-text">
                <div class="main-text" dangerouslySetInnerHTML={{__html: aboutMe.html}} />
                <ContactDetails />
              </div>

            </div>
          </div>
        </div>
        )}
      }
    />
  )
}

export default AboutMe