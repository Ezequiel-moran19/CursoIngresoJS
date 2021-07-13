function mostrar()
{
    var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

   if (edad>=20)
   {
	  alert("la persona es mayor");
   }

}