import { describe, expect, test } from "vitest";
import { calcularPh, clasificarPh } from "./ph-utils";

describe("utilidades de pH", () => {
  test("calcula pH a partir de la concentración de H+", () => {
    expect(calcularPh(0.001)).toBe(3);
  });

  test("clasifica una solución ácida", () => {
    expect(clasificarPh(3)).toBe("Ácida");
  });

  test("clasifica una solución neutra", () => {
    expect(clasificarPh(7)).toBe("Neutra");
  });

  test("rechaza concentraciones inválidas", () => {
    expect(() => calcularPh(0)).toThrow("mayor que 0");
  });
});
