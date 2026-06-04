const palabra = document.getElementById("palabraOculta").value;

let palabraOculta = [];
let intentos = 0;

for (let i = 0; i < palabra.length; i++) {
    palabraOculta.push("_");
}

document.getElementById("texto").innerHTML = palabraOculta.join(" ");

function arriesgarLetra()
{
    const letra = document.getElementById("ingLetra").value.toUpperCase();
    let correcto = false;
if(intentos <= 10)
    {
    for(let i = 0; i<palabra.length; i++)
    {
        if (palabra[i] == letra)
            {
                palabraOculta[i] = letra;
                document.getElementById("respuesta").innerHTML = "correcto";
                correcto = true
            }


    
    }
    if(correcto == false){
      document.getElementById("respuesta").innerHTML = "Falso";
        intentos = intentos + 1;
    }

    document.getElementById("miForm").reset();

    document.getElementById("texto").innerHTML = palabraOculta.join(" ");
}
else
    {
        document.getElementById("respuesta").innerHTML = "Te quedaste sin vidas amiguito";
    }

if(palabraOculta.includes("_") == false)
        {
            document.getElementById("respuesta").innerHTML = "Lo lograste! bien ahi amigo";
        }

}