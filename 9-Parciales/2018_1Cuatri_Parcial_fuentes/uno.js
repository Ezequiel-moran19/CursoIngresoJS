
function mostrar()
{
 var ancho;
 var largo;
 var perimetro;

 ancho = prompt("Ingrese aqui el ancho");
 largo = prompt("Ingrese aqui el largo");
 
 ancho = parseInt(ancho);
 largo = parseInt(largo);

 perimetro = (ancho * 2) + (largo * 2);

 alert("El valor de perimetro es: " + perimetro);


}
