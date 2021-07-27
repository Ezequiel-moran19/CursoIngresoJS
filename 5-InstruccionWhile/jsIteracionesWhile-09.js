/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
    var numeroIngresado;
    var maximo;
    var minimo;
    var primerNumero;
    var seguir;

    seguir = true;
    primerNumero = false;

    while (seguir == true)
    {
        numeroIngresado = prompt("ingrese un numero ");
        numeroIngresado = parseInt(numeroIngresado);
    
      if (primerNumero == false)
      {
         maximo = primerNumero;
         minimo = primerNumero;
         primerNumero = true;
      }
      else
      {
        if (numeroIngresado>maximo)
        {
            maximo = numeroIngresado;
        }
        else
        {
         {
            if (numeroIngresado<minimo)
            minimo = numeroIngresado;
         }

        }   
          seguir = confirm("Ingresar otro?");
      }
     }
      txtIdMaximo.value = maximo;
      txtIdMinimo.value = minimo;

}

















/* Ejemplo Nro 1:
var numeroIngresado;
	var maximo;
	var minimo;
	var seguir;
    
    maximo = -1000;
    minimo = 1000;
	seguir = true;

	while(seguir == true)
    {
    	numeroIngresado = prompt("Ingrese un numero; ");
        numeroIngresado = parseInt(numeroIngresado);
        
        if (numeroIngresado>maximo)
        {
           maximo = numeroIngresado;
        }
        if (numeroIngresado<minimo)
        {
        	minimo = numeroIngresado;
        }	

        seguir = confirm("Ingresar otro?");

    }
        txtIdMaximo.value = maximo;
	    txtIdMinimmo.value = minimo;
        */


   //segundo intento
   /*
seguir = true;
IngresoElPrimerNumero = false;
while(seguir == true)
{
    numeroIngresado = prompt("Ingrese un numero: ");
    numeroIngresado = parseInt(numeroIngresado);
    
    if (IngresoElPrimerNumero == false)
    {
        maximo = IngresoElPrimerNumero;
        minimo = IngresoElPrimerNumero;
        IngresoElPrimerNumero = true;
    }
    else    
     {  
       if (numeroIngresado>maximo)
       {
        maximo = numeroIngresado;
       }
           
       if (numeroIngresado<minimo)
       {
        minimo = numeroIngresado;
       }    
     }

    seguir = confirm("Ingresar otro?");

}
    txtIdMaximo.value = maximo;
    txtIdMinimmo.value = minimo;
*/