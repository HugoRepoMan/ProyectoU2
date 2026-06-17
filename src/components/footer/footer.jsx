import styles from "./footer.module.css";

export const Footer = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>Breaking News: portal académico de noticias de química y ciencias exactas.</p>
      <p>React + Vite + CSS Modules + API PubChem © {anioActual}</p>
    </footer>
  );
};
