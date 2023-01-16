import React, { ReactNode, useState } from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'

interface Props {
}

0
function About(props: Props) {
  return (
    <>
    <hr id='about'
      className={styles.hr}/>
    <section 
      className={styles.aboutContainer}>
      <h3 className={styles.aboutTitle}>About</h3>
      <div className={styles.aboutGrid}>
      <div className={styles.aboutText}>
        <p>
        I started my tech career as a Sys Admin getting familiar with PHP and SQL on the job. After a few too many nights in cold server rooms and numerous DDoS attacks, I ventured outside of tech professionally, but I never truly left in my personal life. I realized my passion was to make an <span>impact</span> but also have fun in my career, so I learned to code.
        </p>
        <p>
        <span className={styles.motto}>“Be obsessed or be average”.</span> A harsh motto to live by but it's deeply motivational for me. I’m obsessed with the possibilities of building something <span>foundational</span> to the tech space. Each and every skill I explore and subsequently add to my tool belt has been studied with the goal in mind of improving myself to reach a level where only my <span>imagination</span> can hold me back. While solo learning never stops, being a part of a strong team and learning from seniors would be key to reaching that goal. With my willingness to learn, hard work and ability to communicate, I’ll bring the level of teamwork necessary to insure the project is successful while helping others along the way.
        </p>
            
      </div>
      <Image
        className={styles.aboutImage}
        src={"https://res.cloudinary.com/duniv0ekp/image/upload/v1673831447/hero_image/Fresh_Folk_-_Strolling_gym8uu.svg"}
        alt={"coworkers walking"}
        width={500}
        height={500}
      >
      </Image>
    </div>
    </section>
    
    </>
  )
}

export default About