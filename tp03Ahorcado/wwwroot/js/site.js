const palabra = document.getElementById("palabraOculta").value;

let palabraOculta = [];
let intentos = 10;

for (let i = 0; i < palabra.length; i++) {
    palabraOculta.push("_");
}

document.getElementById("texto").innerHTML = "Palabra: " + palabraOculta.join(" ") + ".";

function arriesgarLetra()
{
    const letra = document.getElementById("ingLetra").value.toUpperCase();
    let correcto = false;
    if(intentos > 0)
    {
    for(let i = 0; i<palabra.length; i++)
    {
        if (palabra[i] == letra)
            {
                palabraOculta[i] = letra;
                document.getElementById("respuesta").innerHTML = "Bien!  Te quedan " + (intentos) + " intentos.";
                correcto = true;
            }
    }

    if(!correcto)
        {

         intentos--;

        if (intentos > 1)
            {
                document.getElementById("respuesta").innerHTML = "Mal. Te quedan " + (intentos) + " intentos.";
            }
        else if (intentos == 1)
            {
                document.getElementById("respuesta").innerHTML = "Mal. Te queda " + (intentos) + " intento.";
            }
        else
            {
                document.getElementById("respuesta").innerHTML = "Derrota!";
            }


       
    }

    document.getElementById("miForm").reset();

    document.getElementById("texto").innerHTML = "Palabra: " + palabraOculta.join(" ") + ".";
    }
else
    {
        document.getElementById("respuesta").innerHTML = "Derrota!";
    }

if(palabraOculta.includes("_") == false)
        {
            document.getElementById("respuesta").innerHTML = "Victoria!";
            intentos = 0;
        }

}