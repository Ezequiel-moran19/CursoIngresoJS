/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	
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
     	
}
