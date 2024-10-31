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
                <option value="charla">Charla ~ 35 min</option>
                <option value="keynote">Keynote ~ 1 hora</option>
            </select>
            <select name="difficulty" className={`${styles.inputForm}`}>
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
            </select>
            <textarea name="descripcion" placeholder="Descripción de la Actividad" className={`${styles.inputFormArea}`}>
            </textarea>
            <select name="difficulty" className={`${styles.inputForm}`}>
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
            </select>
            
        </div>
    </>
}
