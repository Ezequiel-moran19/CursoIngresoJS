/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo
  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones
debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares () 
{
	var numeroIngresado;
 	var cantPares;
 	var diferencia;
 	
 	cantPares= 0;

        numeroIngresado=txtIdNumero.value
 		numeroIngresado=parseInt(numeroIngresado);
 		diferencia= numeroIngresado;
 	
 	while (numeroIngresado < 0)
 	{ 
 		numeroIngresado= prompt("Error, ingrese un numero positivo");
 		numeroIngresado=parseInt(numeroIngresado);
 	}	
    if(numeroIngresado % 2 ==0) // quiere decier que es par
    {
      while(diferencia > 0)
      {
      	cantPares ++;
      	diferencia = diferencia - 2;
      }
      alert("La cantidad de numeros pares es " + cantPares);
    }
    

 }  
function NumerosImpares()
{
    var numeroIngresado;
 	var cantImpares;
 	var diferencia;

 	cantImpares= 0;

        numeroIngresado=txtIdNumero.value
 		numeroIngresado=parseInt(numeroIngresado);
 		diferencia= numeroIngresado;
 	
 	while (numeroIngresado < 0)
 	{ 
 		numeroIngresado= prompt("Error, ingrese un numero positivo");
 		numeroIngresado=parseInt(numeroIngresado);
 	}	
    if(numeroIngresado % 2 ==1) // quiere decier que es IMPAR
    {
      while(diferencia > 1)
      {
      	cantImpares ++;
      	diferencia = diferencia - 2;
      }
      alert("La cantidad de numeros Impares es " + cantImpares);
    }

}
function NumerosDivisibles()
{
   var numeroIngresado;
   var divisor;
   var contadorDivisores;

   divisor= 100;
   contadorDivisores= 0;
   

        numeroIngresado=txtIdNumero.value
 		numeroIngresado=parseInt(numeroIngresado);
 	
 	while (numeroIngresado < 0)
 	{ 
 		numeroIngresado= prompt("Error, ingrese un numero positivo");
 		numeroIngresado=parseInt(numeroIngresado);
 	}

 	if(numeroIngresado <100)
 	{
 		divisor = numeroIngresado; //de esta manera comienzo las divisiones por si mismo.

 		while(divisor>0)
 	{
 		if (numeroIngresado % divisor == 0)
 		{
 			contadorDivisores ++;
 			divisor= divisor - 1;
 		}

 		else //contempla los casos que no son divisores de X. Por ej: el 49
 		{
 			divisor= divisor - 1;
 		}
 	}	

 	}
 	
     alert("La cantidad de numeros divisibles es " + contadorDivisores);
}


function VerificarPrimo()
{
   var numeroIngresado;
   var divisor;
   var contadorDivisores;

   divisor= 100;
   contadorDivisores= 0;

        numeroIngresado=txtIdNumero.value
 		numeroIngresado=parseInt(numeroIngresado);
 	
 	while (numeroIngresado < 0)
 	{ 
 		numeroIngresado= prompt("Error, ingrese un numero positivo");
 		numeroIngresado=parseInt(numeroIngresado);
 	}
	 	if(numeroIngresado <100)
	 	{
	 		divisor = numeroIngresado; //de esta manera comienzo las divisiones por si mismo.

	 	 while(divisor>0)
	 	 {
	 		if (numeroIngresado % divisor == 0)
	 		{
	 			contadorDivisores ++;
	 			divisor= divisor - 1;
	 		}

	 		else //contempla los casos que no son divisores de X. Por ej: el 49
	 		{
	 			divisor= divisor - 1;
	 		}
	 	    	
	     }
	 	    if (contadorDivisores == 2)
	 	    {
	 	    	alert("El numero es primo");
	 	    }
	 	    else
	 	    {
	 	    	alert("El numero es compuesto");
	        }

	 }
	 	


}


	 