import PropTypes from "prop-types";
import styles from "./compuesto-card.module.css";

export const CompuestoCard = ({ cid, formula, masaMolar, nombreIupac }) => {
  return (
    <article className={styles.card}>
      <span className={styles.etiqueta}>PubChem CID: {cid}</span>
      <h3>{formula}</h3>
      <p><strong>Peso molecular:</strong> {masaMolar}</p>
      <p><strong>Nombre IUPAC:</strong> {nombreIupac || "No disponible"}</p>
    </article>
  );
};

CompuestoCard.propTypes = {
  cid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  formula: PropTypes.string.isRequired,
  masaMolar: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  nombreIupac: PropTypes.string,
};
