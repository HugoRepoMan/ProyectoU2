import { afterEach, describe, expect, test, vi } from "vitest";
import { obtenerCompuesto } from "./pubchem-service";

const BASE_URL = import.meta.env.VITE_PUBCHEM_API_URL;
const PROPIEDADES = "MolecularFormula,MolecularWeight,IUPACName";

const respuestaCafeina = {
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
};

describe("obtenerCompuesto", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  test("consulta la API y devuelve los datos del compuesto", async () => {
    const fetchMock = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(respuestaCafeina),
      })
    );
    vi.stubGlobal("fetch", fetchMock);

    const compuesto = await obtenerCompuesto("caffeine");

    expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/caffeine/property/${PROPIEDADES}/JSON`);
    expect(compuesto).toEqual(respuestaCafeina.PropertyTable.Properties[0]);
  });

  test("no consulta la API si el nombre está vacío", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    await expect(obtenerCompuesto("   ")).rejects.toThrow("Ingrese el nombre");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  test("muestra error si el compuesto no existe", async () => {
    vi.stubGlobal("fetch", vi.fn(() => Promise.resolve({ ok: false })));

    await expect(obtenerCompuesto("noexistequimico")).rejects.toThrow("No se encontró");
  });

  test("muestra error si la API responde sin información", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ PropertyTable: { Properties: [] } }),
        })
      )
    );

    await expect(obtenerCompuesto("caffeine")).rejects.toThrow("La API no devolvió información");
  });
});
