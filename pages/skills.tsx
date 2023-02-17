import Image from 'next/image';
import React from 'react';
import styles from '../styles/SkillsHex.module.css';
import { Skill } from '../typings';

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <>
      <hr id="skills" className={styles.hr} />
      <section className={styles.hex_container}>
        <h3 className={styles.skillsTitle}>Skillset</h3>
        <ul id={styles.grid} className={styles.clear}>
          {skills?.map((skill, i) => (
            <li key={i}>
              <div className={styles.hexagon}>
                <div className={styles.img__container}>
                  <Image
                    className={styles.imageDiv}
                    src={skill.image.secure_url}
                    alt={skill.title}
                    fill
                  />
                  <div className={styles.overlay}>
                    <h4 className={styles.text}>{skill.title}</h4>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Skills;
