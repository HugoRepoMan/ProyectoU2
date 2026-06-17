const PROPIEDADES = "MolecularFormula,MolecularWeight,IUPACName";
const BASE_URL = import.meta.env.VITE_PUBCHEM_API_URL;

export const obtenerCompuesto = async (nombre) => {
  const termino = nombre.trim();

  if (!termino) {
    throw new Error("Ingrese el nombre de un compuesto químico");
  }

  const url = `${BASE_URL}/${encodeURIComponent(termino)}/property/${PROPIEDADES}/JSON`;
  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error("No se encontró el compuesto químico solicitado");
  }

  const datos = await respuesta.json();
  const compuesto = datos.PropertyTable?.Properties?.[0];

  if (!compuesto) {
    throw new Error("La API no devolvió información del compuesto");
  }

  return compuesto;
};
