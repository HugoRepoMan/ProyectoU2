import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.css";

export const Header = () => {
  const getClassName = ({ isActive }) => (isActive ? `${styles.link} ${styles.activo}` : styles.link);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo} aria-label="Ir al inicio de Breaking News">
        <span className={styles.elemento}>Br</span>
        <span className={styles.nombre}>eaking</span>
        <span className={styles.elemento}>N</span>
        <span className={styles.nombre}>ews</span>
      </Link>

      <nav className={styles.nav} aria-label="Menú principal">
        <NavLink to="/" className={getClassName}>Inicio</NavLink>
        <NavLink to="/noticias" className={getClassName}>Noticias</NavLink>
        <NavLink to="/calculadora" className={getClassName}>Calculadora pH</NavLink>
        <NavLink to="/compuestos" className={getClassName}>Compuestos</NavLink>
      </nav>
    </header>
  );
};
