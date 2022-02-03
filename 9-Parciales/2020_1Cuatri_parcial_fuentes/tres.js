/*Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")
y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar()
{

	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;

	var contadorMayoresEdadViudo;
	var contadorTerceraEdadConTemperatura;
	var contadorHombresSolterosOViudos;
	var contadorHombresSolteros;


	var acumuladorEdad;
	var banderaMayorTemperatura;
	var mayorTemperatura;
	var nombreMayorTemperatura;
	var seguir;

	contadorMayoresEdadViudo =0;
	contadorTerceraEdadConTemperatura =0;
	contadorHombresSolterosOViudos =0;
	contadorHombresSolteros =0;
	mayorTemperatura =0;
	acumuladorEdad =0;
	seguir=true;
	banderaMayorTemperatura=true;


while(seguir==true) 
   {
   	 nombre= prompt("Ingrese un nombre: ");

   	 edad= prompt("Ingrese la edad");
     edad= parseInt(edad);
      while(edad <=0)
      {
        edad= prompt("Error, reingrese un valor válido");
        edad= parseInt(edad);
      }
      sexo= prompt("Ingrese el sexo: f o m ");
      while(sexo !="f" && sexo !="m")
      {
        sexo= prompt("Error, reingrese el sexo");
      }
        
      estadoCivil= prompt("Ingrese el estado civil: ");
          while(estadoCivil !="soltero" && estadoCivil !="casado" && estadoCivil !="viudo")
      {
        estadoCivil= prompt("Error, reingrese el estado civil");
      }

      temperatura= prompt("Ingrese la temperatura");
      temperatura= parseInt(temperatura);

      //DENTRO DEL WHILE, por cada persona ingresada, valido si tiene la mayor temperatura.

       if (temperatura > mayorTemperatura || banderaMayorTemperatura == true) //El nombre de la persona con mas temperatura.
              {
                 mayorTemperatura= temperatura;
                 nombreMayorTemperatura = nombre;
                 banderaMayorTemperatura = false;

              }
 
            if(edad>=18 && estadoCivil =="viudo" ) //b) Cuantos mayores de edad estan viudos
            {	
				contadorMayoresEdadViudo ++;
            } 

               if(estadoCivil !="casado" && sexo == "m") //c) La cantidad de hombres que hay solteros o viudos.
            {	
				contadorHombresSolterosOViudos ++;
            } 

              if(edad >=60 && temperatura >=38) //d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
            {	
				contadorTerceraEdadConTemperatura ++;
            } 

           
             if(sexo == "m" && estadoCivil =="soltero")  //e) El promedio de edad entre los hombres solteros.
            {	
				acumuladorEdad = acumuladorEdad + edad;
				contadorHombresSolteros ++;

            } 

 	seguir= confirm("Quiere seguir? ");

   }//CIERRA EL WHILE GENERAL

   //muestro por fuera del while gral la cantidad de mayores de edad viudos

   document.write("La persona con mayor temperatura es : " + nombreMayorTemperatura+ " con una temperatura de: " + mayorTemperatura +  "<br>"); 
   document.write("La cantidad de mayores de edad viudos es : " + contadorMayoresEdadViudo + "<br>"); 
   document.write("La cantidad de hombres que hay solteros o viudos es : " + contadorHombresSolterosOViudos + "<br>"); 
   document.write("La cantidad de personas de la tercera edad con mas de 38 de temperatura es : " + contadorTerceraEdadConTemperatura + "<br>"); 
   document.write("El promedio de edad entre los hombres solteros : " +  acumuladorEdad / contadorHombresSolteros + "<br>"); 


}//FIN FUNCTION
