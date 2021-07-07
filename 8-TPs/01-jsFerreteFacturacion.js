/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
   var producto1 ;
   var producto2;
   var producto3;
   var suma;
   // declaro valores

	 producto1=parseInt(document.getElementById("txtIdPrecioUno").value);
    producto2=parseInt(document.getElementById("txtIdPrecioDos").value);
    producto3=parseInt(document.getElementById("txtIdPrecioTres").value);
	//a traves de document traemos en input para luego parsearlo
	 
   suma= producto1 + producto2 + producto3;
   //sumanos los tres productos

   alert("la suma de los tres productos es: " + suma );


}

function Promedio () 
{
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

}
function PrecioFinal () 
{
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


}

/*
     producto1= 100;
     producto2= 150;
     producto3= 200;
   esto no se hace es hardcodear ** estas asignando valores fijos a tus variables

    */