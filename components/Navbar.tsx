import Image from 'next/image'
import React from 'react'
import styles from '../styles/Navbar.module.css'
import { SocialIcon } from 'react-social-icons'

function Navbar() {
  return (
    <nav className={styles.navbar}>
        {/* <Image
            className='logo'
            src={''}
            alt={''} /> */}
        <div className="logo">Titus Coleman</div>
        <div className={styles.navlist}>
            <a href="">About</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
        </div>
        <div className={styles.resume_btn}>
            <p>Resume</p>
        </div>
        <div className={styles.socials}>
            <SocialIcon url='https://github.com/Titus-Coleman' target={"_blank"}/>
            <SocialIcon url='https://linkedin.com' target={"_blank"}/>
            <SocialIcon url='https://twitter.com' target={"_blank"}/>
        </div>

    </nav>
  )
}

export default Navbar