/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	claveIngresada= prompt("Ingrese la clave");

	while(claveIngresada != "Eze@")
	{
		claveIngresada= prompt("Error... reingrese la clave");
	}
	alert("Ingreso al sistema ");
}
/*
var claveIngresada;

	claveIngresada = prompt("Ingrese el numero clave");

	while (claveIngresada != "utn750") 
	{
      claveIngresada = prompt("error.. reingrese el numero clave");

	}
	alert("Ingreso al sistema");
	*/