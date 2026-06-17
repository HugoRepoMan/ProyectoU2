import { useState } from "react";
import { calcularPh, clasificarPh } from "../../utils/ph-utils";
import styles from "./calculadora.module.css";

export const CalculadoraPage = () => {
  const [concentracion, setConcentracion] = useState("0.001");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const manejarCalculo = (event) => {
    event.preventDefault();

    try {
      const ph = calcularPh(concentracion);
      setResultado({ ph, tipo: clasificarPh(ph) });
      setError("");
    } catch (err) {
      setResultado(null);
      setError(err.message);
    }
  };

  return (
    <section className={styles.calculadora}>
      <div className={styles.info}>
        <p className={styles.pretitulo}>Herramienta de ciencias exactas</p>
        <h1>Calculadora de pH</h1>
        <p>
          Ingresa la concentración de iones hidrógeno [H+] para aplicar la fórmula pH = -log10[H+] y clasificar la solución.
        </p>
      </div>

      <form className={styles.formulario} onSubmit={manejarCalculo}>
        <label htmlFor="concentracion">Concentración [H+] en mol/L</label>
        <input
          id="concentracion"
          type="number"
          step="any"
          min="0"
          value={concentracion}
          onChange={(event) => setConcentracion(event.target.value)}
          placeholder="Ejemplo: 0.001"
        />
        <button type="submit">Calcular pH</button>
      </form>

      {error && <p className={styles.error}>{error}</p>}

      {resultado && (
        <article className={styles.resultado} aria-live="polite">
          <span>Resultado</span>
          <h2>pH: {resultado.ph}</h2>
          <p>Tipo de solución: <strong>{resultado.tipo}</strong></p>
        </article>
      )}
    </section>
  );
};
