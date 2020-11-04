import React from "react"
import Img from 'gatsby-image';
import "../assets/scss/project-card.scss"
import ScrollAnimation from 'react-animate-on-scroll';

const Card = ({ project }) => {
  return (
    <ScrollAnimation animateIn="slideInLeft">
    <div className="project-card">
      {project.image &&
        <Img fluid={project.image.fluid} className="project-card-image"/>
      }
      <div className="project-card-body" dangerouslySetInnerHTML={{__html: project.html}}/>
    </div>
    </ScrollAnimation>
  )
}

export default Card