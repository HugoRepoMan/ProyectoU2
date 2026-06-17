import { render, screen } from "@testing-library/react";
import { NoticiaCard } from "./noticia-card";

test("muestra la noticia recibida mediante props", () => {
  render(
    <NoticiaCard
      titulo="Química verde"
      categoria="Sostenibilidad"
      descripcion="Uso de catalizadores para reducir residuos."
      fecha="Hoy"
      imagen="noticia.png"
    />
  );

  expect(screen.getByText("Química verde")).toBeInTheDocument();
  expect(screen.getByText("Sostenibilidad")).toBeInTheDocument();
});
