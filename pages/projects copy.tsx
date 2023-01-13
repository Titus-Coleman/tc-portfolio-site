import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import styles from '../styles/Projects.module.css'
import { Project } from '../typings'

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {

  return (
    <>
    <hr id='projects' className={styles.hr}/>
    <section className={styles.projects_container}>
      <h3 className={styles.projects_title}>Projects</h3>
      <div className={styles.slideshow}>
          <motion.div
            className={styles.slideshow__items}
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1}}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
            }}
            >
              {projects?.map((pCard, i) => (
                <div key={i} className={styles.card}>
                <div className={styles.card__img}>
                  <img
                    className={styles.image}
                    src={pCard.image.secure_url}
                    alt="Picture of the project"
                    width={300}
                    height={200}
                    />
                </div>
                <div className={styles.card__info}>
                  <span>{i+1} of {projects.length}</span>
                  <h4 className={styles.card__title}>{pCard?.title}</h4>
                  <p className={styles.card__description}>{pCard?.summary}
                  </p>
                </div>
                <div className={styles.card__techstack}>
                  {pCard?.technologies?.map((tech) => (
                      <span key={tech?._id} className={styles.card__tag}>{tech?.title}</span>

                  ))} 
                </div>
                <div className={styles.card__links}>
                <a 
                  href={pCard.linkToSite}
                  target={'_blank'}>
                  <img
                      className={styles.card__site}
                      src={'/live-svgrepo-com.svg'}
                      alt="Live Website Link"
                      width={35}
                      height={35}
                      />
                </a>
                <a 
                  href={pCard.linkToGitHub}
                  target={'_blank'}>
                  <img
                      className={styles.card__git}
                      src={'/github-icon.svg'}
                      alt="Project Github Link"
                      width={35}
                      height={35}
                      />
                </a>
                </div>
                </div>
              ))}
          </motion.div>
      </div>
    </section>
    </>
  )
}

export default Projects