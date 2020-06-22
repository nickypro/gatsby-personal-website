import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import "../assets/scss/nav.scss"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Nav = () => (
  <div>
    <div>
      <nav className="navbar-container" data-uk-navbar>
        <div className="navbar-left">
          <ul className="navbar-nav">
            <li>
              <Link to="/" activeClassName="navbar-active">Nicky.pro</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul className="navbar-nav">
            <StaticQuery
              query={graphql`
                query {
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
              render={data =>
                data.allStrapiPage.edges.map((page, i) => {
                  if (page.node.page_list_location.name === "navbar") return (
                    <li key={page.node.strapiId}>
                      <AnchorLink to={`/${page.node.slug}`} stripHash>
                        {page.node.title}
                      </AnchorLink>
                    </li>
                  )
                  return <></>;
                })
              }
            />
          </ul>
        </div>
      </nav>
    </div>
  </div>
)

export default Nav