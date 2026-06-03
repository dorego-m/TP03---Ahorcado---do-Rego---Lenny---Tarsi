namespace tp03Ahorcado.Models;

public class PalabrasAhorcado
{
    private List<string> palabras;

    public PalabrasAhorcado
    {
        palabras.Add("ABANICOS", "ELEFANTE", "FELICIDAD", "INFORMATICA", "CARRUAJE", "TERREMOTO", "LABERINTO", "MARIPOSA", "AVENTURA", "ARQUITECTO")
    }

<<<<<<< HEAD
    
=======
    public string ObtenerPalabra()
    {
        int random = Random.Shared.Next(palabras.Count);
        return palabras[random];
    }


>>>>>>> adab9f82b9c8dd959f2c806fc691396732a7254f








}
