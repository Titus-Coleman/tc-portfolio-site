import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';

function footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.source}>
        <a
          className={styles.link}
          href={'https://github.com/Titus-Coleman/tc-portfolio-site'}
          target="_blank"
          rel="noreferrer"
        >
          Source Code
        </a>
        <Image
          src={'/github-icon.svg'}
          alt={'Link to website source code'}
          width={20}
          height={20}
        />
      </div>
    </footer>
  );
}

export default footer;
