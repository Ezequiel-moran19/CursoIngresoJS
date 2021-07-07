/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  


    var sueldo;

	var resultado; 

	sueldo=txtIdSueldo.value;
    
    sueldo=parseInt(sueldo);
    

    
   resultado= (sueldo * 0,1) + sueldo;
   
   txtIdResultado.value = resultado
   


}
