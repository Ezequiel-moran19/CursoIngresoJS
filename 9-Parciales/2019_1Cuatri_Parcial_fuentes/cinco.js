/*
(SOLO WITCH).
una empresa de viajes le solicita ingresar que continente
le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100,
que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas
paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además 
paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito
se le agrega un 15% , por mercadoPago un 10% y cualquier
otro medio 5%
cualquier otro continente tiene un recargo del 20%
*/
//TRABAJO POR COMPLETAR 
function mostrar()
{
   let medioDePago;
   let continente;
   let cantidadDeDias;
   let pagoConDescuento;
   let pagoConRecargo;
   let precioNeto;
   let precioFinal;
   const OFERTA_DIA = 100;

   cantidadDeDias= prompt("Ingrese la cantidad de dias");
   cantidadDeDias= parseInt(cantidadDeDias);

   medioDePago= prompt("Ingrese el medio de pago");
   medioDePago= parseInt(medioDePago);

   continente= Marca.value;

   switch(continente)
   {
   	 case "América":
            switch(medioDePago)
            {
               case "dibito":
                  pagoConDescuento= 0.10; 
               break;
               default:
                  pagoConDescuento=  0.50;
               break; 
            }     
   	 break;
     
       case "África":  
            switch(medioDePago)
            {
               case "mercadoPago":
               case "efectivo":
                     pagoConDescuento= 0.15;
               break;
               default:
                     pagoConDescuento= 0.60;
               break;
            }          
   	 break;

   	 case "Europa":
            switch(medioDePago)
            {
               case "debito":
                     pagoConDescuento= 0.15;  
               break;
               case "mercadoPago":
                     pagoConDescuento= 0.10; 
               break;
               case "efectivo":
                     pagoConDescuento= 0.5;
               break;
               default:
                     pagoConDescuento= 0.20;
               break;
            }      
   	 break;

   	 default:
             pagoConRecargo= 0.20;         
   	 break;

   }
   if (pagoConRecargo != 0) 
   {   
       precioNeto= OFERTA_DIA * cantidadDeDias;
       precioFinal= precioNeto + (precioNeto * pagoConRecargo);
   }
   else
   {
     if (pagoConDescuento != 0) 
     {
        precioNeto= OFERTA_DIA * cantidadDeDias;
        precioFinal= precioNeto - (precioNeto * pagoConDescuento);
     }
   }
   alert("El precio final es: $" + precioFinal);
         
}   
//ID: Marca