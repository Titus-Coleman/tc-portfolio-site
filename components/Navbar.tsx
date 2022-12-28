import Image from 'next/image'
import React from 'react'
import styles from '../styles/Navbar.module.css'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className={styles.navbar}>
        {/* <Image
            className='logo'
            src={''}
            alt={''} /> */}
        {/* <div className="logo">Titus Coleman</div> */}
        <div className={styles.email}>
            <SocialIcon 
                network='email' 
                fgColor="gray"
                bgColor="transparent"/> 
            <p>Get In Touch</p>
        </div>
        {/* <div className={styles.navlist}>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#about">About</Link>
        </div> */}
        <div className={styles.resume_btn}>
            <p>Resume</p>
        </div>
        <div className={styles.socials}>
        
            <SocialIcon 
                url='https://github.com/Titus-Coleman' 
                target={"_blank"}
                fgColor="gray"
                bgColor="transparent"/>
            <SocialIcon 
                url='https://linkedin.com' 
                target={"_blank"}
                fgColor="gray"
                bgColor="transparent"/>
            <SocialIcon 
                url='https://twitter.com' 
                target={"_blank"}
                fgColor="gray"
                bgColor="transparent"/>
        </div>

    </nav>
  )
}

export default Navbar