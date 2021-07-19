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

	} alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN