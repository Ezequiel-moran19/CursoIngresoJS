function mostrar()
{
	let edad;
	let estadCilvil;

	edad= txtIdEdad.value;
	estadCilvil= estadoCivil.value;

	if (edad > 18 && estadCilvil == "Soltero")
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