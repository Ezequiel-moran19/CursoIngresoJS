/*Realizar el algoritmo que  pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.
*/
function mostrar()
{
 var lado;
 var perimetro;

 lado=prompt("Ingrese longitud del triangulo");

 lado=parseInt(lado);

 perimetro=lado * 3;


 alert("Su triangulo equilatero tien un perimetro de: " + perimetro);
}
