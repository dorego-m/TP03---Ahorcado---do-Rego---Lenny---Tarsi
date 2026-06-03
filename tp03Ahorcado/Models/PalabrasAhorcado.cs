namespace tp03Ahorcado.Models;

public class PalabrasAhorcado
{
    private List<string> palabras;

    public PalabrasAhorcado
    {
        palabras.Add("ABANICOS", "ELEFANTE", "FELICIDAD", "INFORMATICA", "CARRUAJE", "TERREMOTO", "LABERINTO", "MARIPOSA", "AVENTURA", "ARQUITECTO")
    }

    public string ObtenerPalabra()
    {
        int random = Random.Shared.Next(palabras.Count);
        return palabras[random];
    }










}
