import Navbar from "../../components/Navbar/Navbar";
import styles from "./call4paper.module.css";
import { supabase } from "../../supabase/server";

export default function Call4Paper() {

    const handleUpdate = async(e: any) => {
        e.preventDefault();

        const { data, error } = await supabase
            .from('call4paper')
            .select()

        if(error){
            console.log("Data not displayed correctly", error);
        }else{
            console.log("Data displayed correctly", data);
        }
        

    }



    return (
        <>
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
                <input type="text" name="title" placeholder="Título" className={`${styles.inputForm}`} />
                <select name="activityType" className={`${styles.inputForm}`}>
                    <option value="charla">Charla ~ 35 min</option>
                    <option value="keynote">Keynote ~ 1 hora</option>
                </select>
                <select name="difficulty" className={`${styles.inputForm}`}>
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                </select>
                <textarea name="descripcion" placeholder="Descripción de la Actividad" className={`${styles.inputFormArea}`}></textarea>
                <select name="tags" className={`${styles.inputForm}`}>
                    <option value="general">General</option>
                    <option value="data">Data</option>
                    <option value="devops">DevOps</option>
                    <option value="frontend">Frontend</option>
                    <option value="ia">IA</option>
                    <option value="backend">Backend</option>
                    <option value="ciberseguridad">Ciberseguridad</option>
                    <option value="career">Career</option>
                    <option value="ux_ui">UX/UI</option>
                </select>
                <label className={`${styles.inputCheckbox}`}>
                    <input type="checkbox" name="recordingAllowed" />
                    Grabación Autorizada
                </label>
                <textarea name="comments" placeholder="Comentarios (opcional)" className={`${styles.inputFormArea}`}></textarea>
                
                <p className={`${styles.formText}`}>SOBRE EL PONENTE...</p>
                <input type="text" name="firstName" placeholder="Nombre" className={`${styles.inputForm}`} />
                <input type="text" name="lastName" placeholder="Apellidos" className={`${styles.inputForm}`} />
                <input type="email" name="email" placeholder="Mail" className={`${styles.inputForm}`} />
                <textarea name="bio" placeholder="Una pequeña bio (90 caracteres)" className={`${styles.inputFormArea}`}></textarea>
                <input type="text" name="pronouns" placeholder="Pronombres" className={`${styles.inputForm}`} />
                <input type="text" name="nickname" placeholder="Nick/Alias" className={`${styles.inputForm}`} />
                <textarea name="notes" placeholder="¿Algo que debamos tener en cuenta? (comida, intolerancias, etc.)" className={`${styles.inputFormArea}`}></textarea>
                <input type="file" name="photo" className={`${styles.inputForm}`} />
                <textarea name="experience" placeholder="Experiencia Previa en Actividades del Estilo" className={`${styles.inputFormArea}`}></textarea>
                <input type="text" name="socialMediaLinks" placeholder="Enlaces a RRSS" className={`${styles.inputForm}`} />
                <input type="text" name="residence" placeholder="Municipio de Residencia Habitual" className={`${styles.inputForm}`} />
                <input type="text" name="company" placeholder="Empresa de trabajo (y posibilidad de patrocinio)" className={`${styles.inputForm}`} />
                <div className={`${styles.centerButton}`} >
                <button className={`${styles.submitButton}`} onClick={handleUpdate}>Enviar</button>
                </div>
            </div>
        </>
    );
}
