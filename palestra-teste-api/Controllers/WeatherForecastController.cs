using Microsoft.AspNetCore.Mvc;

namespace palestra_teste_api.Controllers;

[ApiController]
[Route("[controller]")]
public class ContaController : ControllerBase
{
    private static readonly string[] Contas = new[]
    {
        "000111222-1", "000111233-1", "000221222-1", "000111442-1", "000113455-1"
    };

    private readonly ILogger<ContaController> _logger;

    public ContaController(ILogger<ContaController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "ObterContas")]
    public IEnumerable<ContaResult> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new ContaResult(
            Contas[Random.Shared.Next(Contas.Length)],
            Random.Shared.Next(-500, 5000) / 3.5m));
    }
}
