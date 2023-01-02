import React from 'react'
import styles from '../styles/SkillsHex.module.css'

function Skills() {
  return (
    <section className={styles.hex_container}>
      <ul id="grid" className={styles.clear}>
        <li>
            <div className={styles.hexagon}></div>
        </li>
        <li>
            <div className={styles.hexagon}></div>
        </li>
        <li>
            <div className={styles.hexagon}></div>
        </li>
        <li>
            <div className={styles.hexagon}></div>
        </li>
        <li>
            <div className={styles.hexagon}></div>
        </li>
        <li>
            <div className={styles.hexagon}></div>
        </li>
        <li>
            <div className={styles.hexagon}></div>
        </li>
        <li>
            <div className={styles.hexagon}></div>
        </li>
        <li>
            <div className={styles.hexagon}></div>
        </li>
        <li>
            <div className={styles.hexagon}></div>
        </li>
        <li>
            <div className={styles.hexagon}></div>
        </li>
        <li>
            <div className={styles.hexagon}></div>
        </li>
      </ul>
    </section>
  )
}

export default Skills   