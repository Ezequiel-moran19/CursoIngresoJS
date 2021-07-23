/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/
/* julio y agosto = invierno "abrigate que hace frio"
   septiembre, octubre, noviembre= primavera "ya pasamos el frio, ahora hace calor"
   diciembre, enero, fbrero= verano "ya pasamos el frio, ahora hace calor"
   marzo,abril,mayo,junio= otoño ""

*/
function mostrar()
{
	var mesDelAño;
	var mensaje;
	mesDelAño =txtIdMes.value;
	
    switch(mesDelAño)
    {
        case "Marzo":
        case "Abril":
        case "Mayo":
    	  case "Junio":
    	   mensaje = "falta para el invierno";
        break;
    	   
        case "Julio":
        case "Agosto":   
           mensaje = "falta para el invierno";
        break;

        default:
           mensaje = "ya pasamos el frio, ahora hace calor";
        break;

    }
      alert(mensaje);
	



}//FIN DE LA FUNCIÓN