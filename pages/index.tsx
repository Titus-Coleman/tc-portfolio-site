import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from './hero'
import About from './about'
import Skills from './skills'
import Projects from './projects'
import ContactMe from './contactMe'
import { GetStaticProps } from 'next'
import { Skill, PageInfo, Project } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { EmblaOptionsType } from 'embla-carousel-react'

const inter = Inter({ subsets: ['latin'] })
const OPTIONS: EmblaOptionsType = { loop: true }

type Props = {
    pageInfo: PageInfo;
    skills: Skill[];
    projects: Project[];
}
 
export default function Home({pageInfo, skills, projects}: Props) {
  return (
    <>
      <Head>
        <title>[ .portfolio ] by Titus Coleman</title>
        <meta name="description" 
          content=" The portfolio site of Titus Coleman - Software Engineer / Developer. 
          Experienced in full-stack web development as well as web3 / crypto (Ripple/XRP & Solana), Titus offers
          a perspective on simplifying the web and mobile experience to bring the maximum amount of users
          to projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <main className={styles.main}>
          <Hero pageInfo={pageInfo}/>
        
      
      
      <Skills skills={skills}/>
      <Projects projects={projects} options={OPTIONS}/>
      <About />
      <ContactMe />
      
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      pageInfo,
      skills,
      projects,
    },
    revalidate: 10,
  };
};