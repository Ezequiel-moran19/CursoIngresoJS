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
   let datosValidos;
   let edadIngresada;
   let sexoIngresado;
   let estadoCivil;
   let sueldoBruto;
   let numeroLegajo;
   let nacionalidad;

          edadIngresada= prompt("Ingrese su edad");
          
       while(edadIngresada < 18 || edadIngresada > 90)
       {
          edadIngresada= prompt("Error... reingrese una edad entre: (18 y 90)");
       }
           sexoIngresado= prompt('"Ingrese el genero: "f" o "m"');
        
        while(!(sexoIngresado == "f" || sexoIngresado == "F" || sexoIngresado == "m" || sexoIngresado == "M"))
        {
           sexo= prompt('"Error... reingrese el genero: "f" o "m"');
        }
        if (sexoIngresado == "m" )
        {
           sexoIngresado= "masculino";
        }
        else
        {
           sexoIngresado= "femenino";
        }
           estadoCivil= prompt("Ingrese su estado civil: 1-soltero, 2-casados, 3-divorciados o 4-viudos");
           
        while(!(estadoCivil == 1 || estadoCivil == 2 || estadoCivil == 3 || estadoCivil == 4))
        {
           estadoCivil= prompt("Ingrese el estado civil correspondiente: soltero, casados, divorciados o viudos");
        }
        if (estadoCivil == 1)
        {
            estadoCivil= "Soltero"
        }else
            if (estadoCivil == 2)
            {
                estadoCivil == "casados"
            }else
                if (estadoCivil == 3)
                {
                    estadoCivil= "divorciados"
                }
                else
                {
                    estadoCivil= "viudos"
                }

           sueldoBruto= prompt("Ingrese su sueldo bruto");

        while(sueldoBruto < 8000)
       {
          sueldoBruto= prompt("Error... el sueldo no puede ser menor que: 8000");
       }
          numeroLegajo= prompt("Ingrese número de legajo, numérico de 4 cifras, sin ceros a la izquierda ");

        while(numeroLegajo < 1000 || numeroLegajo > 9999)
        {
            numeroLegajo= prompt("Error... reingrese número de legajo, numérico de 4 cifras ");
        }
          nacionalidad= prompt("Ingrese su nacionalidad");

        while(nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n")
       {
          nacionalidad= prompt("Error... ingrese la nacionalidad correspondiente");
       }  
       if (nacionalidad == "a")
       {
          nacionalidad= "Argentino";
       }
       else
          if(nacionalidad == "e")
          {
            nacionalidad= "Extranjeros";
          }
          else
          {
            nacionalidad= "nacionalizados";
          }
         
      txtIdEdad.value= edadIngresada;
      txtIdSexo.value= sexoIngresado;
      txtIdEstadoCivil.value= estadoCivil;
      txtIdSueldo.value= sueldoBruto;
      txtIdLegajo.value= numeroLegajo;
      txtIdNacionalidad.value= nacionalidad;
}
 


      