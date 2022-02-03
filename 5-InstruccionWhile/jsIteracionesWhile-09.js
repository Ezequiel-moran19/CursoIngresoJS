/*
Al presionar el botón pedir  números 
hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
    let numeroIngresado;
    let numMaximo;
    let numMinimo;
    let i;
    
    i= 0;

    while(i < 5)
    {
       numeroIngresado= prompt("Ingrese un numero");
       numeroIngresado= parseInt(numeroIngresado);
    
        if (numeroIngresado > numMaximo || i==0)
        {
            numMaximo= numeroIngresado;
        }
        
        if (numeroIngresado < numMinimo || i==0)
        {
            numMinimo = numeroIngresado;    
        }
        
     i++;

   }

    document.write("El maximo ingresado es: " + numMaximo +"<br>");
    document.write("El minimo ingresado es : " + numMinimo);

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
*
/* Ejemplo numero 2
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
*/
/*

   let numeroIngresado;
   let minimo;
   let maximo;
   let primerNumIngresado;
   let seguir;

   seguir= true;
   primerNumIngresado= false;

   while(seguir == true)
   {
      numeroIngresado= prompt("Ingrese un numero");
      numeroIngresado= parseInt(numeroIngresado);
      
     if (numeroIngresado > maximo || primerNumIngresado == false)
     {
         maximo= numeroIngresado;
     }
     if (numeroIngresado < minimo || primerNumIngresado == false)
     {
         minimo= numeroIngresado;
         primerNumIngresado= true;
     }
    seguir= confirm("Desea continuar???");
   }

    document.write("El maximo es: " + maximo + " el minimo es : " + minimo );  
    */
    /*
    let numeroIngresado;
    let numMaximo;
    let numMinimo;
    let primerNumeroIngresado;
    let seguir;

    seguir = true;
    primerNumeroIngresado= false;

    while(seguir == true)
    {
       numeroIngresado= prompt("Ingrese un numero");
       numeroIngresado= parseInt(numeroIngresado);
    
        if (numeroIngresado > numMaximo || primerNumeroIngresado == false)
        {
            numMaximo= numeroIngresado;
        }
        
        if (numeroIngresado < numMinimo || primerNumeroIngresado == false)
       {
            numMinimo = numeroIngresado;
            primerNumeroIngresado= true;
       }
        
     seguir = confirm("Ingresar otro?");

   }

    document.write("El maximo es: " + numMaximo +"<br>");
    document.write("El minimo es : " + numMinimo);
    */