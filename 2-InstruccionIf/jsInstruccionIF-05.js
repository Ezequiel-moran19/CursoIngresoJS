function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (!(edad >= 13 && edad <= 17))
    {	 
	  alert("la persona no es adolecente");
    } 
	

}
// agregamos el signo ! negacion dentro del if 
// creo una variable, 