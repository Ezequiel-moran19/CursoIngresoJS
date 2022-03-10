/*
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país,
cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
hasta que el usuario quiera e informar al terminar el ingreso por
document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que
 registro esa temperatura.
*/
//PARCIAL REALIZADO EL DIA 17/02/2022 
function mostrar()
{
   let nombrePais;
   let cantiHabitantes;
   let temperatura;
   let seguir;
   let contadorTemperaturaPares;//a) 
   let banderaHabitantes;//b)
   let minimaCantidadDeHabitantes;
   let nombrePaisConMenosHabitantes;
   let contadorPaisesConMasGrados;//c)
   let promedioHabitantes;//d)
   let acumuladorHabitantes;
   let contadorHabitantes;
   let minimaTemperatura;//f)
   let paisMinimaTemperatura;
   let banderaMinimaTemperatura;

   contadorTemperaturaPares= 0;
   contadorPaisesConMasGrados= 0;
   acumuladorHabitantes= 0;
   contadorHabitantes= 0;
   banderaHabitantes= true;  
   banderaMinimaTemperatura= true;
   seguir= true;
   while(seguir== true)
   {
      nombrePais= prompt("Ingrese el nombre del pais");
      cantiHabitantes= prompt("Ingrese la cantidad de habitantes entre 1 y 7000 ");
      cantiHabitantes= parseInt(cantiHabitantes);
      while(cantiHabitantes < 1 || cantiHabitantes > 7000)
      {
      	cantiHabitantes= prompt("Error reingrese la cantidad de habitantes entre 1 y 7000 ");
        cantiHabitantes= parseInt(cantiHabitantes);
      }
      temperatura= prompt("Ingrese la temperatura (entre -50 y 50)");
      temperatura= parseInt(temperatura);
      while(temperatura < -50 || temperatura > 50)
      {
      	temperatura= prompt("Ingrese la temperatura (entre -50 y 50)");
        temperatura= parseInt(temperatura);
      }
      //a) La cantidad de temperaturas pares.
      if (temperatura % 2 == 0)
      {
      	contadorTemperaturaPares++;
      }
      // b) El nombre del pais con menos habitantes
      if (cantiHabitantes < minimaCantidadDeHabitantes || banderaHabitantes == true)
      {
        minimaCantidadDeHabitantes= cantiHabitantes
        nombrePaisConMenosHabitantes= nombrePais;
        banderaHabitantes= false;
      }
      //c) la cantidad de paises que superan los 40 grados.
      if (temperatura > 40)
      {
        contadorPaisesConMasGrados++; 
      }
      //d) el promedio de habitantes entre los paises ingresados
      acumuladorHabitantes+= cantiHabitantes;
      contadorHabitantes++;
      //f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
      if (temperatura < minimaTemperatura || banderaMinimaTemperatura == true) 
      {
      	minimaTemperatura= temperatura;
      	paisMinimaTemperatura= nombrePais;
      	banderaMinimaTemperatura= false;
      }
      seguir= confirm("Desea seguir ingresando??");
   }      
     document.write("Cantidad de temperaturas pares: " + contadorTemperaturaPares + "<br>");
     document.write("Pais con menos habitantes: " + nombrePaisConMenosHabitantes + "<br>");
     document.write("Paises que superan los 40 grados: " + contadorPaisesConMasGrados + "<br>");
     promedioHabitantes= acumuladorHabitantes / contadorHabitantes;
     document.write("Promedio de habitantes entre los paises ingresados: " + promedioHabitantes + "<br>");      
     document.write("Temperatura mínima ingresada: " + minimaTemperatura + ": nombre del pais: " + paisMinimaTemperatura);  
}
