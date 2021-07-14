/*
"EXCELENTE" para notas igual a 9 o 10,
"APROB&Oacute;" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{
	var nota;

	nota=  Math.floor(Math.random() * 10) + 1;
	// con esta funcion asignamos el valor random...
	
	if (nota > 8)
	{  	
	alert("EXCELENTE");
    }
    else
    	if (nota > 3 )
   	    {
           alert("aprobo");
   	    }
   	    else 
   	    {
   	    	alert("Vamos, la proxima se puede");
   	    }


}//FIN DE LA FUNCIÓN