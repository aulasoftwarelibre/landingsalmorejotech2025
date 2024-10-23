import styles from "./Header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import logo from "../../sprites/logo.svg"
import trigo from "../../sprites/trigo.svg"
import penguin from "../../sprites/penguin.svg"
import ajo from "../../sprites/ajo.svg"
import tomato from "../../sprites/tomato.svg"
import wifi from "../../sprites/wifi.svg"


export default function Header() {
    return (
        <>
            <div className="row">
                <div className="col-4">
                    <div className={`${styles.tomato}`}>
                        <img src={tomato} className={`${styles.tomato}`} alt="tomato" />
                    </div>
                </div>
                <div className="col-5"></div>
                <div className="col-3">
                    <div className={`${styles.wifi}`}>
                        <img src={wifi} className={`${styles.wifi}`} alt="wifi" />
                    </div>
                </div>
            </div>
            <div className={`${styles.headerContainer}`}>
                <div className={styles.logoContainer}>
                    <img src={logo} className={`${styles.logo} img-fluid`} alt="logo" />
                </div>
                <div className="pt-4">
                    <h1 className={`${styles.logoContainer}`}>
                        <FontAwesomeIcon icon={faCalendar} className={`${styles.calendar}`} />
                        9 DE MAYO
                    </h1>

                    <div className="row">
                        <div className="col-xxl-1 col-md-2 col-3"></div>
                        <div className="col-xxl-10 col-md-8 col-6">
                            <p className={`${styles.logoContainer}`}>
                                VUELVE CON MÁS FUERZA QUE NUNCA EL GRAN EVENTO TECNOLÓGICO CORDOBÉS
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    <p className={`${styles.logoContainer}`}>
                        <button>Call4Paper</button>
                    </p>
                </div>
                <h1 className="row">
                    <h1 className="col-3">
                        <div className={`${styles.trigo}`}>
                            <img src={trigo} className="img-fluid" alt="trigo" />
                        </div>
                    </h1>
                    <h1 className="col-3">
                        <div className={`${styles.penguin}`}>
                            <img src={penguin} className={`${styles.penguin}`} alt="penguin" />
                        </div>
                    </h1>
                    <h1 className="col-3"></h1>
                    <h1 className="col-3">
                        <div className={`${styles.ajo}`}>
                            <img src={ajo} className={`${styles.ajo}`} alt="ajo" />
                        </div>
                    </h1>
                </h1>
            </div>
        </>
    );
}
