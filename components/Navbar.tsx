import Image from 'next/image'
import React from 'react'
import styles from '../styles/Navbar.module.css'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Navbar() {
  return (
    <nav className={styles.navbar}>
        {/* <Image
            className='logo'
            src={''}
            alt={''} /> */}
        {/* <div className="logo">Titus Coleman</div> */}
        <motion.div 
            className={styles.email}
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x:0,
                opacity: 1,
                scale: 1
            }}
            transition={{ duration: 1.0 }}
            >
            <button className={styles.resume_btn}>
                resume    
            </button>
                 
        </motion.div>
        {/* <div className={styles.navlist}>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#about">About</Link>
        </div> */}

        <motion.div 
            className={styles.socials}
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x:0,
                opacity: 1,
                scale: 1
            }}
            transition={{ duration: 1.0 }}>
            <SocialIcon 
                    url='#contact'
                    network='email' 
                    fgColor="gray"
                    bgColor="transparent"/>
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
        
        </motion.div>

    </nav>
  )
}

export default Navbar