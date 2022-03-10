
/* julio y agosto = invierno "abrigate que hace frio"
   septiembre, octubre, noviembre= primavera
    "ya pasamos el frio, ahora hace calor"
   diciembre, enero, fbrero= verano
    "ya pasamos el frio, ahora hace calor"
   marzo,abril,mayo,junio= otoño ""

*/
function mostrar()
{
    let mesesDelAño;
    let mensaje;

    mesesDelAño= document.getElementById("txtIdMes").value;

    switch(mesesDelAño)
    {
       case "Marzo":
       case "Abril":
       case "Mayo":
       case "Junio":
              mensaje= "Falta para el invierno";
       break;

       case "Julio":
       case "Agosto":
              mensaje= "abrigate que hace frio";      
       break;

       default:
              mensaje= "ya pasamos el frio, ahora hace calor";
       break;
    }
    alert(mensaje);

}//FIN DE LA FUNCIÓN
/*
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
   
*/
/*let mesDelAño;
   let mensaje;

   

   switch(mesDelAño)
   { 
      case "Junio":
      case "Julio":
      case "Agosto":

          mensaje= "Abrigate que hace frio.";

      break;

      case "Septiembre":
      case "Octubre":
      case "Noviembre":

          mensaje=  "Falta para el invierno.";

      break;

      case "Enero":
      case "Febrero":
      case "Marzo":

          mensaje= "Ya pasamos el frio, ahora calor!!!.";

      break;

      default:

      mensaje= "llego el otoño";

      break;

   }

     alert(mensaje);

*/




