import Image from 'next/image'
import React from 'react'
import styles from '../styles/ProjectCard.module.css'
import projectImg from "../public/app-mockup-laptop_mobile.svg"
import { Project } from '../typings'

type Props = {
  projects = Project[];
}

function ProjectCard() {
  return (
    <div className={styles.card__container}>
      <div className={styles.card}>
        <div className={styles.card__img}>
          <Image
            className={styles.image}
            src={projectImg}
            alt="Picture of the project"
            width={300}
            height={200}
            />
        </div>
        <div className={styles.card__info}>
          <h4 className={styles.card__title}>Fashion Brand Email Capture Page</h4>
          <p className={styles.card__description}>A responsive component/landing page informs visitors that the brand launch is coming soon and collects email addresses for future notification. Error state/ Email validation via Javascript and emails are stored in Supabase-Postgres DB on submission. 
          </p>
        </div>
      <div className={styles.card__techstack}>
          <span className={styles.card__tag}>HTML</span >
          <span className={styles.card__tag}>CSS</span>
          <span className={styles.card__tag}>Supabase</span>
          <span className={styles.card__tag}>Javascript</span>
      </div>
      <div className={styles.card__links}>
      <a 
          href="https://github.com/Titus-Coleman/base-apparel-coming-soon"
          target={'_blank'}>
          <Image
              className={styles.card__site}
              src={'/live-svgrepo-com.svg'}
              alt="Live Website Link"
              width={35}
              height={35}
              />
        </a>
        <a 
          href="https://github.com/Titus-Coleman/base-apparel-coming-soon"
          target={'_blank'}>
          <Image
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
  )
}

export default ProjectCard