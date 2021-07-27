/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/



function mostrar()
{
	var numero;

	numero= prompt("Ingrese un numero: ");

    while(numero < 0 || numero > 9)
    {
    	numero= prompt("Error reingrese un numero entre 0 y 9 ");
    }

	txtIdNumero.value = numero;

}
//