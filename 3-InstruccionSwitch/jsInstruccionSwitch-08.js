function mostrar()
{
	var destinoIngresado;
	var mensaje;
	
	destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado)
	{
	  case "Cataratas":
	  case "Mar del plata":
	  mensaje = "hace calor";
      break;

      default: 
        mensaje = "hace frio";
      break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN