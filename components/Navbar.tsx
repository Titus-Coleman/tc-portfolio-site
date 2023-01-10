import Image from 'next/image'
import React from 'react'
import styles from '../styles/Navbar.module.css'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Navbar() {
  return (
    <nav className={styles.navbar}>
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
            <Link href={"/example.pdf"} target={"_blank"}>
            <button className={styles.resume_btn}>
                resume    
            </button>
            </Link>
                 
        </motion.div>

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
            {/* <SocialIcon 
                url='https://www.linkedin.com/in/tituscoleman/' 
                target={"_blank"}
                fgColor="gray"
                bgColor="transparent"/> */}
        
        </motion.div>

    </nav>
  )
}

export default Navbar