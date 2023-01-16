import Image from 'next/image';
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from '../components/BackgroundCircles';
import styles  from '../styles/Hero.module.css'
import profilePic from '../public/serge-template.jpeg'
import Link from 'next/link';
import { PageInfo } from '../typings';


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
      <div className={styles.heroMain}>
      <div className={styles.hero_image}>
      <Image
        src={pageInfo.heroImage.secure_url}
        alt='photo of Titus Coleman - Software Engineer / web3 Developer'
        width={400}
        height={400}/>
        </div>
        <h1 className={styles.hero_h1}>Titus Coleman</h1>
        </div>
      <div className={styles.heroInfo}>
        
      <h2 className={styles.hero_h2}>{pageInfo.role}</h2>
      <h3 className={styles.hero_h3}>
        <span>{text}</span>
        <Cursor cursorColor='#E4572E'/>
      </h3>
      <div className={styles.hero_btn_group}>
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
      <p className={styles.scroll__text}>Scroll for more</p>
      <Link 
        href="#skills"
        className={styles.arrows}>
      <svg>
							<path className={styles.a1} d="M0 0 L30 32 L60 0"></path>
							<path className={styles.a2} d="M0 20 L30 52 L60 20"></path>
							<path className={styles.a3} d="M0 40 L30 72 L60 40"></path>
						</svg>
      </Link>
    </section>
  )
}

export default Hero