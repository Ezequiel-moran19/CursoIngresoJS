function mostrar()
{
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


  


}
