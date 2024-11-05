import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./call4paper.module.css";
import { supabase } from "../../supabase/server";

export default function Call4Paper() {
    const [formData, setFormData] = useState({
        title: '',
        activityType: 'charla',
        difficulty: 'baja',
        descripcion: '',
        tags: 'general',
        recordingAllowed: false,
        comments: '',
        firstName: '',
        lastName: '',
        email: '',
        bio: '',
        pronouns: '',
        nickname: '',
        notes: '',
        photo: '',
        experience: '',
        socialMediaLinks: '',
        residence: '',
        company: ''
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleInsert = async (e: any) => {
        e.preventDefault();
        
        if (!formData.title) { alert("Por favor, indique el titulo"); return; }
        if (!formData.descripcion) { alert("Por favor, rellena la descripción"); return; }
        if (!formData.firstName) { alert("Por favor, ponga su nombre"); return; }
        if (!formData.lastName) { alert("Por favor, ponga su apellido"); return; }
        if (!formData.email) { alert("Por favor, indique su correo electrónico"); return; }
        if (!formData.bio) { alert("Por favor, rellene la bio"); return; }
        if (!formData.nickname) { alert("Por favor, rellena el nickname"); return; }
        if (!formData.residence) { alert("Por favor, indique su residencia"); return; }

        const { data, error } = await supabase
            .from('call4paper')
            .insert([formData]);

        if (error) {
            console.log("Data not inserted correctly", error);
        } else {
            console.log("Data inserted correctly", data);
        }

        
    };

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
            <form className={`${styles.form}`} onSubmit={handleInsert}>
                <p className={`${styles.formText}`}>SOBRE LA ACTIVIDAD...</p>
                <input type="text" name="title" placeholder="Título" className={`${styles.inputForm}`} onChange={handleChange} value={formData.title} />
                <select name="activityType" className={`${styles.inputForm}`} onChange={handleChange} value={formData.activityType}>
                    <option value="charla">Charla ~ 35 min</option>
                    <option value="keynote">Keynote ~ 1 hora</option>
                </select>
                <select name="difficulty" className={`${styles.inputForm}`} onChange={handleChange} value={formData.difficulty}>
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                </select>
                <textarea name="descripcion" placeholder="Descripción de la Actividad" className={`${styles.inputFormArea}`} onChange={handleChange} value={formData.descripcion}></textarea>
                <select name="tags" className={`${styles.inputForm}`} onChange={handleChange} value={formData.tags}>
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
                    <input type="checkbox" name="recordingAllowed" onChange={handleChange} checked={formData.recordingAllowed} />
                    Grabación Autorizada
                </label>
                <textarea name="comments" placeholder="Comentarios (opcional)" className={`${styles.inputFormArea}`} onChange={handleChange} value={formData.comments}></textarea>

                <p className={`${styles.formText}`}>SOBRE EL PONENTE...</p>
                <input type="text" name="firstName" placeholder="Nombre" className={`${styles.inputForm}`} onChange={handleChange} value={formData.firstName} />
                <input type="text" name="lastName" placeholder="Apellidos" className={`${styles.inputForm}`} onChange={handleChange} value={formData.lastName} />
                <input type="email" name="email" placeholder="Mail" className={`${styles.inputForm}`} onChange={handleChange} value={formData.email} />
                <textarea name="bio" placeholder="Una pequeña bio (90 caracteres)" className={`${styles.inputFormArea}`} onChange={handleChange} value={formData.bio}></textarea>
                <input type="text" name="pronouns" placeholder="Pronombres" className={`${styles.inputForm}`} onChange={handleChange} value={formData.pronouns} />
                <input type="text" name="nickname" placeholder="Nick/Alias" className={`${styles.inputForm}`} onChange={handleChange} value={formData.nickname} />
                <textarea name="notes" placeholder="¿Algo que debamos tener en cuenta? (comida, intolerancias, etc.)" className={`${styles.inputFormArea}`} onChange={handleChange} value={formData.notes}></textarea>
                <input type="file" name="photo" className={`${styles.inputForm}`} onChange={handleChange} value={formData.photo} />
                <textarea name="experience" placeholder="Experiencia Previa en Actividades del Estilo" className={`${styles.inputFormArea}`} onChange={handleChange} value={formData.experience}></textarea>
                <input type="text" name="socialMediaLinks" placeholder="Enlaces a RRSS" className={`${styles.inputForm}`} onChange={handleChange} value={formData.socialMediaLinks} />
                <input type="text" name="residence" placeholder="Municipio de Residencia Habitual" className={`${styles.inputForm}`} onChange={handleChange} value={formData.residence} />
                <input type="text" name="company" placeholder="Empresa de trabajo (y posibilidad de patrocinio)" className={`${styles.inputForm}`} onChange={handleChange} value={formData.company} />
                <div className={`${styles.centerButton}`}>
                    <button type="submit" className={`${styles.submitButton}`}>Enviar</button>
                </div>
            </form>
        </>
    );
}
