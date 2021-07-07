/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var num1;
	var num2;
    var Rdo;

    num1= parseInt(document.getElementById("txtIdNumeroUno").value);
    // convertimos "txtIdnumeroUno"a numerica

    num2= parseInt(document.getElementById("txtIdNumeroDos").value);
    // convertimos "txtIdnumeroDos"a numerica

    Rdo= num1 + num2;

    alert("el valor es: " + Rdo);

	
}








/*
 ENTRADA: Dos numeros
 PROCESO: Realizar la suma de los dos 2 numeros
 SALIDA:La suma de los dos numeros


 ENTRADAS
 
    prompt 
    document.getElementByid o id.value
 PROCESOS


 SALIDAS

    document write
    alert
    


  */