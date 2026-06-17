export const calcularPh = (concentracionH) => {
  const valor = Number(concentracionH);

  if (!Number.isFinite(valor) || valor <= 0) {
    throw new Error("La concentración debe ser un número mayor que 0");
  }

  return Number((-Math.log10(valor)).toFixed(2));
};

export const clasificarPh = (ph) => {
  const valor = Number(ph);

  if (!Number.isFinite(valor)) {
    throw new Error("El pH debe ser un número válido");
  }

  if (valor < 7) return "Ácida";
  if (valor === 7) return "Neutra";
  return "Básica";
};
