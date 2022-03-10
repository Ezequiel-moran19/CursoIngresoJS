/*
En el ingreso a un viaje en avion nos solicitan 
nombre , edad, sexo("f" o "m") y 
estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años),
tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
// PARCIAL REALIZADO EL 14/2022 FINALIZADO, FALTA VERIFICAR..
/*
function mostrar()
{
   let nombre;
   let edad;
   let genero;
   let estadoCivil;
   let temperaturaCorporal;
   let i;

   let maximaTemperatura;
   let nombreMayorTemperatura;
   let banderaMaximaTemperatura;

   let contadorMayorEdadViudo;
   let contadorDeTemepratura;
   let contadorSolteros;
   let acumuladorEdadSolteros;
   let promedioEdadSolteros;

   contadorSolterosOViudos= 0;
   
   contadorSolteros= 0;
   acumuladorEdadSolteros= 0;

   contadorDeTemepratura= 0;

   contadorMayorEdadViudo= 0;

   banderaMaximaTemperatura= true;

   i= true;

   while(i == true)
   {
      nombre= prompt("Ingrese el nombre del pasajero");
   
	     edad= prompt("Ingrese la edad del pasajero");
	     edad= parseInt(edad);
	  while(edad < 0)
	  {
	     edad= prompt("Error reingrese la edad del pasajero");
	     edad= parseInt(edad);
	  }
	     genero= prompt("Ingrese un genero");
	  while(!(genero == "f" || genero == "m"))
	  {
	     genero= prompt("Error reingrese el genero del pasajero");
	  }
	     estadoCivil= prompt("Ingrese el estado civil del pasajero");
	  while(!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo"))
	  {
	  	 estadoCivil= prompt("Error reingrese el estado civil del pasajero");
	  }
	      temperaturaCorporal= prompt("Ingrese la temperatura corporal del pasajero");
         temperaturaCorporal= parseInt(temperaturaCorporal);
     while(temperaturaCorporal < 34 && temperaturaCorporal > 41)
     {
       temperaturaCorporal= prompt("Error... reingrese la temperatura corporal del pasajero");
       temperaturaCorporal= parseInt(temperaturaCorporal);
    }
       if (temperaturaCorporal > maximaTemperatura || banderaMaximaTemperatura== true)
      {//a) El nombre de la persona con mas temperatura.
      	 maximaTemperatura= temperaturaCorporal;
      	 nombreMayorTemperatura= nombre;
      	 banderaMaximaTemperatura= false;
      }

       if (edad >= 18)
       {//b) Cuantos mayores de edad estan viudos
       	  if (estadoCivil == "viudo")
       	  {
             contadorMayorEdadViudo++;
       	  }
       }
       
       if (genero == "m") 
       {//c) La cantidad de hombres que hay solteros o viudos.
          if (estadoCivil != "casado")
          {
          	contadorSolterosOViudos++;
          }
       }
       
       if (edad > 60) 
       {//d) cuantas personas de la tercera edad( mas de 60 años), tienen mas de 38 de temperatura
          if (temperaturaCorporal > 38) 
          {
             contadorDeTemepratura++;
          }
       } 
       
       if (genero == "m")
       { //e) El promedio de edad entre los hombres solteros.
          if (estadoCivil == "soltero")
          {
             acumuladorEdadSolteros+= edad;
             contadorSolteros++;
          }
       }
       
      i= confirm("Desea seguir ingresando datos?");
   }
document.write("Mayores de edad viudos: " + contadorMayorEdadViudo + "<br>");//PUNTO A
document.write("Cantidad de hombres solteros o viudos: " + contadorSolterosOViudos + "<br>");//PUNTO B
document.write("Personas de la tercera edad con mas de 38 grados de temperatura: " + contadorDeTemepratura + "<br>");//PUNTO C
document.write("El nombre de la persona con mas temperatura es: " + nombreMayorTemperatura + " y la temeperatura es " + maximaTemperatura + " grados" + "<br>");//PUNTO D
promedioEdadSolteros= acumuladorEdadSolteros / contadorSolteros;
document.write("Promedio de edad entre los hombres solteros: " + promedioEdadSolteros);//PUNTO E
}
*/
   