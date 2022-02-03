/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado= prompt(sexoIngresado);

	while(sexoIngresado != "m" && sexoIngresado != "f")
	{
		sexoIngresado= prompt("Error ingrese el genero indicado");
	}
	if (sexoIngresado == "m")
	{
		 txtIdSexo.value= "masculino";
	}
	else
	{
		 txtIdSexo.value= "femenino";
	}

   
}
/*
var sexIngresado;
	sexIngresado = prompt("ingrese sexo");

	while(sexIngresado != 'f' && sexIngresado != 'm')
	{
		sexIngresado= prompt("Error, reingrese");
	}

	if(sexIngresado =='f')	
	{	
		txtIdSexo.value = "femenino";
	}
	else

	{
		txtIdSexo.value = "masculino";
	}
*/
/*
let sexoIngresado;

	sexoIngresado= prompt("Ingrese el genero");
    
    while(sexoIngresado != "f" && sexoIngresado != "m")
    {
    	sexoIngresado= prompt("Error :( ingrese un genero valido");
    }
     if (sexoIngresado == "f")
     {
      	txtIdSexo.value = "femenino";
     }
     else
     {
     	txtIdSexo.value = "masculino";
     }
     */