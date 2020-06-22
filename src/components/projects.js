import React from 'react'
import ProjectCard from './project-card'
import '../assets/scss/project-card.scss'

const Projects = ({ projects, projectTypes }) => {
  return (
    <>
    {projectTypes.map(projectType => 
      <div className="full-center-flex light-section">
      <h1>{projectType.node.type}</h1>
      <div className="projects-section">
        {projects
          .filter(project => project.node.project_type.type === projectType.node.type)
          .sort((projectA, projectB) => 
            new Date(projectA.node.updated_at) - new Date(projectB.node.updated_at)
          )
          .map((project, i) => {
          return (
            <ProjectCard key={project.node.name} project={project.node}/>
          )
        })}
      </div>
    </div>
    )}
    </>
  )
}

export default Projects