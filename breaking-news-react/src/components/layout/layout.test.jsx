import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout";

test("renderiza el contenido recibido como children", () => {
  render(
    <BrowserRouter>
      <Layout>
        <h1>Contenido de prueba</h1>
      </Layout>
    </BrowserRouter>
  );

  expect(screen.getByText("Contenido de prueba")).toBeInTheDocument();
});
