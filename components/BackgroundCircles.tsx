import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/BackgroundCircles.module.css'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div className={styles.circle_container}>
        <div className={styles.circle5}/>
        <div className={styles.circle4}/>
        <div className={styles.circle3}/>
        {/* <div className={styles.circle2}/>
        <div className={styles.circle1}/> */}
    </div>
  )
}

export default BackgroundCircles