using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using tp03Ahorcado.Models;

namespace tp03Ahorcado.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        PalabrasAhorcado Palabrarandom = new PalabrasAhorcado();
        string Palabra = Palabrarandom.ObtenerPalabra();
        ViewBag.Palabra = Palabra;
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
