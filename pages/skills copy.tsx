import Image from 'next/image'
import React from 'react'
import styles from '../styles/SkillsHex.module.css'

function Skills() {
  return (
    <section className={styles.hex_container}>
        <h3 className={styles.skillsTitle}>Skillset</h3>
      <ul id={styles.grid} className={styles.clear}>
        <li>
            <div className={styles.hexagon}>
                <div className={styles.img__container}> 
                    <Image
                        className={styles.imageDiv1}
                        src={"/typescript-icon.svg"}
                        alt="Typescript Programming Language"
                        fill
                    />
                    <div className={styles.overlay}>
                       <h4 className={styles.text}>Typescript</h4> 
                    </div>
                </div>
            </div>
        </li>
        <li>
        <div className={styles.hexagon}>
                <div className={styles.img__container}> 
                    <Image
                        className={styles.imageDiv2}
                        src={"/javascript.svg"}
                        alt="Javascript Programming Language"
                        fill
                    />
                    <div className={styles.overlay}>
                       <h4 className={styles.text}>Javascript</h4> 
                    </div>
                </div>
            </div>
        </li>
        <li>
        <div className={styles.hexagon}>
                <div className={styles.img__container}> 
                    <Image
                        className={styles.imageDiv}
                        src={"/rust.svg"}
                        alt="Rust Programming Language"
                        fill
                    />
                    <div className={styles.overlay}>
                       <h4 className={styles.text}>Rust</h4> 
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className={styles.hexagon}>
                <div className={styles.img__container}> 
                        <Image
                            className={styles.imageDiv0}
                            src={"/react.svg"}
                            alt="React Library"
                            fill
                        />
                    <div className={styles.overlay}>
                        <h4 className={styles.text}>React Library</h4> 
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className={styles.hexagon}>
                <div className={styles.img__container}> 
                        <Image
                            className={styles.imageDiv3}
                            src={"/nextjs-icon.svg"}
                            alt="Next.js Library"
                            fill
                        />
                    <div className={styles.overlay}>
                        <h4 className={styles.text}>Next.js Framework</h4> 
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className={styles.hexagon}>
                <div className={styles.img__container}> 
                        <Image
                            className={styles.imageDiv4}
                            src={"/nodejs-icon.svg"}
                            alt="Node js"
                            fill
                        />
                    <div className={styles.overlay}>
                        <h4 className={styles.text}>Node js</h4> 
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className={styles.hexagon}>
                <div className={styles.img__container}> 
                        <Image
                            className={styles.imageDiv}
                            src={"/tailwindcss-icon.svg"}
                            alt="Tailwind CSS"
                            fill
                        />
                    <div className={styles.overlay}>
                        <h4 className={styles.text}>Tailwind CSS</h4> 
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className={styles.hexagon}>
                <div className={styles.img__container}> 
                        <Image
                            className={styles.imageDiv}
                            src={"/supabase-icon.svg"}
                            alt="Supabase BaaS"
                            fill
                        />
                    <div className={styles.overlay}>
                        <h4 className={styles.text}>Supabase BaaS</h4> 
                    </div>
                </div>
            </div>
        </li>
        {/* <li>
            <div className={styles.hexagon}>
                <div className={styles.img__container}> 
                        <Image
                            className={styles.imageDiv}
                            src={"/sass.svg"}
                            alt="Sass"
                            fill
                        />
                    <div className={styles.overlay}>
                        <h4 className={styles.text}>Sass</h4> 
                    </div>
                </div>
            </div>
        </li> */}
        <li>
            <div className={styles.hexagon}>
                    <div className={styles.img__container}> 
                        <Image
                            className={styles.imageDiv}
                            src={"/socket.io.svg"}
                            alt="Socket.io"
                            fill
                        />
                    <div className={styles.overlay}>
                        <h4 className={styles.text}>Socket.io WebSocket Library</h4> 
                    </div>
                </div>
            </div>
        </li>
        {/* <li>
            <div className={styles.hexagon}>
                <div className={styles.img__container}> 
                        <Image
                            className={styles.imageDiv}
                            src={"/aws.svg"}
                            alt="AWS S3"
                            fill
                        />
                    <div className={styles.overlay}>
                        <h4 className={styles.text}>AWS S3</h4> 
                    </div>
                </div>
            </div>
        </li> */}
        <li>
            <div className={styles.hexagon}>
                <div className={styles.img__container}> 
                        <Image
                            className={styles.imageDiv5}
                            src={"/postgresql.svg"}
                            alt="Postgres Database"
                            fill
                        />
                    <div className={styles.overlay}>
                        <h4 className={styles.text}>Postgres Database</h4> 
                    </div>
                </div>
            </div>
        </li>
        {/* <li>
            <div className={styles.hexagon}>
                <div className={styles.img__container}> 
                        <Image
                            className={styles.imageDiv6}
                            src={"/solana.svg"}
                            alt="Solana Blockchain"
                            fill
                        />
                    <div className={styles.overlay}>
                        <h4 className={styles.text}>Solana Blockchain</h4> 
                    </div>
                </div>
            </div>
        </li> */}
        {/* <li>
            <div className={styles.hexagon}>
                <div className={styles.img__container}> 
                        <Image
                            className={styles.imageDiv}
                            src={"/xrp-svgrepo-com.svg"}
                            alt="XRP Blockchain (Ripple)"
                            fill
                        />
                    <div className={styles.overlay}>
                        <h4 className={styles.text}>XRP Blockchain (Ripple)</h4> 
                    </div>
                </div>
            </div>
        </li> */}
        <li>
            <div className={styles.hexagon}>
                <div className={styles.img__container}> 
                        <Image
                            className={styles.imageDiv5}
                            src={"/prisma.svg"}
                            alt="Primsa ORM"
                            fill
                        />
                    <div className={styles.overlay}>
                        <h4 className={styles.text}>Prisma ORM</h4> 
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className={styles.hexagon}>
                <div className={styles.img__container}> 
                        <Image
                            className={styles.imageDiv5}
                            src={"/css-3.svg"}
                            alt="CSS"
                            fill
                        />
                    <div className={styles.overlay}>
                        <h4 className={styles.text}>CSS</h4> 
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className={styles.hexagon}>
                <div className={styles.img__container}> 
                        <Image
                            className={styles.imageDiv5}
                            src={"/html-5.svg"}
                            alt="HTML"
                            fill
                        />
                    <div className={styles.overlay}>
                        <h4 className={styles.text}>HTML</h4> 
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className={styles.hexagon}>
                <div className={styles.img__container}> 
                        <Image
                            className={styles.imageDiv0}
                            src={"/trpc.svg"}
                            alt="tRPC"
                            fill
                        />
                    <div className={styles.overlay}>
                        <h4 className={styles.text}>tRPC</h4> 
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className={styles.hexagon}>
                <div className={styles.img__container}> 
                        <Image
                            className={styles.imageDivGit}
                            src={"/git-icon.svg"}
                            alt="git"
                            fill
                        />
                    <div className={styles.overlay}>
                        <h4 className={styles.text}>git</h4> 
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className={styles.hexagon}>
                <div className={styles.img__container}> 
                        <Image
                            className={styles.imageDiv5}
                            src={"/firebase.svg"}
                            alt="Firebase"
                            fill
                        />
                    <div className={styles.overlay}>
                        <h4 className={styles.text}>Firebase</h4> 
                    </div>
                </div>
            </div>
        </li>
      </ul>
    </section>
  )
}

export default Skills   