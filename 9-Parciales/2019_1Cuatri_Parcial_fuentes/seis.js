/*
Se ingresa una hora.
Si está entre las 6 y las 11 mostrar:"es de mañana",
si es desde las 12 a las 19: "es de tarde",
de lo contrario informar que es de noche.
Informar si la hora no es válida.
Si es de noche y la hora es menor a 24 mostrar se
debe agregar el mensaje : "a dormir".
*/
//FALTA RESOLVER
function mostrar()
{
   let horaDelDia;
   let horario;
   let mensaje;
   
   horaDelDia= document.getElementById("laHora").value;
   horaDelDia= parseInt(horaDelDia);
   horario= parseInt(horario);
   switch(horaDelDia) 
   {
      case horario:
	           if (horario >=  6 || horario <= 11) 
	           {
	              mensaje= "Es de mañana";
	           }
	           else
	           {
	               if (horario >=  12 || horario <= 19) 
		            {
		              mensaje= "Es de tarde";
		            }
		            else
		            {
		           	  if (horario >= 20 || horario <= 24) 
		           	  {
		           	  	mensaje= "A dormir";
		           	  }
		           	  else
		           	  {
		           	    mensaje= "Esa hora no existe";
		           	  }
		           }
	           }
      break;
      
   }
      alert(mensaje);
}
