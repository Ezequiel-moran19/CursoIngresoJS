/*>A una pareja se le pide los datos para mostrar un mensaje
 " ustedes se llaman  xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".
*/


function mostrar()
{ 
	var nombreUno;
	var nombreDos;
	var kilosUno;
	var kilosDos;
	var suma;
	var promedio;

	nombreUno = prompt("Su nombre es");
    nombreDos = prompt("su nombre es"); 
     
    kilosUno = prompt("Su peso es");
    kilosDos = prompt("su peso es");
    
    kilosUno = parseInt(kilosUno);
    kilosDos = parseInt(kilosDos);

  

    suma = kilosUno + kilosDos;
    promedio = suma /2;

    alert("Ustedes se llaman: " + nombreUno + " y " + nombreDos + "\nPesan: " + kilosUno + " y " + kilosDos + "\ny el promedio de peso es de: " + promedio);
 
}
