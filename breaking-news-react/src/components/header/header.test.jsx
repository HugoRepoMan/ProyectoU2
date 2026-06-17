import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./header";

test("muestra los enlaces principales del portal", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  expect(screen.getByText("Inicio")).toBeInTheDocument();
  expect(screen.getByText("Calculadora pH")).toBeInTheDocument();
  expect(screen.getByText("Compuestos")).toBeInTheDocument();
});
