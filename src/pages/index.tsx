import Head from "next/head";
import { HeaderLanding } from "../components/HeaderLanding";

import Tilt from "react-tilt";
import { motion } from "framer-motion"

import styles from "../styles/pages/LandingPage.module.css";

export default function LandingPage() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };


  return (
    <div>
      <Head>
        <title>Move.it</title>
      </Head>

      <HeaderLanding />

      <section className={styles.bgLoader}>
        <svg
          width="66"
          height="56"
          viewBox="0 0 66 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={styles.logoMoveit}
            d="M19.1843 55.5L30.8637 1.26758H44.1388L32.4594 55.5H19.1843Z"
            stroke="white"
          />
          <path
            className={styles.logoMoveit}
            d="M42.7872 43.5434L51.844 1.26758H65.1194L56.0659 43.5434H42.7872Z"
            stroke="white"
          />
          <path
            className={styles.logoMoveit}
            d="M0.61846 43.5434L9.67528 1.26758H22.9508L13.8973 43.5434H0.61846Z"
            stroke="white"
          />
        </svg>
      </section>

      <section className={styles.bgVideo}>
        <video className="video" autoPlay muted loop>
          <source src="video/exercise.mp4" type="video/mp4" />
        </video>
      </section>

      <div className={styles.landingContainer}>
        <motion.div className={styles.containerLeft} variants={container} initial="hidden" animate="visible">
          <h1>Vamos se movimentar?!</h1>

          <p>
            Nosso objetivo é ajudar pessoas que ficam longos períodos na frente
            do computador e se esquecem de movimentar-se
          </p>

          <motion.div variants={item}  className={styles.links}>
            <a href="#" className={styles.linkPrimary}>
              Iniciar jornada
              <img src="icons/arrow-btn.svg" alt="" />
            </a>
            <a href="#" className={styles.linkSecondary}>
              Sobre o Move.it
            </a>
          </motion.div>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="visible" className={styles.containerRight}>
          <Tilt
            className="Tilt"
            options={{ max: 25, perspective: 2000, scale: 1.05 }}
          >
            <img src="logo-landing.svg" alt="Logo move.it" />
          </Tilt>
        </motion.div>
      </div>
    </div>
  );
}
