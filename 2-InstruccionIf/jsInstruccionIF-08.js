function mostrar()
{
	let edad;
	let estadcilvil;

	edad= txtIdEdad.value;
	estadcilvil= estadoCivil.value;

	if (estadcilvil > 18 && estadcilvil == "Soltero")
	{
		alert("Es soltero y no es menor");
	}



}
/*
var edad;
    var estCivil;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	estCivil = estadoCivil.value;

    if (edad > 18 && estCivil == 'Soltero') 
    {  
	   alert("Es soltero y no es menor");
    }

*/