import PropTypes from "prop-types";
import styles from "./noticia-card.module.css";

export const NoticiaCard = ({ titulo, categoria, descripcion, imagen, fecha }) => {
  return (
    <article className={styles.card}>
      <img className={styles.imagen} src={imagen} alt={titulo} />
      <div className={styles.contenido}>
        <div className={styles.meta}>
          <span className={styles.categoria}>{categoria}</span>
          <span>{fecha}</span>
        </div>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    </article>
  );
};

NoticiaCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
};
