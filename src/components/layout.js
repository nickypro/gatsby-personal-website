import React from "react"
import PropTypes from "prop-types"

import Nav from "./nav"
import Seo from "./seo"

const Layout = (props) => {
  return (
    <>
      <Seo title={props.title}/>
      <Nav />
      <main>{props.children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout