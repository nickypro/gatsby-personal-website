import React from "react"
import ReactMarkdown from 'react-markdown'
import "../assets/scss/project-card.scss"
import ScrollAnimation from 'react-animate-on-scroll';

const Card = ({ project }) => {
  return (
    <ScrollAnimation animateIn="slideInLeft">
    <div className="project-card">
      <img
        src={project.image.publicURL}
        alt={project.image.publicURL}
        className="project-card-image"
        />
      <div className="project-card-body">
        <h2 id="name">
          {project.name}
        </h2>
        <i>{project.tools}</i>
        <ReactMarkdown source={project.summary}/>
      </div>
    </div>
    </ScrollAnimation>
  )
}

export default Card