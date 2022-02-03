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

/*
var producto1 ;
   var producto2;
   var producto3;
   var suma;
   var promedio;
   // declaro valores

    producto1=parseInt(document.getElementById("txtIdPrecioUno").value);
    producto2=parseInt(document.getElementById("txtIdPrecioDos").value);
    producto3=parseInt(document.getElementById("txtIdPrecioTres").value);
   //a traves de document traemos en input para luego parsearlo
    

   suma= producto1 + producto2 + producto3;
   promedio= suma /3;
   //promedio de los tres productos
   
   alert("El promedio de los tres productos es: " + promedio );
*/
/*
 var producto1 ;
   var producto2;
   var producto3;
   var preciofinal;
   // declaro valores

    producto1=parseInt(document.getElementById("txtIdPrecioUno").value);
    producto2=parseInt(document.getElementById("txtIdPrecioDos").value);
    producto3=parseInt(document.getElementById("txtIdPrecioTres").value);
   //a traves de document traemos en input para luego parsearlo
    

    
    suma= producto1 + producto2 + producto3 ;
    preciofinal= (suma * 0.21)  + suma;
   //promedio de los tres productos
   
   alert("El prescio final es: " + preciofinal );
   */