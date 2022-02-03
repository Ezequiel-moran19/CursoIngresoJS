/*Al selecionar un destino ,
 indicar el punto cardinal de nuestro pais
  en donde se encuentra
 Norte, Sur, Este u Oeste*/
function mostrar()
{
	let destino;
	let mensaje;

	destino = txtIdDestino.value;

	switch(destino)
	{
		case "Bariloche":
        
        mensaje="Oeste";

        break;

        case "Cataratas":

        mensaje= "Norte";

        break;

		case "Mar del plata":

		mensaje= "Este";

		break;

		case "Ushuaia":

		mensaje = "Sur";

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
	  mensaje = "Norte";
     break;
    case "Ushuaia":      
        mensaje = "Sur";
     break;
    case "Mar del plata":
        mensaje = "Este";
     break;
    case "Bariloche":
        mensaje = "Oeste";
     break;
	}
	alert(mensaje);
	*/