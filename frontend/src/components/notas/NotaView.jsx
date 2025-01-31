
import { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router';
import Back from '../Back/Back';
import styles from './style.module.css';
import { toast } from 'sonner';

export default function NotaView() {
    let {id} = useParams();
    let navigate = useNavigate();
    const [nota, setNota] = useState({});

    const getNota = async () =>{
        const response = await fetch(import.meta.env.VITE_URL? import.meta.env.VITE_URL + "/" + id : `http://localhost:3000/api/notas/${id}`);
        const data = await response.json();
        if(data.ok){
            setNota(data.nota);
        }
    }

    const editNota = async (id) =>{
        const response = await fetch(import.meta.env.VITE_URL? import.meta.env.VITE_URL + "/" + id : `http://localhost:3000/api/notas/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json()
        if(data.ok){
            toast.success('Nota editada correctamente',{duration: 1000});
            setTimeout(() => {
                navigate("/")
            }, 1000);
        }
    }
    const deleteNota = async (id) =>{
        const response = await fetch(import.meta.env.VITE_URL? import.meta.env.VITE_URL + "/" + id : `http://localhost:3000/api/notas/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json()
        if(data.ok){
            toast.success('Nota borrada correctamente',{duration: 1000});
            setTimeout(() => {
                navigate("/")
            }, 1000);
        }
    }

    useEffect(() => {
        getNota()
    }, [])
    
    if(!nota || nota.deleted){
        return <Back />
    }
    
  return (
    <div>
        <Back />
        <div className={`container ${styles.section}`}>
            <div className={styles.acciones}>
                <p>Acciones:</p>            
                <button className={`btn ${nota.done?"btn_disabled":""}`} onClick={()=>editNota(id)} disabled={nota.done}>Terminada</button>
                <button className={`btn`} onClick={()=>deleteNota(id)}>Eliminar</button>
            </div>
            <div>
                Estado: {nota.done ? 'Terminada' : 'Pendiente'}
            </div>
            <div className={`separator`}></div>
            <div className={styles.informacion}>
                <h1>{nota.title}</h1>
                <p>{nota.description}</p>
            </div>
        </div>

    </div>
  )
}
