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

   suma = 0;
   contador = 0;
   
   seguir = true;

   while( seguir == true)
   {
   	numeroIngresado = prompt("Ingrese un numero: ");
      numeroIngresado = parseInt(numeroIngresado);
   
    while(numeroIngresado < 0 || numeroIngresado > 100 )
    {
      numeroIngresado = prompt("Error ingrese otro numero: ");
      numeroIngresado = parseInt(numeroIngresado);
    }
     
     suma += numeroIngresado;
     contador++;

     seguir = confirm("quiere seguir? ");

   }	
   txtIdSuma.value= suma;
   txtIdPromedio.value = suma / contador; 


	
}














/*










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
	*/