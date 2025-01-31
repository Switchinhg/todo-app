
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { Link } from 'react-router';

export default function NotaItem({nota}) {
  return (

        <li className={styles.li}>
          <Link to={`/nota/${nota.id}`} className={styles.item}>
            <span><b>Titulo:</b> {nota.title} </span>
            {<span className={`${styles.ball} ${nota.done?styles.ok_done:styles.ok_notDone}`}></span>}
          </Link> 
          </li>
  )
}

// PropTypes validation
NotaItem.propTypes = {
    nota: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };