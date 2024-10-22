import styles from "./Header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import logo from "../../sprites/logo.svg"
import trigo from "../../sprites/trigo.svg"


export default function Header() {
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
                    <h1 className="row">
                        <h1 className="col-1"></h1>
                        <h1 className="col-10">
                            <h1 className={`${styles.logoContainer}`}>
                                VUELVE CON MÁS FUERZA QUE NUNCA EL GRAN EVENTO TECNOLÓGICO CORDOBÉS
                            </h1>
                        </h1>
                        <h1 className="col-1"></h1>
                    </h1>
                </div>
                <div className="pt-4">
                    <p className={`${styles.logoContainer}`}>
                        <button>Call4Paper</button>
                    </p>
                </div>
                <div className={`${styles.trigo}`}>
                    <h1 className="col-3">
                        <img src={trigo} className="img-fluid" alt="trigo" />
                    </h1>
                </div>
            </div>
        </>
    );
}
