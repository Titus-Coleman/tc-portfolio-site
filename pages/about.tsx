import React, { ReactNode, useState } from 'react'
import styles from '../styles/About.module.css'

interface Props {
  children?: ReactNode
}

const ReadMore = ({ children }: Props) => {

  const [isTruncated, setIsTruncated] = useState(true);
  
  // if (typeof children === 'string'){
  //   const text = children;
    
  // }
  const text = children;
  const resultString = isTruncated ? text.slice(0, 231)+"..." : text;
    
    
 


  function toggleIsTruncated(): void {
    setIsTruncated(!isTruncated);
  }

  return (
    <p>
      {resultString}
      <button 
        onClick={toggleIsTruncated}
        className={styles.read_more}>
        {isTruncated ? "Read More" : "Read Less"}
      </button>
    </p>
  );
}


function About(props: Props) {
  return (
    <section className={styles.aboutContainer}>
      <h2 className={styles.aboutTitle}>About me</h2>
      <div className={styles.aboutText}>
        <ReadMore>
        I started my tech journey in high school where I built gaming PCs for classmates and learned networking basics which led to a degree in computer networking. Soon after, I was a Sys Admin getting familiar with PHP and SQL on the job. After a few too many nights in cold server rooms and numerous DDoS attacks, I ventured outside of tech professionally, but I never truly left in my personal life. I realized, If I wanted to have fun in my career and have an impact, it was time to stop being scared and…learn to code.
        
        I recently heard a great line: “Be obsessed or be average”. I’m not obsessed with the fine details of development work, I’m obsessed with the possibilities of building something foundational to the tech space. Each and every skill I explore and subsequently add to my tool belt has been carefully reviewed with the goal in mind of developing myself to reach a skill level where only my imagination can hold me back. Being a part of a strong team and learning from seniors would be key to reaching that goal. With my willingness to learn, hard work and ability to communicate, I’ll bring the level of teamwork necessary to insure your project is successful.
        </ReadMore>      
      </div>
    </section>
  )
}

export default About