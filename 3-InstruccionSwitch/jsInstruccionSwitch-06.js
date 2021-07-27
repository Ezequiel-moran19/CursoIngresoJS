function mostrar()
{
	var horario;
	var mensaje;
	//tomo la hora
    horario = txtIdHora.value;
    horario = parseInt(horario);
    
	switch (horario)
	{
        case 7: 
	    case 8:
	    case 9:
	    case 10: 
	    case 11: 
	      mensaje = "Es de mañana";
	    break;

        case 12: 
	    case 13:
	    case 14:
	    case 15:
	    case 16:
	    case 17:
	    case 18: 
	    case 19:
	      mensaje = "Es de tarde";
	    break;

	    default:
	      mensaje = "Ya es de noche";
        break;
	} alert(mensaje);

}//FIN DE LA FUNCIÓN