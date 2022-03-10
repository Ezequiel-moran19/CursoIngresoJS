/*
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".
*/
function mostrar()
{
   let horaDelDia;
   let mensaje;

   horaDelDia= document.getElementById("txtIdHora").value;
   //horaDelDia= parseInt(horaDelDia);
   
   switch(horaDelDia)
   {
   	 case "7":
   	 case "8":
   	 case "9":
   	 case "10":
   	 case "11":

               mensaje= "Es de mañana.";
   	 break;

   	 case "12":
   	 case "13":
   	 case "14":
   	 case "15":
   	 case "16":
   	 case "17":
   	 case "18":
   	 case "19":

               mensaje= "Es de tarde.";
   	 break;

   	 case "20":
   	 case "21":
   	 case "22":
   	 case "23":
   	 case "24":
   	 case "1":
   	 case "2":
   	 case "3":
   	 case "4":
   	 case "5":
   	 case "6":
              
              mensaje= "Es de noche.";
   	 break;
 
     default:      
           	 		mensaje= "la hora no existe.";
     break;      	 
    }       
    alert(mensaje);
   
 }






      












/*
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

        case 12: 
	    case 13:
	    case 14:
	    case 15:
	    case 16:
	    case 17:
	    case 18: 
	    case 19:
	      mensaje = "Es de tarde";
	    break;

	    default:
	      mensaje = "Ya es de noche";
        break;
	} alert(mensaje);
*/
/*
	let horaDelDia;
	let mensaje;

	horaDelDia= txtIdHora.value;

	switch(horaDelDia)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":

		mensaje="Es de mañana.";

		break;

        case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":

		mensaje="Es de tarde.";

		break;

		case "20":
		case "21":
		case "22":
		case "23":
		case "24":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":

		mensaje="Es de noche.";

		break;

		default:

		mensaje= "la hora no existe.";

		break;


	}


*/