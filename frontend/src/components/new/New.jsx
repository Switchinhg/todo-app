import { toast } from "sonner";
import Back from "../Back/Back";
import styles from './styles.module.css';
import { useNavigate } from "react-router";

export default function New() {
    let navigate = useNavigate();

    const handleSubmit = async (e) => {   
        e.preventDefault();
        if(!e.target.title.value || !e.target.description.value){
            toast.error('Por favor rellene todos los campos',{duration: 2000});
            return;
        }
        const title = e.target.title.value;
        const description = e.target.description.value;

        const response = await fetch(import.meta.env.VITE_URL || 'http://localhost:3000/api/notas',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description
            })
        })
        const data = await response.json()
        if(data.ok){
            toast.success('Nota creada correctamente',{duration: 1000});
            setTimeout(() => {
                navigate("/")
            }, 1000);
        }
    }
    
  return (
    <div>
        <Back />
        <div className={`container`}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={`${styles.formGroup}`}>
                    <label htmlFor="title">Titulo</label>
                    <input type="text" id="title"  />
                </div>
                <div className={`${styles.formGroup}`}>
                    <label htmlFor="description">Descripción</label>
                    <textarea id="description" rows="10" ></textarea>
                </div>
                <button type="submit" className={`btn`}>Guardar</button>
            </form>
        </div>
    </div>
  )
}
