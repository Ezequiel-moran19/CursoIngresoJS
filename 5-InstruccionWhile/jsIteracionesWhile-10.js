/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	var numeroIngresado;
	var seguir;
	var negativos;
	var positivos;
	var cantPositivo;
	var cantNegativo;
	var cantCeros;
	var cantPares;

    //inicio la variable de control
	 seguir = true;
    negativos = 0;
    positivos = 0; //inicializo 
    cantPositivo = 0;
    cantNegativo = 0;
    cantCeros = 0;
    cantPares = 0;

	 while(seguir == true)
	 {
        numeroIngresado=prompt("Ingrese un numero ");
        numeroIngresado= parseInt(numeroIngresado);
        
        if (numeroIngresado < 0)// punto 1
        {
        	  negativos = negativos + numeroIngresado;
        	  cantNegativo ++;// punto 3
           
            if (numeroIngresado % 2 == 0)// punto 6
         	{
         		cantPares ++;
         	}
        	            
        }
        if (numeroIngresado > 1)// punto 2
         {
         	positivos = positivos + numeroIngresado;
         	
         	cantPositivo ++;// punto 4

         	if (numeroIngresado % 2 == 0)// punto 6
         	{
         		cantPares ++;
         	}
         }
         if (numeroIngresado == 0)// punto 5
         {
         	cantCeros ++;
         }
       
         
           seguir= confirm("quiere seguir? ");


	 } 

    alert ("la suma de positivos es: " + positivos);
	  alert ("la suma de negativos es: " + negativos);
	  alert ("cantidad de positivos: " + cantPositivo);
	  alert ("cantidad de negativos: " + cantNegativo);
	  alert ("cantidad de ceros es: " + cantCeros);
	  alert("promedio de positivo es: " + positivos / cantPositivo);
    alert("promedio de negativos es: " + negativos / cantNegativo);
    alert("cantidad de Pares es: " + cantPares);
    
}