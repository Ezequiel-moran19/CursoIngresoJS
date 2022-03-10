/*
Al presionar el botón pedir 5 números e
 informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numeroIngresado;
	let i;
	let acumuladorSuma;
	let promedio;


	i= 0;
   acumuladorSuma= 0;

	while(i < 5)
	{
      numeroIngresado= prompt("Ingrese un numero");
      numeroIngresado= parseInt(numeroIngresado);

      acumuladorSuma += numeroIngresado;
      i ++; 
	}
	  //promedio= acumuladorSuma/5;//DIVIDO EL ACUMULADOR POR LA CANTIDAD DE INGRESOS
     txtIdSuma.value= acumuladorSuma;
     txtIdPromedio.value= acumuladorSuma / 5;
}
// 
/*
entradas: 5 numeros(dentro)

proceso:
          sumar los 5 numeros(dentro)
          calcular el promedio(fuera): suma/cantidad

la suma:  la suma (fuera)
          el promedio (fuera)         
*/
/*
var contador;
	var suma;
	var promedio;
	var numeroIngresado;

	contador = 0;
	suma = 0;
	
	while(contador<5)
   {
      numeroIngresado = prompt("ingrese un numero");
    
      numeroIngresado= parseInt(numeroIngresado);

      suma += numeroIngresado;
      //suma = suma + numeroIngresado
      contador ++;
      //contador = contador + 1;
      //contador+= 1;

   }
	txtIdSuma.value= suma;
	txtIdPromedio.value= suma/contador;
	*/
	/*
	let numeroIngresado;
	let suma; 
	let contador;

	contador= 0;
	suma= 0;

	while(contador < 5)
	{	
	   numeroIngresado= prompt("Ingrese un numero");
	   numeroIngresado= parseInt (numeroIngresado);

	   suma += numeroIngresado;
	   contador ++;
	}
    
    txtIdSuma.value= suma;
	 txtIdPromedio.value= suma/contador
	 */