/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/

function mostrar()
{
   let numeroIngresado;
   
   numeroIngresado = prompt("Ingrese un numero");

   while(numeroIngresado < 0 || numeroIngresado > 9)
   {
       numeroIngresado = prompt("Error ingrese un numero entre el 0 y 9");
   }

     txtIdNumero.value= numeroIngresado;
}
/*
var numero;

	numero= prompt("Ingrese un numero: ");

    while(numero < 0 || numero > 9)
    {
    	numero= prompt("Error reingrese un numero entre 0 y 9 ");
    }

	txtIdNumero.value = numero;
	*/
	/*
	let numero;

	numero= prompt("Ingrese un numero");

	while(numero < 0 || numero >9)
	{
		numero= prompt("Error X( ... ingrese un numero del 0 al 9");
	}
     txtIdNumero.value = numero;*/