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
          Ingresa la concentración molar de iones hidrógeno [H+] para determinar
          el nivel de acidez o basicidad de una solución acuosa.
        </p>
        <div className={styles.guiaCalculo}>
          <h2>¿Cómo se calcula?</h2>
          <p>
            El pH se obtiene aplicando la fórmula <strong>pH = -log10[H+]</strong>.
            Por ejemplo, si [H+] = 0.001 mol/L, entonces pH = 3.
          </p>
          <ul>
            <li>Usa valores positivos y escritos en mol/L, como 0.1, 0.001 o 0.00001.</li>
            <li>Un pH menor que 7 indica una solución ácida.</li>
            <li>Un pH igual a 7 indica una solución neutra.</li>
            <li>Un pH mayor que 7 indica una solución básica.</li>
          </ul>
          <h2>Datos importantes</h2>
          <p>
            Un pH muy alto puede ser dañino porque indica una sustancia muy básica
            o alcalina, capaz de irritar la piel, afectar los ojos y alterar procesos
            biológicos o ambientales.
          </p>
          <ul>
            <li>En piscinas, un pH alto reduce la efectividad del cloro y puede irritar ojos y piel.</li>
            <li>En suelos, un pH demasiado básico dificulta que algunas plantas absorban nutrientes.</li>
            <li>En limpieza, productos muy alcalinos pueden remover grasa, pero también ser corrosivos si se usan mal.</li>
            <li>En agua potable, valores alejados de lo normal pueden indicar problemas de calidad o tratamiento.</li>
          </ul>
        </div>
      </div>

      <div className={styles.panelCalculo}>
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
      </div>
    </section>
  );
};
