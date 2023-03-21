import Image from 'next/image';
import styles from '../styles/Projects.module.css';
import { Project } from '../typings';
import { motion } from 'framer-motion';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <>
      <hr id="projects" className={styles.hr} />
      <section className={styles.projects_container}>
        <h3 className={styles.projects_title}>Projects</h3>
        <div className={styles.swipeIcons}>
          <RxDoubleArrowLeft />
          <p>swipe</p>
          <RxDoubleArrowRight />
        </div>
        <div className={styles.slideshow}>
          <div
            className={styles.slide__container}
            // whileTap={{ cursor: 'grabbing' }}
          >
            <div
              // drag="x"
              // dragConstraints={{ right: 400, left: -400 }}
              className={styles.card__wrapper}
            >
              {projects?.map((pCard, i) => (
                <div key={i} className={styles.card}>
                  <header className={styles.card__header}>
                    <h5>
                      {i + 1} of {projects.length}
                    </h5>
                    <h4 className={styles.card__name}>{pCard?.title}</h4>
                  </header>
                  <picture className={styles.image__content}>
                    <span className={styles.overlay}></span>
                    <div className={styles.card__image}>
                      <img
                        className={styles.card__img}
                        src={pCard.image.secure_url}
                        alt={''}
                        width={320}
                        height={200}
                      />
                    </div>
                  </picture>
                  <div className={styles.card__content}>
                    <p className={styles.card__description}>{pCard?.summary}</p>
                    <div className={styles.card__techstack}>
                      {pCard?.technologies?.map((tech) => (
                        <span key={tech?._id} className={styles.card__tag}>
                          {tech?.title}
                        </span>
                      ))}
                    </div>

                    <footer className={styles.card__links}>
                      <a href={pCard.linkToSite} target={'_blank'} rel="noreferrer">
                        <img
                          className={styles.card__site}
                          src={'/live-svgrepo-com.svg'}
                          alt="Live Website Link"
                          width={35}
                          height={35}
                        />
                      </a>
                      <a href={pCard.linkToGitHub} target={'_blank'} rel="noreferrer">
                        <img
                          className={styles.card__git}
                          src={'/github-icon.svg'}
                          alt="Project Github Link"
                          width={35}
                          height={35}
                        />
                      </a>
                    </footer>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.swipeIcons}>
            <RxDoubleArrowLeft />
            <p>swipe</p>
            <RxDoubleArrowRight />
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
