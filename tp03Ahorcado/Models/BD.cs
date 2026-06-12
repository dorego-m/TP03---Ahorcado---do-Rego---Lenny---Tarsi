using Microsoft.Data.SqlClient;
using Dapper;

namespace tp03Ahorcado.Models;

public class BD
{
    private string _connectionString = @"Server=localhost;Database=Ahorcado;Integrated Security=True;TrustServerCertificate=True;";

    public List<PalabrasAhorcado> LevantarPalabras()
    {
        using (SqlConnection connection = new SqlConnection(_connectionString))
        {
            string query = "SELECT * FROM palabras";
            return connection.Query<PalabrasAhorcado>(query).ToList();
        }
    }
}