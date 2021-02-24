import styles from "../styles/components/HeaderLanding.module.css";

export function HeaderLanding() {
  return (
    <header>
      <nav className={styles.navbar}>

        <div>
          <img src="logo-full-white.svg" alt="Move.it" />
        </div>

        <div>
          <ul className={styles.navList}>
            <li>
              <a href="" className={styles.navLink}>
                Inicio
              </a>
            </li>
            <li>
              <a href="" className={styles.navLink}>
                Dicas
              </a>
            </li>
            <li>
              <a href="" className={styles.navLink}>
                Sobre
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
