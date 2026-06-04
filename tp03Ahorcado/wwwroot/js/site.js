const palabra = document.getElementById("palabraOculta").value;

let palabraOculta = [];
let intentos = 9;

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
                document.getElementById("respuesta").innerHTML = "Bien!  Te quedan " + (intentos + 1 ) + " intentos.";
                correcto = true;
            }


    
    }
    if(correcto == false){
         intentos--;
      document.getElementById("respuesta").innerHTML = "Mal. Te quedan " + (intentos + 1) + " intentos.";
       
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
        }

}