import React from 'react'
import Particles from 'react-particles-js';
import particlesConfig from '../assets/particlesjs-config.json'

const ParticleBackground = (props) => (
  <div className="full-center-flex particles-background">
    <Particles params={particlesConfig} className="full-center-flex" style={{height: "100vh"}}/>
  </div>
)

export default ParticleBackground