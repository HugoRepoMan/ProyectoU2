import { useEffect, useState } from "react";
import {
  crearComentario,
  obtenerComentarios,
} from "../../services/comentarios-service";
import styles from "./comentarios.module.css";

export const ComentariosPage = () => {
  const [comentarios, setComentarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const cargarComentarios = async () => {
    try {
      const datos = await obtenerComentarios();
      setComentarios(datos);
    } catch (err) {
      setError("No se pudieron cargar los comentarios");
    }
  };
  useEffect(() => {
    cargarComentarios();
  }, []);

  const enviarComentario = async (e) => {
    e.preventDefault();

    if (!nombre.trim() || !mensaje.trim()) {
      setError("Completa todos los campos");
      return;
    }

    try {
      setError("");

      await crearComentario({
        nombre,
        mensaje,
      });

      setNombre("");
      setMensaje("");
      cargarComentarios();
    } catch (err) {
      setError("No se pudo guardar el comentario");
    }
  };

  return (
    <section className={styles.comentarios}>
      <h1>Comentarios científicos</h1>
      <p>
        Ayudanos a mejorar nuestra pagina dejandonos tu opinon aqui.
      </p>

      <form className={styles.formulario} onSubmit={enviarComentario}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <textarea
          placeholder="Escribe un comentario científico"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <button type="submit">Guardar comentario</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.lista}>
        {comentarios.map((comentario) => (
          <article key={comentario.id} className={styles.card}>
            <h3>{comentario.nombre}</h3>
            <p>{comentario.mensaje}</p>
          </article>
        ))}
      </div>
    </section>
  );
};