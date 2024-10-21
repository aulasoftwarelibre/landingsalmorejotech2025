import styles from "./Footer.module.css";
import logo from "../../sprites/logoAula.png"; // Importing the logo image

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.title}>
          Organiza:
        </div>
        <div className="row">
          <div className="col">
            <img src={logo} className={styles.logo} alt="Aula Software Libre" />
          </div>
          <div className="col">

          </div>
        </div>
      </div>
    </footer>
  );
}
