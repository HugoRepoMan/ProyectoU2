import { NoticiaCard } from "../../components/noticia-card";
import { noticiasQuimica } from "../../services/noticias-data";
import styles from "./noticias.module.css";

export const NoticiasPage = () => {
  return (
    <section>
      <div className={styles.encabezado}>
        <p>Sección informativa</p>
        <h1>Noticias de química</h1>
        <span>Contenido estático renderizado mediante componentes reutilizables y el método map().</span>
      </div>

      <div className={styles.grid}>
        {noticiasQuimica.map((noticia) => (
          <NoticiaCard key={noticia.titulo} {...noticia} />
        ))}
      </div>
    </section>
  );
};
