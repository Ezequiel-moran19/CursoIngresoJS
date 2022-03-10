/*+
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro el cuadrado del numero.
Si el primero divisible por el segundo, los resto,
de lo contrario muestro solo el resto.
si el resto es mayor a 3(tres ) informarlo por alert.
*/
function mostrar()
{
  let numUno;
  let numDos;
  let resultado;
  numUno= prompt("Ingrese el primer numero");
  numDos= prompt("Ingrese el segundo numero");
  
  numUno= parseInt(numUno);
  numDos= parseInt(numDos);
  
  if (numUno == numDos)
  {
     resultado= Math.pow(numUno, numDos);//utilice la funcion Math.pow(4, 2) para que me devuelva el valor elevado al cuadrado..
  }
  alert("El cuandrado del numero es: " + resultado);
}
