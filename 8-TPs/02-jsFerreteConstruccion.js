/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
    var perimetro;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    
    largo = parseInt(largo);
    ancho = parseInt(ancho);
   
   
    perimetro = ((ancho * 2) + (largo * 2)) *3  ;
   
    alert("La cantidad de alambre a comprar es: " + perimetro);
 
}
function Circulo () 
{
	
	var radio;
    var perimetro;

    radio = txtIdRadio.value;
   
    
    radio = parseInt(radio);
   
    perimetro = (3.14 * radio) * 3;
   
    alert("La cantidad de alambre a comprar es: " + perimetro);
	
}
function Materiales () 
{
	var largo;
	var ancho;
    var area;
    var bolsasCemento;
    var bolsasCal;


    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    area = parseInt(area);
	bolsasCemento = parseInt(bolsasCemento);
	bolsasCal = parseInt(bolsasCal);

	area = ancho * largo;
	bolsasCemento = area * 2;
	bolsasCal = area * 3;

	alert("Se necesitan: " + bolsasCemento + " bolsas de cemento" + "\nY se necesitan: " + bolsasCal + " bolsas de cal");
}

// txtIdLargo txtIdAncho txtIdRadio