/*
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos,
una letra y un número entre -100 y 100 (validar) hasta que el
usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)
*/
function mostrar()
{
   let letra;
   let numIngresado;
   let seguir;
   let i;
   let contadorPares;//A)
   let contadorImpares;//B)
   let contadorCeros;//C)
   let acumuladorPositivos;//D)
   let contadorPositivos;
   let promedioPositivos;
   let sumaNegativos;//E)
   let maximaLetra;//F
   let maximoNumero;
   let minimoLetra;
   let minimoNumero;
   let bandera;

   contadorPares= 0;
   contadorImpares= 0;
   contadorCeros= 0;
   acumuladorPositivos= 0;
   contadorPositivos= 0;
   acumuladorNegativos= 0;
   seguir= true;
   bandera= false;
   while (seguir== true)
   {
       letra= prompt("Ingrese una letra");
      
       numIngresado= prompt("Ingrese el numero entre: -100 y 100 ");
       numIngresado= parseInt(numIngresado);
     while(isNaN(numIngresado) || numIngresado < -100 || numIngresado > 100)
     {
       numIngresado= prompt("Error.. reingrese el numero entre: -100 y 100 ");
       numIngresado= parseInt(numIngresado);
     }
     //a) La cantidad de números pares.
     if (numIngresado % 2 == 0)
     {
     	   contadorPares++;
     }
     else if (numIngresado % 2 == 1)//b) La cantidad de números impares
     {
     		contadorImpares++;
     }        	
     
     if (numIngresado > 0)//d) El promedio de todos los números positivos ingresados.
     {
        acumuladorPositivos= acumuladorPositivos + numIngresado;
        contadorPositivos++;
     }
     else if (numIngresado < 0)//e) La suma de todos los números negativos.
     {
        acumuladorNegativos= acumuladorNegativos + numIngresado;
     }
     else
     {//c) La cantidad de ceros.
        contadorCeros++;
     }
     
     if (numIngresado > maximoNumero || bandera == false)//f) El número y la letra del máximo y el mínimo.
     {
    	maximoNumero= numIngresado;
    	maximaLetra= letra;
     }
     if (numIngresado < minimoNumero || bandera == false)
     {
    	minimoNumero= numIngresado;
    	minimoLetra= letra;
      bandera= true;
     }
     
    seguir= confirm("quiere segui?");
   }//FIN DEL WHILE GENERAL		

    document.write("La cantidad de pares: " + contadorPares + "<br>");
    document.write("La cantidad de impares: " + contadorImpares + "<br>");
    document.write("La cantidad de ceros: " + contadorCeros + "<br>");
    if (contadorPositivos != 0)
    {
       promedioPositivos= acumuladorPositivos / contadorPositivos;
       document.write("Promedio de números positivos: " + promedioPositivos + "<br>");
    }
    else
    {
       document.write("No se encontraron numeros peositivos para calcular el prromedio<br>");
    }
    document.write("La suma de números negativos: " + acumuladorNegativos + "<br>");
    document.write("El número maximo es " + maximoNumero + " y La Letra del máximo: " + maximaLetra + "<br>");
    document.write("El número mínimo es " + minimoNumero + " y la letra del minimo: " + minimoLetra + "<br>");
}
