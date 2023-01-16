namespace palestra_teste_api;

public class ContaResult
{
    public ContaResult(string numeroConta, decimal saldoDisponivel)
    {
        this.numeroConta = numeroConta;
        this._saldoDisponivel = saldoDisponivel;
    }

    public string numeroConta { get;  }
    public decimal saldoDisponivel => Math.Truncate(100 * _saldoDisponivel) / 100; 
    private decimal _saldoDisponivel { get;  }

}