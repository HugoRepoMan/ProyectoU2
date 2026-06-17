import styles from "./footer.module.css";

export const Footer = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>Breaking News: portal académico de noticias de química.</p>
      <p>Reyes Shadya - Armijos Hugo © {anioActual}</p>
    </footer>
  );
};
