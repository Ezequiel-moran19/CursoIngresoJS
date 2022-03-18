/*
Realizar el algoritmo que permita ingresar el nombre
de un
estudiante, la edad (validar),
el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar
el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino
*/

function mostrar()
{
	let nombre;
	let edad;
	let genero;
	let nota;
	let seguir;
    let contadorAprobados=0;
    let contadorNotasGeneroM=0;
    let contadorNotasGeneroF=0;
    let contadorNotasMenorEdad=0;
	let contadorNotasMayoresEdad=0;
	let contadorNotasAdolecentes=0;
	let acumuladorNotasGeneroF=0;
	let acumuladorNotasGeneroM=0;
	let acumuladorNotasMenorEdad=0;
	let acumuladorNotasMayoresEdad=0;
	let acumuladorNotasAdolecentes=0;
	
	seguir= true;

	while(seguir == true)
	{
		nombre= prompt("Ingrese nombre");

		edad= prompt("Ingrese la edad");
		edad= parseInt(edad);
		while(isNaN(edad) || edad < 0)
		{
			edad= prompt("Error.. reingrese la edad");
		    edad= parseInt(edad);
		}
		genero= prompt("Ingrese el genero");
		while(genero != "f" && genero != "m")
		{
			genero= prompt("Error.. reingrese el genero");
		}
		nota= prompt("Ingrese la nota");
		nota= parseInt(nota);
		while(isNaN(nota) || nota < 0 || nota > 10)
		{
			nota= prompt("Error.. reingrese la nota");
		    nota= parseInt(nota);
		}
        
        switch(genero)
        {
        	case "f":
            contadorNotasGeneroF++;
            acumuladorNotasGeneroF+= nota;
        	break;

        	case "m":
        	contadorNotasGeneroM++;
        	acumuladorNotasGeneroM+= nota;
        	if(nota>6)
        	{
               contadorAprobados++;
        	}
        	break;
        }

        if (edad <= 13 && edad >=7)
        {
        	contadorNotasMenorEdad++;
        	acumuladorNotasMenorEdad+= nota;
        }else if (edad > 13 && edad < 18)
        {
            contadorNotasAdolecentes++;
            acumuladorNotasAdolecentes+=nota;
        }else
        {
            contadorNotasMayoresEdad++;
            acumuladorNotasMayoresEdad+=nota;
        }

     seguir= confirm("Desea continuar?");
	}
  document.write("cantidad de varones aprobados: " + contadorAprobados + "<br>");
  document.write("Promedio de notas de menores: " + (acumuladorNotasMenorEdad / contadorNotasMenorEdad) + "<br>");
  document.write("Promedio de notas de adolescentes: " + (acumuladorNotasAdolecentes / contadorNotasAdolecentes) + "<br>");
  document.write("Promedio de notas de mayores: " + (acumuladorNotasMayoresEdad / contadorNotasMayoresEdad) + "<br>");
  document.write("Promedio de notas genero femenino: " + (acumuladorNotasGeneroF / contadorNotasGeneroF) + "<br>");
  document.write("Promedio de notas genero masculino: " + (acumuladorNotasGeneroM / contadorNotasGeneroM) + "<br>");
}
