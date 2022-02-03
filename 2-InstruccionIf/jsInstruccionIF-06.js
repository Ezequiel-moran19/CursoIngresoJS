function mostrar()
{
	let edad;

	edad= txtIdEdad.value;

	if (edad > 18)
	{
		alert("Esta persona es mayor de edad");
	}
	else 
		if (edad >= 13 && edad <= 17)
	    {
            alert("Esta persona es adolecente");

	    } 
	    else
	    {
            alert("Esta persona es menor");
	    }


	 

}


//primer intento

/*
var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad > 18)
    {	 
	  alert("la persona es mayor de edad");
    }
    else 
    	if (edad > 12)

	   {
         alert("la persona es adolecente"); 
	   }
       else   
	   {
         alert("Es un niño");
       }
*/