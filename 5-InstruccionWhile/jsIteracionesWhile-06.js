function mostrar()
{
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
}

/*
entradas: 5 numeros(dentro)

proceso:
          sumar los 5 numeros(dentro)
          calcular el promedio(fuera): suma/cantidad

la suma:  la suma (fuera)
          el promedio (fuera)         
*/