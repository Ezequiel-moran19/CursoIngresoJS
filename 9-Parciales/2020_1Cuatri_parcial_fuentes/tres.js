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
    let nombre;
    let edad;
    let genero;
    let estadoCivil;
    let temperaturaCorporal;
    let maximaTemperatura;
    let nombreMaximaTemperatura;   
    let contadorHombresViudos= 0;
    let contadorViudos= 0;
    let contadorPersonasConFiebre= 0;
    let contadorEdadSolteros= 0;
    let acumuladorEdadSolteros= 0;
    let contadorSolteros= 0;
    let banderaMaximaTemperatura= false;
    let seguir= true;

    while(seguir== true)
    {   
        
        nombre= prompt("Ingrese el nombre ");
        
        edad= prompt("Ingrese la edad");
        edad= parseInt(edad);
        while(isNaN(edad) || edad < 0)
        {
            edad= prompt("Error. reingrese la edad");
            edad= parseInt(edad);
        }
        genero= prompt("Ingrese el genero");
        while(genero != "f" && genero != "m")
        {
            genero= prompt("Error. reingrese el genero");
        }
        estadoCivil= prompt("Ingrese el estado Civil");
        while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
        {
            estadoCivil= prompt("Error. reingrese el estado Civil");
        }
        temperaturaCorporal= prompt("Ingrese la temperatura corporal ");
        temperaturaCorporal= parseInt(temperaturaCorporal);
        while(isNaN(temperaturaCorporal) || temperaturaCorporal < 35 || temperaturaCorporal > 41)
        {
            temperaturaCorporal= prompt("Error. reingrese la temperatura corporal");
            temperaturaCorporal= parseInt(temperaturaCorporal);
        } 
         
         if (temperaturaCorporal > maximaTemperatura || banderaMaximaTemperatura== false)
         {
            maximaTemperatura= temperaturaCorporal;
            nombreMaximaTemperatura= nombre;
            banderaMaximaTemperatura= true;
         }
         
        switch(estadoCivil)
        {
            case "soltero":
            acumuladorEdadSolteros= edad;
            contadorEdadSolteros++;
                  if (genero == "m") 
                  {   
                     contadorSolteros++;
                  }
            break;
            
            case "viudo":         
                 if (genero == "m")
                 {
                    contadorHombresViudos++;
                 }
                 if (edad > 18)
                 { 
                    contadorViudos++;
                 }
            break;  
      
         }

         if (edad > 60)
         {
            if (temperaturaCorporal > 38) 
            {
               contadorPersonasConFiebre++;
            }
         }
            
    seguir= confirm("Desea continuar?");
    }//CIERRE DEL while

    document.write("El nombre de la persona con mas temperatura: " + nombreMaximaTemperatura + "<br>");
    document.write("Cuantos mayores de edad estan viudos: " + contadorViudos + "<br>");
    //c) La cantidad de hombres que hay solteros o viudos.
    document.write("La cantidad de hombres que hay solteros: " + contadorSolteros + " viudos "+ contadorHombresViudos + "<br>");
    document.write("Personas de la tercera edad que tienen mas de 38 de temperatura: " + contadorPersonasConFiebre + "<br>");
    document.write("El promedio de edad entre los hombres solteros " + (contadorEdadSolteros / acumuladorEdadSolteros) + "<br>");
    
   
}


