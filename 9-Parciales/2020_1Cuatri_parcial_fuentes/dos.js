/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
 hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
//a) El importe total a pagar , bruto sin descuento y...
//b) el importe total a pagar con descuento(solo si corresponde)
//c) Informar el tipo con mas cantidad de bolsas.
//d) El tipo mas caro
*/
//sin funcionar correctamente 
function mostrar()
{  
    let seguir;
    let tipo;
    let precioBolsa;
    let cantidad;
    let importeBruto;
   
    let importeTotal;
    let importeConDescuento;
    let descuento;
    let tipoConMasBolsas;
    let tipoMasCaro;
    let precioMasCaro;
    let banderaTipoMasCaro;

    let acumuladorBolsas;
    let acumuladorBolsaArena;
    let acumuladorBolsaCal;
    let acumuladorBolsaCemento;
    let contadorCal;
    let contadorArena;
    let contadorCemento;

    contadorCal= 0;
    contadorArena= 0;
    contadorCemento= 0;
    acumuladorBolsaCal= 0;
    acumuladorBolsaArena= 0;
    acumuladorBolsaCemento= 0;
    banderaTipoMasCaro= false;

    importeTotal= 0;
    importeBruto= 0;
    acumuladorBolsas= 0;
    seguir= true;

    while(seguir== true)
    {
        tipo= prompt("Ingrese el tipo");
        while(tipo != "arena" && tipo != "cal" && tipo != "cemento")
        {
            tipo= prompt("Error. reingrese el tipo");
        }
        precioBolsa= prompt("Ingrese el precio ");
        precioBolsa= parseInt(precioBolsa);
        while(isNaN(precioBolsa) || precioBolsa < 0)
        {
            precioBolsa= prompt("Error. reingrese el precio");
            precioBolsa= parseInt(precioBolsa);
        } 
        cantidad= prompt("Ingrese la cantidad");
        cantidad= parseInt(cantidad);
        while(isNaN(cantidad) || cantidad < 0)
        {
            cantidad= prompt("Error. reingrese el cantidad");
            cantidad= parseInt(cantidad);
        } 
       
        switch(tipo)
        {
            case "arena":
            acumuladorBolsaCal+= cantidad;
            contadorArena++;
            break;
            
            case "cal":
            acumuladorBolsaCal+= cantidad;
            contadorCal++;
            break;  

            case "cemento":
            acumuladorBolsaCemento+= cantidad;
            contadorCemento;  
            break;       
         }

         if (precioBolsa > precioMasCaro || banderaTipoMasCaro== false)
         {
            precioMasCaro= precioBolsa;
            tipoMasCaro= tipo;
            banderaTipoMasCaro= true;
         }

         acumuladorBolsas+= cantidad;
         importeBruto= precioBolsa * cantidad;
         importeTotal= importeTotal + importeBruto;

    seguir= confirm("Desea continuar?");
    }//CIERRE DEL while
      if (acumuladorBolsas > 30) 
      {
         descuento= 0.25;
         importeConDescuento= importeTotal - (importeTotal * descuento);
         document.write("Importe total a pagar con descuento: $" + importeConDescuento + "<br>");
      }
      else if(acumuladorBolsas > 10)
           { 
              descuento= 0.15;
              importeConDescuento= importeTotal - (importeTotal * descuento);
              document.write("Importe total a pagar con descuento: $" + importeConDescuento + "<br>");
           } 
           else{document.write("No corresponde ningun descuento<br>");
         }

        document.write("Importe total a pagar: $" + importeTotal + "<br>");
          
        if (acumuladorBolsaCal > acumuladorBolsaArena && acumuladorBolsaCal > acumuladorBolsaCemento)
        {
            tipoConMasBolsas= "cal"
            document.write("Tipo con mas unidades: " + tipoConMasBolsas + "<br>");
        }
        else
        {
            if (acumuladorBolsaCemento > acumuladorBolsaArena) 
            {
                tipoConMasBolsas= "cemento"
               document.write("Tipo con mas unidades: " + tipoConMasBolsas + "<br>");
            }
            else
            {
                tipoConMasBolsas= "arena"
               document.write("Tipo con mas unidades: " + tipoConMasBolsas + "<br>");
            }
        }
           
        document.write("El tipo mas caro: " + tipoMasCaro + "<br>");
       

} 
















 /*  var tipoProducto;
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
*/
/*
let tipo;
  let precioBolsa;
  let cantidad;
  let porcentajeDesc;
  let descuento;
  
  let tipoMascaro;
  let tipoMasCaroPrecio;
  
  let mayorCantidad;
  let precioConDescuento;
  let precioBrutoProducto;
  let precioBrutoTotal;

  let acumuladorGeneral;

  let acumuladorBolsaCal;
  let acumuladorBolsaArena;
  let acumuladorBolsaCemento;
  let tipoConMasUnidades;

  let seguir;
  let banderaMasCara;
  
  acumuladorBolsaCal= 0;
  acumuladorBolsaArena= 0;
  acumuladorBolsaCemento= 0;
  acumuladorGeneral= 0;
  precioBrutoProducto= 0;
  precioBrutoTotal= 0;
  
  
  seguir= true;
  banderaMasCara= "primerIngreso";
  
  while(seguir== true)
  {
     tipo= prompt("Ingrese un producto de tipo: (arena, cal o cemento)");
 
      while(!(tipo == "arena" || tipo == "cal" || tipo == "cemento"))
      {
         tipo= prompt("Error... ingrese un producto de tipo: (arena, cal o cemento)");
      }
         cantidad= prompt("Ingrese la cantidad ");
         cantidad= parseInt(cantidad);
      while(cantidad < 0)
      {
         cantidad= prompt("Error... ingrese la cantidad ");
         cantidad= parseInt(cantidad);
      }
         precioBolsa= prompt("Ingrese un precio ");  
         precioBolsa= parseInt(precioBolsa);

      while(precioBolsa < 0)
      {
         precioBolsa= prompt("Error... ingrese un precio valido");
         precioBolsa= parseInt(precioBolsa);
      }
  switch(tipo)
  {
     case "arena":
        acumuladorBolsaArena= acumuladorBolsaArena + cantidad;
     break;

     case "cal":
          acumuladorBolsaCal= acumuladorBolsaCal + cantidad;
     break;

     case "cemento":
        acumuladorBolsaCemento= acumuladorBolsaCemento + cantidad;
     break;
   }
    if (banderaMasCara== "primerIngreso") 
    {
        banderaMasCara= "Ya ingreso";
        tipoMasCaroPrecio= precioBolsa;
        tipoMascaro= tipo;
    }
    else
    {
      if (precioBolsa > tipoMasCaroPrecio)
      {
        tipoMasCaroPrecio= precioBolsa;
        tipoMascaro= tipo;
      }
    }
    
     acumuladorGeneral= acumuladorGeneral + cantidad;
     precioBrutoProducto= precioBolsa * cantidad;
     precioBrutoTotal= precioBrutoTotal + precioBrutoProducto;
  
  seguir= confirm("Desea seguir???");

 }
   if (acumuladorGeneral > 10)
   {
      porcentajeDesc= 15;
   }
   else
   {   
      if (acumuladorGeneral > 30)
      {
        porcentajeDesc= 25;
      }
      else
      {
        porcentajeDesc= 0;
      }
   }
   if(porcentajeDesc != 0)
   {
      descuento= precioBrutoTotal * porcentajeDesc / 100;
      precioConDescuento= precioBrutoTotal - descuento;
      document.write("El importe a pagar con descuento es: " + precioConDescuento + "<br>");
   }

   document.write("El importe bruto a pagar es: " + precioBrutoTotal + "<br>");
   
   
  if (acumuladorBolsaArena > acumuladorBolsaCal && acumuladorBolsaArena > acumuladorBolsaCemento)
  {
      tipoConMasUnidades= "arena"

  }else
  { 
     if (acumuladorBolsaCal > acumuladorBolsaCemento)
     {
        tipoConMasUnidades= "cal"    
     }
     else 
     {
        tipoConMasUnidades= "cemento"   
     }
  }
      document.write("El tipo con mas cantidad es : " + tipoConMasUnidades + "<br>");
      document.write("El tipo mas caro es : " + tipoMascaro + "<br>");

*/