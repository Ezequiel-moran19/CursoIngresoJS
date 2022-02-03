/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado 
(ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let centigrados;
	let fahrenheit;
	let resultado;

	fahrenheit = parseInt(fahrenheit);
    centigrados = parseInt(centigrados);

    fahrenheit= fahrenheit - 32;
    centigrados= 5 / 9.0;
    resultado= (fahrenheit -32) * 5 / 9.0;

    document.write("32 fahrenheit son " + resultado + " centigrados ");


}

// txtIdTemperatura

/*var fahrenheit;
	var resultado;

	resultado = txtIdTemperatura.value; 
    
    fahrenheit = parseInt(fahrenheit);
    grados = parseInt(grados);    
    
    fahrenheit = fahrenheit - 32;
	grados =  5 / 9.0;
	resultado = (fahrenheit - 32) *5 / 9.0;

	alert("32 fahrenheit son " + resultado + " centigrados ");
*/
/*
	var grados;
	var resultado;

	grados = txtIdTemperatura.value;

    grados = parseInt(grados);

	resultado = (grados - 32 ) * 5 /9.0;
	
	alert(grados + " fahrenheit son " + resultado + " centigrados");

	
}

function CentigradosFahrenheit () 
{
	var grados;
	var resultado;

	grados = txtIdTemperatura.value;

    grados = parseInt(grados);

	resultado = (grados * 5 /9.0) + 32;
	
	alert(resultado + " centigrados son "  + grados + " fahrenheit ");
*/