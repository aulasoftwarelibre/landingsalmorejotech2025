import Navbar from "../../components/Navbar/Navbar"
import styles from "./call4paper.module.css"

export default function Call4Paper() {
    return <>
        <Navbar />
        <div>
            <p className={`${styles.mainText}`}>
                ¿QUIERES SER PONENTE?
            </p>
            <p className={`${styles.secondaryText}`}>
                Rellena este formulario para poder optar a cumplirlo con nosotr@s
            </p>
        </div>
        <div className={`${styles.form}`}>
            <p className={`${styles.formText}`}>SOBRE LA ACTIVIDAD...</p>
            <input type="text" name="title" placeholder="Título" className={`${styles.inputForm}`}/>
            <select name="activityType" className={`${styles.inputForm}`}>
                <option value="tenis">Charla ~ 35 min</option>
                <option value="futbol">Keynote ~ 1 hora</option>
            </select>
        </div>
    </>
}
