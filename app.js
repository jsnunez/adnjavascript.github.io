var nombres=["Pedro","Juan","Diego"]


const iniciar = function () {
    let lista = ["00000101010101010101",
        "00101010101101110111",
        "00100010010000001001"]

    localStorage.setItem("data", JSON.stringify(lista));

}




const verificar = function () {
    let operando1 = (document.getElementById("operando1").value);
    var data = JSON.parse(localStorage.getItem("data"));
    console.log(data)
    let datos1 = 0;
    let datos2 = 0;
    let datos3 = 0;
    var separarCadena = operando1.split("");

    var separarCadena1 = data[0].split("");
    var separarCadena2 = data[1].split("");
    var separarCadena3 = data[2].split("");
    console.log(separarCadena)
    for (let i = 0; i <= 19; i++) {
        if (separarCadena[i] == separarCadena1[i]) {
            datos1 = datos1 + 5;
        }
        if (separarCadena[i] == separarCadena2[i]) {
            datos2 = datos2 + 5;
        }
        if (separarCadena[i] == separarCadena3[i]) {
            datos3 = datos3 + 5;
        }
    }
    console.log(datos1)
    console.log(datos2)
    console.log(datos3)

if(datos1>datos2&& datos1>datos3){

    document.getElementById("resultado").innerHTML = "el culpable es "+ nombres[0]+ " con un parentezco "+ datos1 +"%";
}
if(datos2>datos1&& datos2>datos3){

    document.getElementById("resultado").innerHTML = "el culpable es "+ nombres[1]+ " con un parentezco " + datos2 +"%";
}
if(datos3>datos2&& datos3>datos1){

    document.getElementById("resultado").innerHTML = "el culpable es "+ nombres[2]+ " con un parentezco "+ datos3 +"%";
}

}
