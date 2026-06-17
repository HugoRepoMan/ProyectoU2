import { afterEach, describe, expect, test, vi } from "vitest";
import { obtenerCompuesto } from "./pubchem-service";

describe("obtenerCompuesto", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("obtiene información del compuesto desde la API", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            PropertyTable: {
              Properties: [
                {
                  CID: 2519,
                  MolecularFormula: "C8H10N4O2",
                  MolecularWeight: "194.19",
                  IUPACName: "1,3,7-trimethylpurine-2,6-dione",
                },
              ],
            },
          }),
      })
    );

    const compuesto = await obtenerCompuesto("caffeine");
    expect(compuesto.MolecularFormula).toBe("C8H10N4O2");
  });

  test("muestra error si el compuesto no existe", async () => {
    global.fetch = vi.fn(() => Promise.resolve({ ok: false }));

    await expect(obtenerCompuesto("noexistequimico")).rejects.toThrow("No se encontró");
  });
});
