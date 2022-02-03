/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/
function mostrar()
{
	 let numeroIngresado;
   let sumaNegativos;
   let sumaPositivos;
   let cantidadPositivos;
   let cantidadNegativos;
   let cantidadCeros;
   let cantidadPares;
   let promedioPositivos;
   let promedioNegativos;
   let diferencia;
   let seguir;

   sumaNegativos= 0;
   sumaPositivos= 0;
   cantidadPositivos= 0;
   cantidadNegativos= 0;
   cantidadCeros= 0;
   cantidadPares= 0;
   seguir= true;

   while(seguir == true)
   {
      numeroIngresado= prompt("Ingrese un numero");
      numeroIngresado= parseInt(numeroIngresado);

    while(isNaN(numeroIngresado) || numeroIngresado < -1000 || numeroIngresado > 1000)
    {
        numeroIngresado= prompt("Error... reingrese un numero entre -1000 y 1000");
        numeroIngresado= parseInt(numeroIngresado);
    }
    if (numeroIngresado > 0)
    {
        sumaPositivos= sumaPositivos + numeroIngresado;
        cantidadPositivos ++;
    }
    else
    {
        if (numeroIngresado < 0)
        {
           sumaNegativos= sumaNegativos + numeroIngresado;
           cantidadNegativos ++;
        }
        else
        {
          cantidadCeros ++;
        }
    }
    if (numeroIngresado %2 == 0)
    {
      cantidadPares ++;
    }


      seguir= confirm("Quiere agregar mas numeros??");
   }
     
     
     diferencia= sumaPositivos - sumaNegativos;


   document.write("La suma de  los positivos es: " + sumaPositivos + "<br>");
   document.write("La suma de  los negativos es: " + sumaNegativos + "<br>");
   document.write("La cantidad de  negativos es: " + cantidadNegativos + "<br>");
   document.write("La cantidad de positivos es: " + cantidadPositivos + "<br>");
   document.write("La cantidad de ceros es: " + cantidadCeros + "<br>");
   document.write("La cantidad de pares es: " + cantidadPares + "<br>");
      
   if (cantidadPositivos != 0)
   {
      promedioPositivos= sumaPositivos / cantidadPositivos;
      document.write("El promedio de positivos es: " + promedioPositivos + "<br>");
   }
   else
   {
     document.write("No se pudo calcular el promedio de positivos <br>");
   }
   
   if (cantidadNegativos != 0)
   {
     promedioNegativos= sumaNegativos / cantidadNegativos;
     document.write("El promedio de negativos es: " + promedioNegativos + "<br>");
   }
   else
   {
     document.write("No se pudo calcular el promedio de negativos <br>");
   }
   document.write("La diferencia entre positivos y negativos es: " + diferencia + "<br>");














}
/*
var numeroIngresado;
  var seguir;
  var negativos;
  var positivos;
  var cantPositivo;
  var cantNegativo;
  var cantCeros;
  var cantPares;

    //inicio la variable de control
   seguir = true;
    negativos = 0;
    positivos = 0; //inicializo 
    cantPositivo = 0;
    cantNegativo = 0;
    cantCeros = 0;
    cantPares = 0;

   while(seguir == true)
   {
        numeroIngresado=prompt("Ingrese un numero ");
        numeroIngresado= parseInt(numeroIngresado);
        
        if (numeroIngresado < 0)// punto 1
        {
            negativos = negativos + numeroIngresado;
            cantNegativo ++;// punto 3
           
            if (numeroIngresado % 2 == 0)// punto 6
          {
            cantPares ++;
          }
                      
        }
        if (numeroIngresado > 1)// punto 2
         {
          positivos = positivos + numeroIngresado;
          
          cantPositivo ++;// punto 4

          if (numeroIngresado % 2 == 0)// punto 6
          {
            cantPares ++;
          }
         }
         if (numeroIngresado == 0)// punto 5
         {
          cantCeros ++;
         }
       
         
           seguir= confirm("quiere seguir? ");


   } 

    alert ("la suma de positivos es: " + positivos);
    alert ("la suma de negativos es: " + negativos);
    alert ("cantidad de positivos: " + cantPositivo);
    alert ("cantidad de negativos: " + cantNegativo);
    alert ("cantidad de ceros es: " + cantCeros);
    alert("promedio de positivo es: " + positivos / cantPositivo);
    alert("promedio de negativos es: " + negativos / cantNegativo);
    alert("cantidad de Pares es: " + cantPares);
    */
/*
let numeroIngresado;
  let sumaNegativos;
  let sumaPositivos;
  let cantNegativos;
  let cantPositivos;
  let cantCeros;
  let cantPares;
  let promedioPositivos;
  let promedioNegativos;
  let diferencia;
  let seguir;
  
  sumaNegativos = 0;
  sumaPositivos = 0;
  cantNegativos = 0;
  cantPositivos = 0;
  cantCeros = 0;
  cantPares = 0;

  seguir = true;

  while(seguir == true)
  {
     numeroIngresado= prompt("Ingrese un numero");
     numeroIngresado= parseInt(numeroIngresado);

     while(numeroIngresado < -1000 || numeroIngresado > 1000)
     {
        numeroIngresado= prompt("Error reingrese un numero: (entre -1000 y 1000)");
        numeroIngresado= parseInt(numeroIngresado);
     }
     if (numeroIngresado < 0)
     {
       sumaNegativos = sumaNegativos + numeroIngresado;
       cantNegativos ++;
     }
     else
     {
         if (numeroIngresado > 0)
         {
            sumaPositivos = sumaPositivos + numeroIngresado;
            cantPositivos ++;
         }
         else
         {
            cantCeros ++;
         }
   }
   if (numeroIngresado %2 == 0)
    {
       cantPares ++;
    }

    seguir = confirm("Quiere seguir??");
  }
    diferencia = sumaPositivos - sumaNegativos;

    document.write("La suma de los negativos es: " + sumaNegativos + "<br>");
    document.write("La suma de los positivos es: " + sumaPositivos + "<br>");
    document.write("La cantidad de negativos es: " + cantNegativos + "<br>");
    document.write("La cantidad de positivos es: " + cantPositivos + "<br>");
    document.write("La cantidad de ceros es: " + cantCeros + "<br>");
    document.write("La cantidad de Pares: " + cantPares +"<br>");

    if (cantPositivos != 0)
    {
      promedioPositivos = sumaPositivos / cantPositivos;
     document.write("El promedio de positivos es: " + promedioPositivos + "<br>");
    }
    else
    {
       document.write("el promedio de positivos no se pudo calcular<br>");        
    }

    if (cantNegativos != 0)
    {
      promedioNegativos = sumaNegativos / cantNegativos;
      document.write("El promedio de negativos es: " + promedioNegativos + "<br>");
    }
    else
    {
       document.write("El promedio de negativos no se pudo calcular<br>");        
    }
    
    document.write("La diferencia de negativos y positivos es: " + diferencia + "<br>");
    
    */
    
   
