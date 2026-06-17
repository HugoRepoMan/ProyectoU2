import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";

const comentariosRef = collection(db, "comentarios");

export const crearComentario = async ({ nombre, mensaje }) => {
  const documento = await addDoc(comentariosRef, {
    nombre,
    mensaje,
    fecha: serverTimestamp(),
  });

  return documento.id;
};

export const obtenerComentarios = async () => {
  const consulta = query(comentariosRef, orderBy("fecha", "desc"));
  const respuesta = await getDocs(consulta);

  return respuesta.docs.map((documento) => ({
    id: documento.id,
    ...documento.data(),
  }));
};