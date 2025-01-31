import { Link } from 'react-router'
import { ChevronLeft } from 'lucide-react';
import styles from './styles.module.css';
export default function Back() {
  return (
    <div>
        <Link to="/" className={styles.volver}> <ChevronLeft size={48} /> <p>Volver</p></Link>
    </div>
  )
}
