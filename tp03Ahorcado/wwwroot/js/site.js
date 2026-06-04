const palabra = document.getElementById("palabraOculta").value;

let palabraOculta = [];

for (let i = 0; i < palabra.length; i++) {
    palabraOculta.push("_");
}

document.getElementById("texto").innerHTML = palabraOculta.join("");