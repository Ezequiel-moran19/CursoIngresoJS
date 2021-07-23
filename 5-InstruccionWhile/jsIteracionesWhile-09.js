/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
var numeroIngresado;
var maximo;
var minimo;
var IngresoElPrimerNumero;
var seguir;


seguir = true;
IngresoElPrimerNumero = false;
while(seguir == true)
{
	numeroIngresado = prompt("Ingrese un numero; ");
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