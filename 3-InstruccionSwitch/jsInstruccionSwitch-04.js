/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/

function mostrar()
{
	let mesDelAño;
    let mensaje;

    mesDelAño= txtIdMes.value;

    switch(mesDelAño) 
    {
        case "Febrero":

        mensaje= "tiene 28 días.";

        break;

        case "Abril":
        case "Julio":
        case "Septiembre":
        case "Noviembre":

        mensaje= "tiene 30 días.";

        break;

        default:

        mensaje = "tiene 31 días.";

        break;
    }
 
       alert(mensaje);
  
}

/*
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
    }  alert(mensaje);*/