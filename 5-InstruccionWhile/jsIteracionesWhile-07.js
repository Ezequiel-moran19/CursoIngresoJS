/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var suma;
	var seguir;
	var numeroIngresado;

	contador = 0;
	suma = 0;
	seguir = true;
	
	while(seguir == true)
   {
      numeroIngresado = prompt("ingrese un numero: ");
      numeroIngresado= parseInt(numeroIngresado);

      while(numeroIngresado < 0 || numeroIngresado > 100) 
      { 
        numeroIngresado = prompt("error.. reingrese un numero entre 1 y 100: ");
        numeroIngresado= parseInt(numeroIngresado);
      }


      suma += numeroIngresado;
      
      contador ++;
     
      seguir = confirm("Ingresar otro?");
      
   }
	txtIdSuma.value= suma;
	txtIdPromedio.value= suma/contador;
}
/*
var contador;
	var suma;
	var seguir;
	var numeroIngresado;

	contador = 0;
	suma = 0;
	segui = "si";
	
	while(seguir == "si")
   {
      numeroIngresado = prompt("ingrese un numero");
      //para poder escribir un msj 
      numeroIngresado= parseInt(numeroIngresado);

      suma += numeroIngresado;
      //suma = suma + numeroIngresado
      contador ++;
      //contador = contador + 1;
      //contador+= 1;
      seguir = prompt("Ingresar otro? si/no");

   }
	txtIdSuma.value= suma;
	txtIdPromedio.value= suma/contador;
*/