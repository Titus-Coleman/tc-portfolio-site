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
      <div className={styles.slide__container}>
          <div className={styles.slide__content}>
            <div className={styles.card__wrapper}>
              <div className={styles.card}>
                
                <div className={styles.image__content}>
                  <span className={styles.overlay}></span>
                  <div className={styles.card__image}>
                    <img 
                        className={styles.card__img}
                        src="app-mockup.svg" 
                        alt=""  />
                  </div>
                </div>
                <div className={styles.card__content}>
                  <h4 className={styles.card__name}>Project Name Here</h4>
                  <p className={styles.card__description}>Description</p>
                  <div className={styles.card__techstack}>
                      <span className={styles.card__tag}>Javascript</span>
                      <span className={styles.card__tag}>Rust</span>
                      <span className={styles.card__tag}>React</span>
                  </div>
                  <div className={styles.card__links}>
                      <a 
                        // href={pCard.linkToSite}
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
                        // href={pCard.linkToGitHub}
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
              </div>
            </div>
          </div>
      </div>
    </section>
    </>
  )
}

export default Projects