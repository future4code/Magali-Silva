import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
  it("retorna true para '[1, 1]'", () => {
    const ehDuplicado = checaItensDuplicados([1, 1]);
    expect(ehDuplicado).toEqual(true);
  });

  it("retorna true para '[1, 2, 1]'", () => {
    const ehDuplicado = checaItensDuplicados([1, 2, 1]);
    expect(ehDuplicado).toEqual(true);
  });

  it("retorna true para '[5, 5, 3, 6, 5, 6]'", () => {
    const ehDuplicado = checaItensDuplicados([5, 5, 3, 6, 5, 6]);
    expect(ehDuplicado).toEqual(true);
  });

  it("retorna true para '[-1, -1]'", () => {
    const ehDuplicado = checaItensDuplicados([-1, -1]);
    expect(ehDuplicado).toEqual(true);
  });

  it("retorna false para '[]'", () => {
    const ehDuplicado = checaItensDuplicados([]);
    expect(ehDuplicado).toEqual(false);
  });

  it("retorna false para '[1]'", () => {
    const ehDuplicado = checaItensDuplicados([1]);
    expect(ehDuplicado).toEqual(false);
  });

  it("retorna false para '[1, 2, 3]'", () => {
    const ehDuplicado = checaItensDuplicados([1, 2, 3]);
    expect(ehDuplicado).toEqual(false);
  });

  it("retorna false para '[5, 2, 1]'", () => {
    const ehDuplicado = checaItensDuplicados([5, 2, 1]);
    expect(ehDuplicado).toEqual(false);
  });

  it("retorna false para '[-1, 2, 1]'", () => {
    const ehDuplicado = checaItensDuplicados([-1, 2, 1]);
    expect(ehDuplicado).toEqual(false);
  });

  it("retorna true para '[1, 1, 1]'", () => {
    const ehDuplicado = checaItensDuplicados([1, 1, 1]);
    expect(ehDuplicado).toEqual(true);
  });

  it("retorna true para '[1, 1, 1, 1]'", () => {
    const ehDuplicado = checaItensDuplicados([1, 1, 1, 1]);
    expect(ehDuplicado).toEqual(true);
  });
});
