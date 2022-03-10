/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
   let precioProducto1;
   let precioProducto2;
   let precioProducto3;
   let suma;

   precioProducto1= document.getElementById("txtIdPrecioUno").value;
   precioProducto2= document.getElementById("txtIdPrecioDos").value;
   precioProducto3= document.getElementById("txtIdPrecioTres").value;
   
   precioProducto1= parseInt(precioProducto1);
   precioProducto2= parseInt(precioProducto2);
   precioProducto3= parseInt(precioProducto2);

   suma= precioProducto1 + precioProducto2 + precioProducto3;

   alert("La suma de precios es: " + suma);
}
 
function Promedio () 
{
   let precioProducto1;
   let precioProducto2;
   let precioProducto3;
   let suma;
   let promedio;

   precioProducto1= document.getElementById("txtIdPrecioUno").value;
   precioProducto2= document.getElementById("txtIdPrecioDos").value;
   precioProducto3= document.getElementById("txtIdPrecioTres").value;
   
   precioProducto1= parseInt(precioProducto1);
   precioProducto2= parseInt(precioProducto2);
   precioProducto3= parseInt(precioProducto2);
   
   suma= precioProducto1 + precioProducto2 + precioProducto3;
   promedio= suma /3;
   alert("El promedio es: " + promedio);

}

function PrecioFinal () 
{
   let precioProducto1;
   let precioProducto2;
   let precioProducto3;
   let suma;
   let precioFinal;

   precioProducto1= document.getElementById("txtIdPrecioUno").value;
   precioProducto2= document.getElementById("txtIdPrecioDos").value;
   precioProducto3= document.getElementById("txtIdPrecioTres").value;
   
   precioProducto1= parseInt(precioProducto1);
   precioProducto2= parseInt(precioProducto2);
   precioProducto3= parseInt(precioProducto2);
   
   suma= precioProducto1 + precioProducto2 + precioProducto3;
   precioFinal= suma + (suma * 0.21);
   alert("El precio final mas iva es: " + precioFinal);
} 
