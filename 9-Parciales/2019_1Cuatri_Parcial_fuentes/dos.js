/*>A una pareja se le pide los datos para mostrar un mensaje
 " ustedes se llaman  xxxxx y xxxx pesan xx y xx kilos,
  que sumados son xx kilos y el promedio de peso xx ".
*/
//EJERCICIO REALIZADO EL 16/2022
function mostrar()
{ 
   let nombreM;
   let nombreF;
   let pesoM;
   let pesoF;
   let sumaDePeso;
   let promedioDePeso;
   let mensaje;

   nombreM= prompt("Ingrese el nombre del caballero");
   nombreF= prompt("Ingrese el nombre de la dama");

   pesoM= prompt("Ingrese el peso del caballero");
   pesoF= prompt("Ingrese el peso de la dama");
   
   pesoM= parseInt(pesoM);
   pesoF= parseInt(pesoF);
   
   sumaDePeso= pesoM + pesoF;
   promedioDePeso= sumaDePeso / 2;

mensaje="Ustedes se llaman: " + nombreM + " y " + nombreF + "\n pesan: " + pesoM + " y " + pesoF + " kilos " + "\nque sumados son " + sumaDePeso + " kilos " + "\ny el promedio de peso es: " + promedioDePeso;
   alert(mensaje);
}

























/*
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
*/