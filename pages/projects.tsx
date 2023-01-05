import React from 'react'
import ProjectCard from '../components/ProjectCard'
import styles from '../styles/Projects.module.css'

function Projects() {
  return (
    <section className={styles.projects_container}>
      <h3 className={styles.projects_title}>Projects</h3>
      <div className={styles.slideshow}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}

export default Projects