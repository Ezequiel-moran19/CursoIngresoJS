/*
Realizar el algoritmo que permita el ingreso por prompt
de las alturas en centimetros(validar entre 0 y 250),
el sexo. (validar el sexo “f” o “m”)
de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de mujeres que su altura supere 
los 190 centimetros.
*/
//PARCIAL REALIZADO EL 17/02/2022
function mostrar()
{
   let altura;
   let genero;
   let cantidadAltura;//A)
   let acumuladorAltura;
   let promedioAltura;
   let alturaMasBaja;//b)
   let generoDelMasBajo; 
   let contadorDeMujeres;//c) 

   acumuladorAltura= 0;
   contadorDeMujeres= 0;

   for (let i = 0 ; i < 5 ; i ++) 
   {
      altura= prompt("ingrese la altura entre: 0 y 250");
      altura= parseInt(altura);
     
     while(isNaN(altura) || altura < 0 || altura > 250)
     {
        altura= prompt("Error.. reingrese la altura entre: 0 y 250");
        altura= parseInt(altura);
     }
        genero= prompt("Ingrese el genero: “f” o “m” ");
     while(!(genero == "m" || genero == "f"))
     {
        genero= prompt("Error.. reingrese el genero: “f” o “m” ");
     }   

     //b) La altura más baja y el sexo de esa persona.
     if (altura < alturaMasBaja || i == 0)
     {
     	alturaMasBaja= altura;
     	generoDelMasBajo= genero;
     }
     //c) La cantidad de mujeres que su altura supere los 190 centimetros.
     if (genero == "f")
     {   
     	if (altura > 190)
     	{	
           contadorDeMujeres++;
     	}
     }
     //a) El promedio de las alturas totales.
     acumuladorAltura= acumuladorAltura + altura;
     //contadorAltura++; //ESTE CONTADOR ES INNECESARIO YA QUE SE SABE LA CANTIDAD DDE ANTE MANO.. 
   } //FIN DE FOR
     //a) El promedio de las alturas totales.
     promedioAltura= acumuladorAltura / 5;//DIVIDO EL ACUMULADOR POR 5 (LA CANTIDA DE INGRERSOS) ASI OBTENGO EL PROMEDIO... 
     alert("El promedio total de altura es: " + promedioAltura + " cmt." +
     "\nLa altura más baja es: " + alturaMasBaja + " cmt y el genero es: " + generoDelMasBajo +
   	 "\nMujeres con altura superior a 190 centimetros: " + contadorDeMujeres);
}
