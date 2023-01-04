import React from 'react'
import ProjectCard from '../components/ProjectCard'
import styles from '../styles/Projects.module.css'

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className={styles.slideshow}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}

export default Projects