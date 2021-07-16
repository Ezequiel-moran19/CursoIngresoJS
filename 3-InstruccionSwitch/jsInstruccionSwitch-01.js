function mostrar()
{
	var mesDelAño;
    mesDelAño =txtIdMes.value;

    var mensaje;

    switch(mesDelAño)
    {
    	case "Enero":
    	   mensaje = "que comiences bien el año!!!.";
        break;

        case "Marzo":
    	   mensaje = "a clases!!!.";
        break;

        case "Julio":
    	   mensaje = "se vienen la vacaciones!!!.";
        break;

         case "Diciembre":
    	   mensaje = "felices fiestas!!!.";
        break;
        default:
           mensaje = "No hay nada especial este mes";
        break;

    }
      alert(mensaje);
	



}






//FIN DE LA FUNCIÓN







/*
 switch(x)
 {
 	case 1;

 	break;
 	case 2;

 	break;
 	case 3;
    
    default;

    breack;
 }
 
    

    */


