/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
//tp 10 bis
function mostrarAumento()
{
    var importeIngresado;
    var descuentoIngresado;
    var resultado;

    importeIngresado = txtIdImporte.value;
    importeIngresado = parseInt(importeIngresado);
    descuentoIngresado = prompt(" Ingrese el porcentaje de descuento ");
    descuentoIngresado = parseInt(descuentoIngresado);
    
    descuentoIngresado = importeIngresado * descuentoIngresado/100;
    resultado = importeIngresado - descuentoIngresado;

    txtIdResultado.value = resultado;
}


/*
    var importe;

    var resultado; 

    var descuento;

    importe=txtIdImporte.value;
    
    importe=parseInt(importe);
    //parseo el importe

    descuento= importe * 0.25;
    //de esta manera multiplico el importe por el 0.25 ---> (25%) 

   resultado= importe - descuento;
   // con esta operacion podemos restar el importe con el descuento para poder obtener el 25% 

   document.getElementById ("txtIdResultado").value = resultado
  // para que resultado impacte en el input tengo que poner el resultado al final
  
  */