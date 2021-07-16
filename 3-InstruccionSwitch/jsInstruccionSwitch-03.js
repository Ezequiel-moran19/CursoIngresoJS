/*al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/
function mostrar()
{	
	var mesDelAño;
	var mensaje;
	mesDelAño =txtIdMes.value;
	
    switch(mesDelAño)
    {
        case "Febrero": 
          mensaje = "Este mes no tiene mas de 29 dias"; 
        break;

        default:
           mensaje = "Este mes tiene 30 o mas dias";
        break;

    }
      alert(mensaje);
	


}//FIN DE LA FUNCIÓN