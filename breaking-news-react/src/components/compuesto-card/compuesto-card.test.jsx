import { render, screen } from "@testing-library/react";
import { CompuestoCard } from "./compuesto-card";

test("muestra los datos principales del compuesto", () => {
  render(
    <CompuestoCard
      cid={2519}
      formula="C8H10N4O2"
      masaMolar={194.19}
      nombreIupac="caffeine"
    />
  );

  expect(screen.getByText("C8H10N4O2")).toBeInTheDocument();
  expect(screen.getByText(/194.19/)).toBeInTheDocument();
});
