const preciocelular = 200;
var dinerobanco = prompt("Ingresa la cantidad de dinero total");
var dineroreal = dinerobanco-preciocelular;
var contadorcel = 0;

while (contadorcel < dineroreal){
    contadorcel = contadorcel + preciocelular;
    console.log("Tu compra total es de: " + contadorcel);
}
