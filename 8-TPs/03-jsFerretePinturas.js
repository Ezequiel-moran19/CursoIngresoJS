/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar
 la temperatura en Centígrados con un mensaje concatenado 
(ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar
 la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temFahrenheit;
	let grados;

    temFahrenheit= txtIdTemperatura.value;

    temFahrenheit= parseInt(temFahrenheit);

    grados= (temFahrenheit - 32) * 5 / 9;
    
    alert("la temperatura Fahrenheit equivale a: " + grados + " centígrados");
    
}
function CentigradosFahrenheit ()
{
   let celsius;
   let fahrenheit;
     
    celsius = txtIdTemperatura.value;

    celsius= parseInt(celsius);

    celsius=((celsius * 9)/5) + 32;
	 
	 
	 alert("Los centígrados son equivalente a: " + celsius + " fahrenheit");
  

}
