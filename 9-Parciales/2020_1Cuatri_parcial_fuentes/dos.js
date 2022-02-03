/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
 hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo con mas cantidad de bolsas.
d) El tipo mas caro
*/
function mostrar()
{
   var tipoProducto;
   var cantBolsas;
   var PrecioBolsas;
   var descuento;
   var precioBruto;
   var precioFinal;
   var seguir;

   var acumuladorArena;
   var acumuladorCal;
   var acumuladorCemento;

   var bolsaArenaMasCara;
   var bolsaCalMasCara;
   var bolsaCementoMasCaro;
   var banderaArenaMasCara;
   var banderaCalMasCara;
   var banderaCementoMasCara;

   
   acumuladorArena= 0;
   acumuladorCal= 0;
   acumuladorCemento= 0;

   bolsaArenaMasCara= 0;
   bolsaCalMasCara= 0;
   bolsaCementoMasCaro= 0;
   banderaArenaMasCara=true;
   banderaCalMasCara=true;
   banderaCementoMasCara=true;

   seguir= true;

   while(seguir==true)
   {
      tipoProducto= prompt("Ingrese un producto: arena/cal/cemento");

      while(tipoProducto !="arena" && tipoProducto !="cal" && tipoProducto !="cemento")
      {
        tipoProducto= prompt("Error, reingrese el producto correcto");
      }
        cantBolsas= prompt("Ingrese la cantidad de bolsas");
        cantBolsas= parseInt(cantBolsas);
      while(cantBolsas <=0)
      {
        cantBolsas= prompt("Error, reingrese la cantidad correcta");
        cantBolsas= parseInt(cantBolsas);
      }
        PrecioBolsas= prompt("Ingrese el precio del producto ");
        PrecioBolsas= parseInt(PrecioBolsas);
      while(PrecioBolsas <=0)
      {
        PrecioBolsas= prompt("Error, reingrese el precio");
        PrecioBolsas= parseInt(PrecioBolsas);
      }
      
      switch(tipoProducto)
      {
        case "arena":
             if (PrecioBolsas > bolsaArenaMasCara || banderaArenaMasCara == true)
              {
                 bolsaArenaMasCara= PrecioBolsas;
                 banderaArenaMasCara == false;
              }
              acumuladorArena= acumuladorArena + cantBolsas;
        break;

        case "cal":
             if (PrecioBolsas > bolsaCalMasCara || banderaCalMasCara == true)
              {
                 bolsaCalMasCara= PrecioBolsas;
                 banderaCalMasCara == false;
              }
              acumuladorCal= acumuladorCal + cantBolsas;
        break;

        case "cemento":
             if (PrecioBolsas > bolsaCementoMasCaro || banderaCementoMasCara == true)
              {
                 bolsaCementoMasCaro= PrecioBolsas;
                 banderaCementoMasCara == false;
              }
              acumuladorCemento= acumuladorCemento + cantBolsas;
        break;

      } //FIN DE SWITCH
      

      seguir= confirm("Quiere seguir? ");

     } // FIN DEL WHILE...

      if (cantBolsas >= 30) //// a) El importe total a pagar , bruto sin descuento y el importe total a pagar con descuento(solo si corresponde)
        {
          descuento= 0.25;
          precioBruto = PrecioBolsas * cantBolsas;
          precioFinal = precioBruto - (precioBruto * descuento);
          document.write("El precio bruto es: " +precioBruto +"<br>");
          document.write("El precio final a pagar con descuento es: " + precioFinal +"<br>");

        }

    else if (cantBolsas >= 10 && cantBolsas < 30)
        {
          descuento = 0.15;   
          precioBruto = PrecioBolsas * cantBolsas;
          precioFinal = precioBruto - (precioBruto * descuento);

          document.write("El precio bruto es: " +precioBruto +"<br>");
          document.write("El precio final a pagar con descuento es: " + precioFinal +"<br>");   
        }
        else
        {
          precioBruto = PrecioBolsas * cantBolsas;
          document.write("El precio bruto es: " +precioBruto +"<br>");
        }
        

          //d) El tipo mas caro
       if (bolsaArenaMasCara >bolsaCalMasCara && bolsaArenaMasCara > bolsaCementoMasCaro) //b: Del tipo con mas unidades, el promedio por compra
      {
          document.write("El tipo mas caro es (ARENA): " + bolsaArenaMasCara+ "<br>"); 

      } 
      else if (bolsaCalMasCara > bolsaArenaMasCara && bolsaCalMasCara > bolsaCementoMasCaro)
      {
          document.write("El tipo mas caro es  (CAL): " + bolsaCalMasCara+ "<br>"); 

      } 
      else if (bolsaCementoMasCaro > bolsaArenaMasCara && bolsaCementoMasCaro >bolsaCalMasCara)
      { 
          document.write("El tipo mas caro es(CEMENTO): " + bolsaCementoMasCaro+ "<br>"); 

      }
      else
      {
        alert("Hay 2 o mas tipos de productos con el mismo precio");

      } //FIN DE LOGICA DEL MAS CARO

      // c) Informar el tipo con mas cantidad de bolsas.
       if (acumuladorArena >acumuladorCal && acumuladorArena > acumuladorCemento) //b: Del tipo con mas unidades, el promedio por compra
      {
          document.write("El tipo con mas cantidad es (ARENA): " + acumuladorArena+ "<br>"); 

      } 
      else if (acumuladorCal > acumuladorArena && acumuladorCal > acumuladorCemento)
      {
          document.write("El tipo con mas cantidad es (CAL): " + acumuladorCal+ "<br>"); 

      } 
      else if (acumuladorCemento > acumuladorArena && acumuladorCemento >acumuladorCal)
      {
          document.write("El tipo con mas cantidad es (CEMENTO): " + acumuladorCemento+ "<br>"); 
 }
      else
      {
        alert("Hay 2 o mas tipos de productos con la misma cantidad");
      }

}
