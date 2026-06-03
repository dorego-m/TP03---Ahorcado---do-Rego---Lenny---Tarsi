const palabraGuion = getElementById("palabraOculta").value;
 let palabraOculta = [];

 for (let i = 0; i < palabra.length; i++) {
        palabraOculta.push("_");
    }


    document.getElementById("palabra").innerHTML = palabraOculta;