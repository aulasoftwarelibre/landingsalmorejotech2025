import styles from "./Header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import logo from "../../sprites/logo.svg"


export default function Header() {

    function handleClick2() {
        window.location.href = "https://es.lipsum.com/";
      }

    return (
        <>
            <div className={`${styles.headerContainer}`}>
                <div className={styles.logoContainer}>
                    <img src={logo} className={`${styles.logo} img-fluid`} alt="logo" />
                </div>
                <div className="pt-4">
                    <h1 className={`${styles.logoContainer}`}>
                        <FontAwesomeIcon icon={faCalendar} className={`${styles.calendar}`} />
                        9 DE MAYO
                    </h1>
                    <h1 className={`${styles.logoContainer}`}>
                        VUELVE CON MÁS FUERZA QUE NUNCA EL GRAN EVENTO TECNOLÓGICO CORDOBÉS
                    </h1>
                </div>
                <div className="pt-4">
                    <p className={`${styles.logoContainer}`}>
                    <button className={`${styles.buttonInicio}`} onClick={handleClick2} >Call4Papers</button>
                    </p>
                </div>

            </div>
        </>
    );
}
