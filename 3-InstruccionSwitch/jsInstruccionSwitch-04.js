/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/

function mostrar()
{
	var mesDelAño;
	var mensaje;
	mesDelAño =txtIdMes.value;
	
    switch(mesDelAño)
    {   // destro del case ponemos el valor que va el el switch
        case "Febrero": 
          mensaje = "Este mes tiene 28 dias"; 
        break;
         case "Abril": 
         case "Junio":
         case "Septiembre":
         case "Noviembre":
          mensaje = "Este mes tiene 30 dias"; 
        break;
        // el break termina de ejecutar el bucle...
        default:
           mensaje = "Este mes tiene 31 dias";
        break;
       //utilizamos el default para ejecutar los demas meses
    }  alert(mensaje);



}