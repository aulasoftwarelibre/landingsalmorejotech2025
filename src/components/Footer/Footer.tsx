import styles from "./Footer.module.css";
import logo from "../../sprites/logoAula.png";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className="row container">
        <div className="col-md-6 col-sm-12 mt-5">
          <div className="row py- justify-content-center">
            <div className="col-4">
              <div className={`${styles.title}`}>
                Organiza:
              </div>
              <img src={logo} className={`img-fluid ${styles.logo}`} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
