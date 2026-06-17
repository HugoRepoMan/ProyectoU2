import { Link } from "react-router-dom";
import { NoticiaCard } from "../../components/noticia-card";
import { noticiasQuimica } from "../../services/noticias-data";
import styles from "./inicio.module.css";

export const InicioPage = () => {
  const noticiaPrincipal = noticiasQuimica[0];

  return (
    <section className={styles.inicio}>
      <div className={styles.hero}>
        <p className={styles.pretitulo}>Portal académico de química aplicada</p>
        <h1>Breaking News</h1>
        <p>
          Información clara sobre avances químicos, consulta de compuestos y análisis básico de pH para estudiantes y docentes.
        </p>
        <div className={styles.acciones}>
          <Link to="/calculadora" className={styles.botonPrincipal}>Probar calculadora pH</Link>
          <Link to="/compuestos" className={styles.botonSecundario}>Buscar compuesto</Link>
        </div>
      </div>

      <div className={styles.paneles}>
        <article className={styles.panel}>
          <span>pH</span>
          <h2>Análisis de soluciones</h2>
          <p>Estima la acidez o basicidad a partir de la concentración de iones hidrógeno [H+] y reconoce el tipo de solución. El pH es importante porque permite controlar la calidad del agua, alimentos, suelos y procesos de laboratorio.</p>
        </article>
        <article className={styles.panel}>
          <span>Mol</span>
          <h2>Datos de compuestos</h2>
          <p>Consulta fórmula molecular, masa molar y nombre IUPAC de sustancias relevantes para el estudio químico.</p>
        </article>
        <article className={styles.panel}>
          <span>Lab</span>
          <h2>Noticias científicas</h2>
          <p>Revisa temas de química verde, electroquímica, materiales y análisis químico con enfoque educativo.</p>
        </article>
      </div>

      <div className={styles.destacado}>
        <div>
          <p className={styles.pretitulo}>Reporte principal</p>
          <h2>Actualidad química conectada con laboratorio, industria y ambiente</h2>
        </div>
        <NoticiaCard {...noticiaPrincipal} />
      </div>
    </section>
  );
};
