import Image from 'next/image';
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from '../components/BackgroundCircles';
import styles  from '../styles/Hero.module.css'
import profilePic from '../public/serge-template.jpeg'


type Props = {};

function Hero({}: Props) {
    const [text, count] = useTypewriter({
      words: [
          '👋 I\'m Titus Coleman',
          'web3 native.',
          'I love 💗 simple UIs', 
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
        alt='photo of Titus Coleman'
        width={200}
        height={200}/>
        </div>
      <h2 className={styles.hero_h2}>Software Engineer</h2>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#E4572E'/>
      </h1>
      <div>
        <button className={styles.hero_button}>Skills</button>
        <button className={styles.hero_button}>Projects</button>
        <button className={styles.hero_button}>About</button>
        <button className={styles.hero_button}>Contact</button>
        {/* <button className={styles.hero_button}>Experience</button> */}
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