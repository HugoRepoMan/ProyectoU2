import { Link } from "react-router-dom";
import { NoticiaCard } from "../../components/noticia-card";
import { noticiasQuimica } from "../../services/noticias-data";
import styles from "./inicio.module.css";

export const InicioPage = () => {
  const noticiaPrincipal = noticiasQuimica[0];

  return (
    <section className={styles.inicio}>
      <div className={styles.hero}>
        <p className={styles.pretitulo}>Portal de química y ciencias exactas</p>
        <h1>Breaking News</h1>
        <p>
          Noticias científicas, análisis de compuestos químicos y una calculadora de pH para practicar lógica con React.
        </p>
        <div className={styles.acciones}>
          <Link to="/calculadora" className={styles.botonPrincipal}>Probar calculadora pH</Link>
          <Link to="/compuestos" className={styles.botonSecundario}>Buscar compuesto</Link>
        </div>
      </div>

      <div className={styles.paneles}>
        <article className={styles.panel}>
          <span>pH</span>
          <h2>Herramienta exacta</h2>
          <p>Calcula el pH a partir de la concentración de iones hidrógeno [H+] y clasifica la solución.</p>
        </article>
        <article className={styles.panel}>
          <span>API</span>
          <h2>PubChem</h2>
          <p>Consulta fórmula molecular, peso molecular y nombre IUPAC de compuestos químicos.</p>
        </article>
        <article className={styles.panel}>
          <span>SPA</span>
          <h2>React Router</h2>
          <p>La navegación usa rutas internas sin recargar completamente la aplicación.</p>
        </article>
      </div>

      <div className={styles.destacado}>
        <div>
          <p className={styles.pretitulo}>Titular destacado</p>
          <h2>Noticias con enfoque de laboratorio</h2>
        </div>
        <NoticiaCard {...noticiaPrincipal} />
      </div>
    </section>
  );
};
