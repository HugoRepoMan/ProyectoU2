import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CalculadoraPage } from "./calculadora";

test("calcula y muestra el pH de una concentración válida", async () => {
  const user = userEvent.setup();
  render(<CalculadoraPage />);

  const input = screen.getByLabelText(/Concentración/i);
  await user.clear(input);
  await user.type(input, "0.0001");
  await user.click(screen.getByRole("button", { name: /Calcular pH/i }));

  expect(screen.getByText("pH: 4")).toBeInTheDocument();
  expect(screen.getByText(/Ácida/)).toBeInTheDocument();
});
