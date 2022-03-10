function mostrar()
{
	let destino;
	let mensaje;

	destino= txtIdDestino.value;

	switch (destino)
	{
    case "Cataratas":

	    mensaje= "hace calor";

    break;

    case "Bariloche":

	    mensaje= "hace frio";

    break;

    case "Ushuaia":

	    mensaje= "hace frio";

    break;

    case "Mar del plata":

	    mensaje= "hace calor";

    break;
	}
   alert(mensaje);
}
/*
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
	*/