import Image from 'next/image'
import React from 'react'
import styles from '../styles/SkillsCard.module.css'

type Props = {}

function SkillsCard({}: Props) {
  return (
    <div className={styles.skillCard}>
        <div>
            <Image/>
        </div>
        
    </div>
  )
}

export default SkillsCard
