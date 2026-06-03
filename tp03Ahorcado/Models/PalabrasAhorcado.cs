namespace tp03Ahorcado.Models;

public class PalabrasAhorcado
{
     public List<string> palabras = new List<string>();

    public PalabrasAhorcado()
    {
        
        palabras.Add("ABANICOS");
        palabras.Add("ELEFANTE");
        palabras.Add("FELICIDAD");
        palabras.Add("INFORMATICA");
        palabras.Add("CARRUAJE");
        palabras.Add("TERREMOTO");
        palabras.Add("LABERINTO");
        palabras.Add("MARIPOSA");
        palabras.Add("AVENTURA");
        palabras.Add("ARQUITECTO");
    }

    public string ObtenerPalabra()
    {
        int random = Random.Shared.Next(palabras.Count);
        return palabras[random];
    }










}
