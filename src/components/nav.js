import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import "../assets/scss/nav.scss"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Nav = () => {
  
  if (typeof window !== 'undefined') {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      const maxScroll = document.body.clientHeight - window.innerHeight;
      let currentScrollPos = window.pageYOffset;
      if (
          (currentScrollPos < 40)
        ) {
        document.getElementById("navbar-container").style.backgroundColor = "transparent";
        document.getElementById("navbar-container").style.boxShadow = "none";
      } else {
        document.getElementById("navbar-container").style.backgroundColor = "#112";
        document.getElementById("navbar-container").style.boxShadow = "0 2px 2px 0px rgba(255, 255, 255, 0.2)";
      }
      prevScrollpos = currentScrollPos;
    }
  }

  return (
  <div>
    <div>
      <nav className="navbar-container" id="navbar-container" data-uk-navbar>
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
                      <AnchorLink to={`/${page.node.slug}`} activeClassName="navbar-active" stripHash>
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
)}

export default Nav