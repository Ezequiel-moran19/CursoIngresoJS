/*
una agencia de viajes nos piden informar si hacemos viajes a lugares según
 la estación del año estemos, informar si
  "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/
function mostrar()
{ 
  let destino;
  let estacionDelAño;
  let mensaje;

  estacionDelAño= txtIdEstacion.value;
  destino= txtIdDestino.value;
  

  switch(estacionDelAño)
  {
  	case "Invierno":
         switch(destino)
         {
         	  case "Bariloche":
                 mensaje= "Se vieja";
         	  break;
         	  default:
         	       mensaje= "No se viaja";
         	  break;
         }
    break;
    case "Verano":
         switch(destino)
         {
         	  case "Mar del plata":
         	  case "Cataratas":
                 mensaje= "Se viaje";
         	  break;
         	  default:
         	       mensaje= "No se viaja";
         	  break;
         }
    break; 
    case "Otoño":
         switch(destino)
         { 
         	  default:
         	       mensaje= "Todos los viajes disponibles";
         	  break;
         }
    break;
    case "Primavera":
         switch(destino)
         {
            case "Bariloche":
                 mensaje= "Se viaja";
            break;
            default:
                 mensaje= "No se viaja";
            break;           
         }
    break;
  }
    alert(mensaje);
     
}
/*
var estacion; 
	var destino
    var mensaje;

	 estacion = txtIdEstacion.value;
     destino = txtIdDestino.value;

	     switch (estacion)
		  { 
		    case"Invierno":
		    
		     if (destino == "Bariloche")
		    {
		       mensaje = "se viaja ";
		    }nn
		    else
		    {
		       	mensaje = "no se viaja ";
		    }   
		    
		    break;
	       
	        case"Verano":
		    
		     if (destino == "Mar del plata" && "Cataratas")
		     {
		       mensaje = "se viaja ";
		     }
		     else
		     {
		       	mensaje = "no se viaja ";
		     }   	    
		    break;
	       
	       
			  case "Otoño":
			    
			  if (destino)
			  {
		         mensaje = "disponible todos los viajes ";
		      }
			   else
			  {
	           	mensaje = "no se viaja ";
		      }   	    
		    break;
		       
	     
		    case "Primavera":
		    
		     if (destino == "Bariloche")
		     {
		       mensaje = "unico destino habilitado ";
		     }
		     else
		     {
		       	mensaje = "no disponible ";
		     }   
		    
		    break;
	       
	        }
	         alert(mensaje);
	         */