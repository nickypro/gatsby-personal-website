import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../assets/scss/contact-details.scss"

const ContactDetails = () => {
  
  return (
  <StaticQuery
      query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [fileAbsolutePath], order: DESC }, filter: {fileAbsolutePath: {regex: "/home\/contact-details/"}}) {
          edges {
            node {
              html
              fileAbsolutePath
              frontmatter {
                type
              }

            }
          }
        }
      }
      `}
      render={data => {
        console.log(data)

        const contactDetails = data.allMarkdownRemark.edges[0].node

        return (
        <div className="flex-row contact-details" dangerouslySetInnerHTML={{__html: contactDetails.html}} />
        )}
      }
    />
  )
}

export default ContactDetails