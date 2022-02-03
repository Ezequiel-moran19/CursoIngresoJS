/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
   let numeroUno;
   let numeroDos;
   let resultado;

   numeroUno= parseInt(document.getElementById("txtIdNumeroUno").value);

   numeroDos= parseInt(document.getElementById("txtIdNumeroDos").value);

   resultado= numeroUno + numeroDos;   
   alert("El resultado de la suma es: " + resultado);
}

function restar()
{
  let numeroUno;
  let numeroDos;
  let resultado;

  numeroUno= parseInt(document.getElementById("txtIdNumeroUno").value);

  numeroDos= parseInt(document.getElementById("txtIdNumeroDos").value);
 
  resultado= numeroUno - numeroDos;

  alert("El resultado de la resta es: " + resultado);

}

function multiplicar()
{ 
   let numeroUno;
   let numeroDos;
   let resultado;

   numeroUno= parseInt(document.getElementById("txtIdNumeroUno").value);
 
   numeroDos= parseInt(document.getElementById("txtIdNumeroDos").value);

   resultado = numeroUno * numeroDos;

   alert("El resultado de la multiplicacion es: " + resultado);
	
}

function dividir()
{  
   let numeroUno;
   let numeroDos;
   let resultado;

   numeroUno= parseInt(document.getElementById("txtIdNumeroUno").value);

   numeroDos= parseInt(document.getElementById("txtIdNumeroDos").value);

   resultado= numeroUno / numeroDos;

   alert("El resultado de la division es: " + resultado);
	
	
}
/*
  var num1;
    var num2;
    var Rdo;

    num1= parseInt(document.getElementById("txtIdNumeroUno").value);
    // convertimos "txtIdnumeroUno"a numerica

    num2= parseInt(document.getElementById("txtIdNumeroDos").value);
    // convertimos "txtIdnumeroDos"a numerica

    Rdo= num1 + num2;

    alert("la suma es: " + Rdo);
  


    var num1;
    var num2;
    var Rdo;

    num1= parseInt(document.getElementById("txtIdNumeroUno").value);
    // convertimos "txtIdnumeroUno"a numerica

    num2= parseInt(document.getElementById("txtIdNumeroDos").value);
    // convertimos "txtIdnumeroDos"a numerica

    Rdo= num1 - num2;

    alert("la resta es: " + Rdo);


 var num1;
    var num2;
    var Rdo;

    num1= parseInt(document.getElementById("txtIdNumeroUno").value);
    // convertimos "txtIdnumeroUno"a numerica

    num2= parseInt(document.getElementById("txtIdNumeroDos").value);
    // convertimos "txtIdnumeroDos"a numerica

    Rdo= num1 * num2;

    alert("la multiplicacion es: " + Rdo);

    var num1;
    var num2;
    var Rdo;

    num1= parseInt(document.getElementById("txtIdNumeroUno").value);
    // convertimos "txtIdnumeroUno"a numerica

    num2= parseInt(document.getElementById("txtIdNumeroDos").value);
    // convertimos "txtIdnumeroDos"a numerica

    Rdo= num1 / num2;

    alert("la division es: " + Rdo);
*/
