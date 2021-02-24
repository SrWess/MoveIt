import styles from '../styles/components/BgLoader.module.css'

export function BgLoader() {
  return (
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
  );
}
