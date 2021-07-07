/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var num1;
	var num2;
    var Rdo;

    num1= parseInt(document.getElementById("txtIdNumeroUno").value);
    // convertimos "txtIdnumeroUno"a numerica

    num2= parseInt(document.getElementById("txtIdNumeroDos").value);
    // convertimos "txtIdnumeroDos"a numerica

    Rdo= num1 + num2;

    alert("la suma es: " + Rdo);


}

function restar()
{
	var num1;
	var num2;
    var Rdo;

    num1= parseInt(document.getElementById("txtIdNumeroUno").value);
    // convertimos "txtIdnumeroUno"a numerica

    num2= parseInt(document.getElementById("txtIdNumeroDos").value);
    // convertimos "txtIdnumeroDos"a numerica

    Rdo= num1 - num2;

    alert("la resta es: " + Rdo);

}

function multiplicar()
{ 
	var num1;
	var num2;
    var Rdo;

    num1= parseInt(document.getElementById("txtIdNumeroUno").value);
    // convertimos "txtIdnumeroUno"a numerica

    num2= parseInt(document.getElementById("txtIdNumeroDos").value);
    // convertimos "txtIdnumeroDos"a numerica

    Rdo= num1 * num2;

    alert("la multiplicacion es: " + Rdo);

}

function dividir()
{
	var num1;
	var num2;
    var Rdo;

    num1= parseInt(document.getElementById("txtIdNumeroUno").value);
    // convertimos "txtIdnumeroUno"a numerica

    num2= parseInt(document.getElementById("txtIdNumeroDos").value);
    // convertimos "txtIdnumeroDos"a numerica

    Rdo= num1 / num2;

    alert("la division es: " + Rdo);

	
}

