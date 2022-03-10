/*

Realizar el algoritmo que permita ingresar los datos de
una compra productos de la construccion,
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento
 sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento
 sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
//PARCIAL REALIZADO DOMINGO 13/2022 finalizado/
/*

function mostrar()
{
  let i;
  let tipo;
  let cantBolsas;
  let precioBolsa;
  let descuento;
  
  let precioBrutoProducto;
  let precioBrutoTotal;
  let tipoConMasUnidades;

  let tipoMasCaro;
  let precioMasCaro;
  let primerIngreso;
  
  let acumuladorBolsas;
  let acumuladorBolsaCal;
  let acumuladorBolsaArena;
  let acumuladorBolsaCemento;
  

  acumuladorBolsas= 0;
  acumuladorBolsaCal= 0;
  acumuladorBolsaArena= 0;
  acumuladorBolsaCemento= 0; 

  precioBrutoProducto= 0;
  primerIngreso= true;

  i= true;

  while(i== true)
  {
        tipo= prompt("Ingrese el tipo de producto: arena, cal, cemento");
     
     while(tipo != "arena" || tipo != "cal" || tipo != "cemento")
     {
        tipo= prompt("Error reingrese el tipo de producto: arena, cal, cemento");
     }
        cantBolsas= prompt("Ingrese la cantidad");
        cantBolsas= parseInt(cantBolsas);
      while(cantBolsas < 0)
      {
        cantBolsas= prompt("Ingrese la cantidad");
        cantBolsas= parseInt(cantBolsas);
      }
        precioBolsa= prompt("Ingrese el precio");
        precioBolsa= parseInt(precioBolsa);
      while(precioBolsa < 0)
      {
        precioBolsa= prompt("Ingrese el precio");
        precioBolsa= parseInt(precioBolsa);
      }

      switch(tipo)
      {
        case "cal":
        acumuladorBolsaCal+= cantBolsas;
        break;
        case "arena":
        acumuladorBolsaArena+= cantBolsas;
        break;
        case "cemento":
        acumuladorBolsaCemento+= cantBolsas;
        break;
      }

    acumuladorBolsas= acumuladorBolsas + cantBolsas;
    precioBrutoProducto= precioBolsa * cantBolsas;
    precioBrutoTotal= precioBrutoTotal + precioBrutoProducto;

    if (tipo < tipoMasCaro || primerIngreso == true)
    {
       tipoMasCaro= tipo;
       precioMasCaro= precioBolsa;
       primerIngreso= false;
    }

    i= confirm("Quiere seguir??");
  }
  
  if (acumuladorBolsas > 10)
  {
     porcentaje= 0.15;
  }
  else
  {
    if (acumuladorBolsas > 30)
    {
       porcentaje= 0.25;
    }
    else
    {
      porcentaje= 0;
    }
  }

  if (porcentaje != 0)
  {
     descuento= precioBrutoProducto * porcentaje;
     precioBrutoProducto= precioBrutoTotal - descuento;
     document.write("pagar con descuento es: $" + precioBrutoProducto + "<br>");
  }

  if (acumuladorBolsaCal > acumuladorBolsaArena && acumuladorBolsaCal > acumuladorBolsaCemento)
  {
     tipoConMasUnidades= "Cal"
  }
  else
  {
    if (acumuladorBolsaArena > acumuladorBolsaCemento) 
    {
      tipoConMasUnidades= "Arena"
    }
    else
    {
      tipoConMasUnidades= "Cemento"
    } 
  }

  document.write("El tipo con mas cantidad de bolsas es: " + tipoConMasUnidades + "<br>");
  document.write("El importe bruto sin descuento es: $" + precioBrutoTotal + "<br>");
  document.write("El tipo de porducto mas caro es: " + tipoMasCaro + "<br>");
  
}
*/