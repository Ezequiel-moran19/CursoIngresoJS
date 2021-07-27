/*RISING BTL. Empresa dedicada a la toma de datos
 para realizar estadísticas y censos nos pide realizar una carga de datos
 validada e ingresada por ventanas emergentes solamente
  (para evitar hacking y cargas
  maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-
para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros,
 “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edad;
    var sexIng;
    var estCivil;
    var salario;
    var legajo;
    var nacionalidad;

    edad = prompt("Ingrese su edad ");
 	edad = parseInt(edad);
    sexIng = prompt("ingrese sexo ");
    estCivil = prompt("Ingrese su estado civil ");
    salario = prompt("su sueldo es ");
    salario = parseInt(salario);
    legajo = prompt("Ingrese el numero de legajo ");
    legajo = parseInt(legajo);
    nacionalidad = prompt("Ingrese su nacionalidad ");

    while (edad < 18 || edad > 90)// Primer dato...
    {
       edad = prompt("Error, reingrese su edad ");  
       
    }
     txtIdEdad.value= edad;

    while (sexIng != 'f' && sexIng != 'm')// Segundo dato...
    {
        sexIng= prompt("Error, reingrese su sexo ");
    }

         if (sexIng =='f')  
         {   
            txtIdSexo.value = "femenino";
         }
         else
         {
            txtIdSexo.value = "masculino";
         }

    while (estCivil != 1 && estCivil != 2 && estCivil != 3 && estCivil != 4)// Tercer dato....
    {
        estCivil= prompt("Error, reingrese su estado civil ");
    }
        if (estCivil == 1) 
        {
           txtIdEstadoCivil.value = "soltero";
        }
         if (estCivil == 2) 
        {
           txtIdEstadoCivil.value = "casados";
        }
         if (estCivil == 3) 
        {
           txtIdEstadoCivil.value = "divorciados";
        }
        else
        {
           txtIdEstadoCivil.value = "viudos";
        }
        
    while (salario <= 8000)// cuarto dato...
    {
       salario= prompt("Error, reingrese el sueldo ");
 
    } 
         txtIdSueldo.value= salario;

    while (legajo <= 1000)// Quarto dato...
    {
       legajo= prompt("Error, reingrese el numero legajo ");
 
    } 
         txtIdLegajo.value= legajo;

    while (nacionalidad != 'a' && nacionalidad != 'b' && nacionalidad != 'n')// Sexto dato...
    {
        nacionalidad= prompt("Error, reingrese su nacionalidad ");
    }

       if (nacionalidad =='a')  
       {   
           txtIdNacionalidad.value = "Argentino";
       }
       else
       {
        if (nacionalidad =='b')
        {
           txtIdNacionalidad.value = "Extranjeros";
       }
       else
       {
           txtIdNacionalidad.value = "Nacionalizados";
        }
        
       }

      
   
     



}
 /*  
txtIdNacionalidad
txtIdLegajo

  var sexo;
    var estadoCivil;
    var sueldoBruto;
    var legajo;
    var nacionalidad;

   /* edad = txtIdEdad.value;
    edad = parseInt(edad);
    while(edad )

    var f;
    var m;
    sexo = prompt("ingrese f ó m ");

    while (sexo= !=m || !=f)
    {
       document.getElementById("txtIdSexo").value = sexo; 

    }

    



    estadoCivil = txtIdEstadoCivil.value;
    sueldoBruto = txtIdSueldo.value;
    legajo = txtIdLegajo.value;
    nacionalidad = txtIdNacionalidad.value;

    
    sueldoBruto = parseInt(sueldoBruto);
*/

/* 
    edad = txtIdEdad.value;
    edad = parseInt(edad);
    estCivil = estadoCivil.value;

    if (edad > 18 && estCivil == 'Soltero') 
*/