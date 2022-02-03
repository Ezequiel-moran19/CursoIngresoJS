
function mostrar() //*VERSION EZE Y NATI LUN 09/08
{
   var nota;
   var nombre;
   var materia;
   var i;
   //A
   var minimaNota;
   var nombreDeAlumnoConMinimaNota;
   //B
   var maximaNota;
   var materiaMaximaNota;
   //C
  var acumuladorNotaLectura;
  var contadorLectura;
  var promedioNotasLectura;
   //D
  var contadorMatematica;
  var contadorProgramacion;
  var contadorGeneral;



  contadorLectura=0;
  contadorMatematica=0;
  contadorProgramacion=0;
  contadorGeneral=0; //se reemplazaria por i o directamente poniendo 10
   

  acumuladorNotaLectura= 0;
  
   //minimaNota= 0; //esto no lo hace
   //maximaNota= 0; //esto no lo hace

  i= 0;

  while(i<4)
   {
      nombre= prompt("Ingrese un nombre");
      nota= prompt("Ingrese una nota");
       while(isNaN(nota)  || nota <0 || nota >10 )
      {
        nota= prompt("Error, reingrese la nota correcta");
        nota= parseInt(nota);
      }
        materia= prompt("Ingrese una materia");
      while(materia !="matematica" && materia !="lectura" && materia !="programacion") 
      {
        materia= prompt("Error, reingrese la materia");
      }
      //a. Minima nota con el nombre del alumno
       if (nota < minimaNota || i == 0) 
      {
        minimaNota= nota;
        nombreDeAlumnoConMinimaNota= nombre;
     
      }
      //b. La materia con maxima nota.
      if (nota > maximaNota || i == 0) 
      {
        maximaNota= nota;
        materiaMaximaNota= materia;
      
      }  


   switch(materia)
   {
        case "matematica":  
              contadorMatematica ++;
              contadorGeneral ++;
    break;

        case "lectura": //:c.  Promedio de notas para lectura.
            
              acumuladorNotaLectura += nota;
              contadorLectura ++;
              contadorGeneral ++;

        break;
      
        case "programacion":
              
              contadorProgramacion ++;
              contadorGeneral ++;
              
        break;  //d.  Porcentaje de alumnos que rindio cada materia.

      } //FIN DE Switch
 

     i++;  

   }//CIERRA EL WHILE GENERAL

   document.write("El alumno con la nota mas baja es: " +nombreDeAlumnoConMinimaNota+ " y su nota es: " +minimaNota + "<br>");
   document.write("La materia con la maxima nota es: " +materiaMaximaNota+ " y su nota es: " +maximaNota + "<br>");

   //logica de control para mostrar el promedio

   if(contadorLectura != 0)
   {
   	 document.write("El porcentaje de alumnos que rindio lectura es: " +(contadorLectura * 100)/contadorGeneral+ "<br>");
     promedioNotasLectura =  acumuladorNotaLectura/contadorLectura;
     document.write("El promedio de notas de lectura es: " + promedioNotasLectura + "<br>");
   }
   else
   {
      document.write("No hay notas de lectura, por lo que no se pudo calcular el promedio" + "<br>");
   }


   if(contadorMatematica != 0)
   {
   	document.write("El porcentaje de alumnos que rindio matematica es: " + (contadorMatematica * 100)/contadorGeneral+ "<br>");
   }
   else
   {
      document.write("No hay notas de matematica, por lo que no se pudo calcular el promedio" + "<br>");
   }


   if(contadorProgramacion != 0)
   {
   	document.write("El porcentaje de alumnos que rindio Programación es: " +(contadorProgramacion * 100)/contadorGeneral+ "<br>");
   }
   else
   {
      document.write("No hay notas de programacion, por lo que no se pudo calcular el promedio" + "<br>");
   }
  
   

}  //fin FUNCTION



