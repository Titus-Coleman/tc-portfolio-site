import React from 'react'
import ProjectCard from '../components/ProjectCard'
import styles from '../styles/Portfolio.module.css'

function Portfolio() {
  return (
    <section className={styles.slideshow}>
      <h2>Projects</h2>
      <ProjectCard />

    </section>
  )
}

export default Portfolio