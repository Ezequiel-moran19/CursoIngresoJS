/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar
 el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*/
//TRABAJO REALIZADO EL DIA 17/2022
function mostrar()
{
   let numeroUno;
   let numeroDos;
   let suma;
   let resta;
   let resultado;

   numeroUno= prompt("Ingrese un numero");
   numeroDos= prompt("Ingrese otro numero");

   numeroUno= parseInt(numeroUno);
   numeroDos= parseInt(numeroDos);

   if (numeroUno == numeroDos)
   {
   	document.write("El primer numero " + numeroUno + " es igual al segundo numero: " + numeroDos + "<br>");
   }
   else
   {
      if (numeroUno > numeroDos)
      {  
          resta= numeroUno - numeroDos;
          document.write("El resultado de la resta es: " + resta + "<br>");
        if (resta > 10)
        {

           document.write(" y superó el 10<br>");
        } 
      }
      else
      {
         suma= numeroUno + numeroDos;
         document.write("El resultado de la suma es: " + suma + "<br>");
      }  
    
    }  
   
}
