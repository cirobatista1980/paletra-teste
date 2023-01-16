export class Conta{
  numeroConta:string;
  private saldoDisponivel:number;

  constructor(json:any){

    if(json.numeroConta == undefined || json.numeroConta == null)
      json = {numeroConta:"123456-7", saldoDisponivel: 0};

    this.numeroConta = json.numeroConta;
    this.saldoDisponivel = json.saldoDisponivel;
  }

  get ValorInteiro(): number{
    return Math.trunc(Math.abs(this.saldoDisponivel));
  }

  get ValorCentavos(): number {
    if((Math.round(this.saldoDisponivel%1 * 100) / 100) == 0) return 0;

    return Number((Math.round(this.saldoDisponivel%1 * 100) / 100).toString().split('.')[1]);
  }
}
