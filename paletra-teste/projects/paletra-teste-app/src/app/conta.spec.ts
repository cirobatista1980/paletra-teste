import { Conta } from './conta.model';

describe('Conta model', () => {
  let conta: Conta;

  beforeEach(async () => {
    let json = {numeroConta:"123456-7", saldoDisponivel: 74.14}
    conta = new Conta(json);
  });

  it('Deve retornar 74 reais quando o valor for 74.14', () => {
    expect(conta.ValorInteiro).toEqual(74);
  });

  it('Deve retornar 14 centavos quando o valor for 74.14', () => {
    expect(conta.ValorCentavos).toEqual(14);
  });

  it('Deve retornar 0 centavos quando o valor for 606', () => {
    let json = {numeroConta:"123456-7", saldoDisponivel: 600}
    conta = new Conta(json);
    expect(conta.ValorCentavos).toEqual(0);
  });

  it('Deve retornar 0 quando objeto for invalido', () => {
    let json = {}
    conta = new Conta(json);
    expect(conta.ValorInteiro).toEqual(0);
  });

});
