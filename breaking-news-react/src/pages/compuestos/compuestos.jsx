import { useState } from "react";
import { CompuestoCard } from "../../components/compuesto-card";
import { obtenerCompuesto } from "../../services/pubchem-service";
import styles from "./compuestos.module.css";

export const CompuestosPage = () => {
  const [busqueda, setBusqueda] = useState("caffeine");
  const [compuesto, setCompuesto] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const buscarCompuesto = async (event) => {
    event.preventDefault();
    setCargando(true);
    setError("");
    setCompuesto(null);

    try {
      const datos = await obtenerCompuesto(busqueda);
      setCompuesto(datos);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  return (
    <section className={styles.compuestos}>
      <div className={styles.encabezado}>
        <p>API externa</p>
        <h1>Buscador de compuestos</h1>
        <span>Consulta datos químicos desde PubChem.</span>
      </div>

      <form className={styles.formulario} onSubmit={buscarCompuesto}>
        <label htmlFor="compuesto">Nombre del compuesto</label>
        <div className={styles.busqueda}>
          <input
            id="compuesto"
            type="text"
            value={busqueda}
            onChange={(event) => setBusqueda(event.target.value)}
            placeholder="Ejemplo: water, glucose, caffeine, aspirin"
          />
          <button type="submit">Buscar</button>
        </div>
      </form>

      {cargando && <p className={styles.estado}>Consultando PubChem...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {compuesto && (
        <CompuestoCard
          cid={compuesto.CID}
          formula={compuesto.MolecularFormula}
          masaMolar={compuesto.MolecularWeight}
          nombreIupac={compuesto.IUPACName}
        />
      )}
    </section>
  );
};
