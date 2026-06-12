namespace tp03Ahorcado.Models;

public class PalabrasAhorcado
{
     public List<string> palabras = new List<string>();
    public string ObtenerPalabra()
    {
        int random = Random.Shared.Next(palabras.Count);
        return palabras[random];
    }

public List<string> ObtenerLista(){
    return palabras;
}








}
