/*
Pedir por prompt el precio y el porcentaje de descuento,
mostrar el precio final con descuento por id.
*/
//SIN TERMINAR 16/2022
function mostrar()
{
   let precio;
   let descuento;
   let preciofinal;

   precio= prompt("Ingrese el precio");
   descuento = prompt("cuanto es el descuento");

   precio= parseInt(precio);
   descuento= parseInt(descuento);

   preciofinal= precio - (precio * descuento / 100);

   elPrecioFinal.value= preciofinal;
}










/*
var precio;
  var descuento;
  var resultado
  var precioFinal;

  precio = prompt("Cual es el precio?");
  descuento = prompt("cuanto es el descuento");

  precio = parseInt(precio);
  descuento = parseInt(descuento);
  
  
  precioFinal=precio - (precio * descuento /100);

  elPrecioFinal.value = precioFinal;

*/











  
