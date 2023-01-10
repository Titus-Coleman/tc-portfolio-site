import Image from 'next/image';
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from '../components/BackgroundCircles';
import styles  from '../styles/Hero.module.css'
import profilePic from '../public/serge-template.jpeg'
import Link from 'next/link';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';


type Props = {
  pageInfo: PageInfo
};

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
      words: [
          'relentless learner.',
          'builder.',
          'I 💗 simple UIs.', 
          '...and Cortados! ☕'],
      loop: true,
      delaySpeed: 2000,
    });

  return (
    <section id="hero" className={styles.hero_container}>
      <BackgroundCircles />
      <div className={styles.hero_image}>
      <Image 
        src={profilePic}
        alt='photo of Titus Coleman - Software Engineer / web3 Developer'
        width={200}
        height={200}/>
        </div>
      <div className={styles.heroInfo}>
        <h1>Titus Coleman</h1>
      <h2 className={styles.hero_h2}>{pageInfo.role}</h2>
      <h3>
        <span>{text}</span>
        <Cursor cursorColor='#E4572E'/>
      </h3>
      <div>
        <Link href="#skills"
              className={styles.hero_button}>
          Skills
        </Link>
        <Link href="#projects"
              className={styles.hero_button}>
          Projects
        </Link>
        <Link href="#about"
              className={styles.hero_button}>
          About
        </Link>
        <Link href="#contact"
              className={styles.hero_button}>
          Contact
        </Link>
      </div>
      </div>
      <svg className={styles.arrows}>
							<path className={styles.a1} d="M0 0 L30 32 L60 0"></path>
							<path className={styles.a2} d="M0 20 L30 52 L60 20"></path>
							<path className={styles.a3} d="M0 40 L30 72 L60 40"></path>
						</svg>
    </section>
  )
}

export default Hero