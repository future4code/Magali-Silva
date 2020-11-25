import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'arara'", () => {
    const ehPalindromo = checaPalindromo("arara");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'asa'", () => {
    const ehPalindromo = checaPalindromo("asa");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'Socorram-me subi no onibus em marrocos'", () => {
    const ehPalindromo = checaPalindromo(
      "Socorram-me subi no onibus em marrocos"
    );
    expect(ehPalindromo).toEqual(true);
  });
  // Entrada diferente das demais: letra maiúscula, hífen e espaços

  it("retorna true para 'luzazul'", () => {
    const ehPalindromo = checaPalindromo("luzazul");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'luz azul'", () => {
    const ehPalindromo = checaPalindromo("luz azul");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'socorrammesubinoonibusemmarrocos'", () => {
    const ehPalindromo = checaPalindromo("socorrammesubinoonibusemmarrocos");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'Socorram-mesubinoonibusem-marrocoS'", () => {
    const ehPalindromo = checaPalindromo("socorrammesubinoonibusemmarrocos");
    expect(ehPalindromo).toEqual(true);
  });
});
