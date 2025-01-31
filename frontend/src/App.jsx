// import { useState } from 'react'
import { useEffect, useState } from 'react'
import styles from './App.module.css'
import NotaItem from './components/NotaItem/NotaItem'
import { Link } from 'react-router'
import { toast } from 'sonner'


function App() {
  const [notas, setNotas] = useState([])
  const [visisbles, setVisibles] = useState('todos')
  const [loading, setLoading] = useState(true)

  const getAllNotes = async ()=>{
    setLoading(true)
    try{
      const response = await fetch(import.meta.env.VITE_URL || 'http://localhost:3000/api/notas')
      const data = await response.json()
      if(data.ok){
        setNotas(data.notas)
      }
      setLoading(false)
    }catch(e){
        toast.error("Error al cargar las notas "+e)
        setLoading(false)
    }
  }


  useEffect(() => {
    getAllNotes()
  }, [])

  return (
    <section className={styles.container}>
      <div className={styles.notas}>
        <div className={styles.notas_top}>
          <h2>Todas las notas</h2>
          <Link to="/nueva-nota" className={`btn`}>Nueva nota</Link>
        </div>
          <div className={styles.notas_filters}>
            <button className={`btn_secondary`} onClick={()=>setVisibles('todos')}>Ver todos</button>
            <button className={`btn_secondary`} onClick={()=>setVisibles('sint')}>Ver sin terminar</button>
            <button className={`btn_secondary`} onClick={()=>setVisibles("term")}>Ver terminados</button>
          </div>
        <div>
          <ul className={styles.notas_list}>
            {loading? <li className={styles.no_notas}>Cargando...</li>: null}
            {notas.length > 0 && notas.map((nota) => (
              <>
                {visisbles == "todos" &&  <NotaItem key={nota.id} nota={nota} />}
                {visisbles == "sint"  && !nota.done && <NotaItem key={nota.id} nota={nota} />}
                {visisbles == "term" && nota.done? <NotaItem key={nota.id} nota={nota} />: null}
              </>
            ))}
            {notas.length == 0 && !loading && <li className={styles.no_notas}>No hay notas</li>}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default App
