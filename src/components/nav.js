import React from "react"
import { Link } from "gatsby"
import "../assets/scss/nav.scss"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const pages = [
  {
    title: "Projects",
    slug: "/#projects",
  },{
    title: "Blog",
    slug: "/blog",
  }
]

const Nav = (props) => {
  
  if (typeof window !== 'undefined') {
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (
          (currentScrollPos < 40)
        ) {
        document.getElementById("navbar-container").style.backgroundColor = "transparent";
        document.getElementById("navbar-container").style.boxShadow = "none";
      } else {
        document.getElementById("navbar-container").style.backgroundColor = "#6cd";
        document.getElementById("navbar-container").style.boxShadow = "0 2px 2px 0px rgba(10, 20, 30, 0.2)";
      }
    }
  }

  return (
  <div>
    <div>
      <nav className="navbar-container" id="navbar-container">
        <div className="navbar-left">
          <ul className="navbar-nav">
            <li>
              <Link to="/" activeClassName="navbar-active">Eoin Blunnie</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul className="navbar-nav">
            {
              pages.map((page, i) => {
                const path = page.slug
                const pathOnly = path.split("#")[0]
                console.log(path)

                return (
                  <li key={page.slug}>
                    <AnchorLink to={path} 
                      className={props.path === pathOnly ? "navbar-active" : ""} 
                      activeClassName="navbar-active" 
                      stripHash
                      >
                        {page.title}
                    </AnchorLink>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </nav>
    </div>
  </div>
)}

export default Nav