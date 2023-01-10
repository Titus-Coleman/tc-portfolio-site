import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import styles from '../styles/Projects.module.css'
import { Project } from '../typings'

type Props = {
  projects: Project[];
}

function Projects(project: Props) {

  const [position, setPosition] = useState(0);
  const slideshow = useRef();

  return (
    <section className={styles.projects_container}>
      <h3 className={styles.projects_title}>Projects</h3>
      <div className={styles.slideshow}>
          <motion.div
            className={styles.slideshow__items}
            drag='x'
            // whileDrag={{scale: 1.1}}
            // dragSnapToOrigin={true}
            // dragMomentum={false}
            dragConstraints={{
              left: -1000,
              // right: 300,
            }}
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1}}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
            }}
            >
              <ProjectCard projects={projects}/>
          </motion.div>
      </div>
    </section>
  )
}

export default Projects