import React from "react"

import Layout from "../components/layout"
import ParticleBackground from '../components/particle-background'
import "../assets/scss/main.scss"

const NotFoundPage = () => (
  <Layout title="404 Not Found">
    <ParticleBackground />
    <div className="light-section full-center-flex" style={{position: "absolute", top:"0px", zIndex: 10, pointerEvents: "none"}}>
    <h1>PAGE NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
    </div>
  </Layout>
)

export default NotFoundPage
