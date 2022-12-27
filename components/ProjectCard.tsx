import Image from 'next/image'
import React from 'react'
import styles from '../styles/ProjectCard.module.css'
import projectImg from "../public/Base_Apparel_coming_soon_page_mobile.png"
import gitImg from "../public/icons8-github-squared.svg"


function ProjectCard() {
  return (
    <div className={styles.card__container}>
    <div className={styles.card}>
    <Image
      className={styles.card__github}
      src={gitImg}
      alt="Link to project repo on github"
       />
       <Image
      className={styles.card__img}
      src={projectImg}
      alt="Picture of the project"
      width={100}
       />
    <h1 className={styles.card__title}>App project Design 2022</h1>
    <p className={styles.card__description}>This app was build as a challenge for FrontendMentor.io. 

    </p>
    <ul className={styles.card__techstack}>
      <li>Javascript</li>
      <li>React</li>
      <li>CSS</li>
      <li>Supabase</li>

    </ul>
    </div>
    </div>
  )
}

export default ProjectCard