/*
Ejercicio While 07 V1 (Realizar en los archivos  del ejercicio 07 del WHILE)

Realizar el algoritmo que permita 
  el ingreso por prompt de
  1-alturas en centimetros  (validar entre 0 y 250) ,
  2-la edad (validar)
  3-temperatura(validar)
  4-el sexo(validar el sexo “f” o “m” o "nb")
  5-nota (validar)
  6-nombre
  de estudiantes de la UTN hasta que el usuario quiera, 

1ERA PARTE
  informar :
  a)Cuántas mujeres hay .
  b)Cuántos con fiebre y cuantos sin fiebre.
  c)el promedio de edad por sexo.

2da PARTE
informar :
d)el primer alumno aprobado
e)el nombre y edad la máxima temperatura
f)la altura y nota del no binario mas joven

3ra PARTE
informar :
g)el nombre de la mujer más alta de las que aprobó
h)el porcentaje de personas que desaprobaron sobre el total
i)el nombre del primer hombre, que mide menos de 160 cm y está desaprobado.

*/
function mostrar()
{
   let altura;
   let edad;
   let temperatura;
   let genero;
   let nota;
   let nombre;
   let seguir;
   //*1ERA PARTE
   let contadorFemenino;
   let contadorConFiebre;
   let contadorSinFiebre;
   let acumuladorEdadF;
   let contadorMasculino;
   let contadorNb;
   let acumuladorEdadM;
   let acumuladorEdadNb; 
   let banderaMaximaTemperatura;//2da PARTE
   let primerAprobado;
   let maximaTemperatura;
   let edadMaximaTemperatura;
   let nombreMayorTemperatura;
   let elPrimerAlumnoAprobado;
   let edadNbMasJoven;
   let notaNbMasJoven;
   let alturaNbaAsJoven;
   //3ra PARTE
   let mujerMasAlta;
   let nombreMujerMasAlta;
   let procentajeDesaprobados;
   let nombrePrimerMasculino;
   let contadorDesaprobados;
   let contadorAlumnos;
   let mujerConMasAltura;
   let notaAlumnoDesaprobado;
   let notaMujerMasAlta;

   contadorNb= 0;
   contadorFemenino= 0;
   contadorMasculino= 0;
   contadorSinFiebre= 0;
   contadorConFiebre= 0;
   acumuladorEdadF= 0;
   acumuladorEdadM= 0;
   acumuladorEdadNb= 0;
   contadorAlumnos= 0;
   contadorDesaprobados= 0;
   mujerConMasAltura= false;
   primerAprobado= false;
   banderaMaximaTemperatura= false;

   seguir= true;

   while(seguir== true)
   {
      altura= prompt("Ingrese la altura");
      altura= parseInt(altura);
      while(isNaN(altura) || altura < 0 || altura > 250){
          altura= prompt("Error reingrese la altura entre 0 y 250");
          altura= parseInt(altural); }

      edad= prompt("Ingrese la edad");
      edad= parseInt(edad);
      while(isNaN(edad) || edad < 0){
          edad= prompt("Error reingrese la edad");
          edad= parseInt(edad); }

      temperatura= prompt("Ingrese la temperatura");
      temperatura= parseInt(temperatura);
      while(isNaN (temperatura) ||temperatura < 0 ||temperatura > 250){
          temperatura= prompt("Error reingrese latemperatura");
          temperatura= parseInt(temperatura); }

      genero= prompt("Ingrese el genero f o m o nb");
      while(genero != "f" && genero != "m" && genero != "nb"){
          genero= prompt("Error reingrese el genero f o m o nb"); }

      nota= prompt("Ingrese la nota");
      nota= parseInt(nota);
      while(isNaN (nota) ||nota < 0 ||nota > 10){
          nota= prompt("Error reingrese la nota entre 1 y 10");
          nota= parseInt(nota); }

      nombre= prompt("Ingrese el nombre");
  
        switch(genero)
        { 
          case "f":
          contadorFemenino++;
          acumuladorEdadF+=edad;

          if (mujerConMasAltura== false || altura > mujerMasAlta) 
          {
              if (nota >= 7)
              {
                 mujerMasAlta= altura;
                 nombreMujerMasAlta= nombre;
                 notaMujerMasAlta= nota;
                 mujerConMasAltura= true;
              }              
          }      
          break;

          case "m":
          contadorMasculino++;
          acumuladorEdadM+=edad;
          
          if (contadorMasculino == 1) 
          {
             if (altura < 160)
             {
                nombrePrimerMasculino= nombre;
                notaAlumnoDesaprobado= nota;
             }
          }
         
          break;
          case "nb":
          contadorNb++;
          acumuladorEdadNb+=edad;
        
          if (edad < edadNbMasJoven || contadorNb == 1)
          {
             edadNbMasJoven= edad;
             alturaNbaAsJoven= altura;
             notaNbMasJoven= nota;
          }
          break;
        }//CIERRE DEL SWITCH

          if (temperatura >= 37)
          {
             contadorConFiebre++;
          }
          else
          {
             contadorSinFiebre++;
          }
          //d)el primer alumno aprobado
          if (primerAprobado == false) 
          {
            if (nota > 7) 
            {
               elPrimerAlumnoAprobado = nombre;
               primerAprobado=true;
             }
               
          }
          //e)el nombre y edad la máxima temperatura
          if (temperatura > maximaTemperatura || banderaMaximaTemperatura == false) 
          {
            maximaTemperatura= temperatura;
            nombreMayorTemperatura= nombre;
            edadMaximaTemperatura= edad;
            banderaMaximaTemperatura= true;
          }
           
          if (nota < 7) 
          {
             contadorDesaprobados++;
          }
         contadorAlumnos++;

      seguir= confirm("desea continuar?");
   }//CIERRE DE WHILE GENERAL
   //PRIMERA PARTE
   document.write("a)Hay " + contadorFemenino + " mujeres<br>");
    document.write("b)Cantidad de personas con fiebre: " + contadorConFiebre + "<br>");
     document.write("b)Cantidad de personas sin fiebre: " + contadorSinFiebre + "<br>");
      document.write("c)Promedio de edad femenino: " + ((acumuladorEdadF / contadorFemenino))  + "<br>");
       document.write("c)Promedio de edad masculino: " + ((acumuladorEdadM / contadorMasculino)) + "<br>");
        document.write("c)Promedio de edad Nb: " + ((acumuladorEdadNb / contadorNb)) + "<br>");
           //SEGUNDA PARTE
           document.write("d)El primer alumno aprobado : " + elPrimerAlumnoAprobado + "<br>");
            document.write("e)El nombre de la persona con mas temperatura: " + nombreMayorTemperatura + ", y tiene " + edadMaximaTemperatura + "años.<br>");
             document.write("f)La altura del no binario mas joven es: " + alturaNbaAsJoven + "ctm, y la nota: " + notaNbMasJoven + "<br>");
                 //TERCERA PARTE
                 document.write("g)Nombre de la mujer más alta de las que aprobó: " + nombreMujerMasAlta + "<br>");
                  procentajeDesaprobados= (contadorDesaprobados * 100) / contadorAlumnos;
                   document.write("h)Porcentaje de personas que desaprobaron es: " + procentajeDesaprobados + "% sobre el total.<br>");
                    document.write("i)Nombre del primer hombre con menos de 160 cm y está desaprobado: " + nombrePrimerMasculino + "<br>");

}































 /*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
  /*
  let numeroIngresado;
  let seguir;
  let acumuladorDeSuma;
  let promedio;
  let contador;

  seguir= true;
  acumuladorDeSuma= 0;
  contador= 0;

  while(seguir == true)
  {
    numeroIngresado= prompt("Ingrese un numero");
    numeroIngresado= parseInt(numeroIngresado);
   
    while(numeroIngresado < 0 || numeroIngresado > 100)
    {
      numeroIngresado= prompt("Error reingrese un numero");
      numeroIngresado= parseInt(numeroIngresado);
    }

    acumuladorDeSuma+= numeroIngresado;
    contador ++;
    seguir= confirm("Desea continuar");
  }
   promedio= acumuladorDeSuma / contador;
   txtIdSuma.value= acumuladorDeSuma;
   txtIdPromedio.value = promedio;
  */
/* variables para validacion
   let altura;
   let edad;
   let genero;
   let temperatura;
   let nota;
   let nombre;
   //1ERA PARTE
   let contadorAltura;//a)REALIZADO
   let acumuladorAltura;
   contadorAltura= 0;
   acumuladorAltura= 0;
   let contadorF;//b)REALIZADO
   let contadorM;
   let contadorNb;
   contadorF= 0;
   contadorM= 0;
   contadorNb= 0;
   let contadorAprobados;//c)REALIZADO
   contadorAprobados= 0;
   let contadorAlturaMujer;//d)REALIZADO
   contadorAlturaMujer= 0;
   //2da PARTE
   let generoConMasAlumnos;//e)REALIZADO
   let nombrePersonaMasAlta;//f)REALIZADO
   let personaMayorAltura;
   //3ra PARTE
   let nombrePrimeraAlumnaAprobada;//h)REALIZADO
   let primerMujerAprobada;                              
   let acumuladorAlturaDeAprobados;//i)REALIZADO
   acumuladorAlturaDeAprobados= 0;
   let nombrePrimerMasculino;//j)//REALIZADO
   let alumnoMasculinoDesaprobado;
   //4ta PARTE
   let porcentajeDeAprobados;//k)REALIZADO
   let notaMasAlta;//l)REALIZADO
   let nombreDeMasculinoConMasAtura;
   let porecenajePersonasConFiebre//m)RESUELTO PERO CON DUDAS..
   let contadorPersonasConFiebre;
   let contadorEdadMayores;
   contadorPersonasConFiebre= 0;
   contadorEdadMayores= 0;
   let notaMaxima;//l)RESOLVI LA MAXIMA NOTA, FALTA RESOLVER LO DEMAS.
   let nombreMasculinoMasAlto;

  for (let i = 0; i < 5; i++)//For general...
  { 
     altura= prompt("Ingrese la altura");
     altura= parseInt(altura);
     
    while(isNaN(altura) || altura < 0 || altura > 250)
    {
      altura= prompt("Error reingrese la altura");
      altura= parseInt(altura);
    }
      edad= prompt("Ingrese la edad");
      edad= parseInt(edad);
    while(isNaN(edad) || edad < 0 )
    {
      edad= prompt("Error reingrese la edad");
      edad= parseInt(edad);
    }
      temperatura= prompt("Ingrese la temperatura");
      temperatura= parseInt(temperatura);

    while(isNaN(temperatura) || temperatura < 35 || temperatura > 41)
    {
      temperatura= prompt("Error reingrese la temperatura");
      temperatura= parseInt(temperatura);
    }
      genero= prompt("Ingrese el genero f, m, nb "); 

    while(genero != "f" && genero != "m" && genero != "nb")
    {
      genero= prompt("Error reingrese el genero: f, m, nb ");
    } 
      nota= prompt("Ingrese la nota");
      nota= parseInt(nota);

    while(isNaN(nota) || nota < 0 || nota > 10)
    {
      nota= prompt("Error reingrese la nota");
      nota= parseInt(nota);
    }
      nombre= prompt("Ingrese el nombre");
     //FIN DE LAS VALIDACIONES.
    //a)El promedio de las alturas totales.
    acumuladorAltura= acumuladorAltura + altura;
    contadorAltura++;
    //b)Cantidad de personas de cada sexo.
    switch(genero)
    {
       case "f":
               contadorF++;
               //d)La cantidad de mujeres que su altura supere los 190 centímetros.
               if (altura > 190)
               {
                 contadorAlturaMujer++;
               }//h)el nombre de la primer mujer aprobada              
               if (contadorF == 1)
               {
                  primerMujerAprobada= nota;
                  nombrePrimeraAlumnaAprobada= nombre;          
               }
       break;

       case "m":
               contadorM++;
//j)el nombre del primer hombre, que mide menos de 160 cm y esta desaprobado
                if (contadorM == 1)
               {
                 if (altura < 160)
                 {
                    nombrePrimerMasculino= nombre;//El nombre del primer hombre
                    alturaAlumnoMasculinoMasBaja= altura;//que mide menos de 160 cm
                    alumnoMasculinoDesaprobado= nota;//y esta desaprobado
                 }
               }
       break;

       case "nb":
                contadorNb++;
       break;
    }
     //c)Cantidad de aprobados(más de 6)
     if (nota > 6)
     {
       contadorAprobados++;
     //i) la altura promedio de los aprobados
       acumuladorAlturaDeAprobados+= altura;
     }
     //f)el nombre de la persona más alta 
     if (altura > personaMayorAltura || i== 0)
     {
        personaMayorAltura= altura;
        nombrePersonaMasAlta= nombre;
     }
//m)Qué porcentaje hay de personas con fiebre mayores a 50 años,*sobre los que tienen fiebre.*y también sobre el total de Alumnos.
     if (temperatura > 37)
     { 
       if (edad > 50)
       {
          contadorEdadMayores++;
          contadorPersonasConFiebre++;
       }
     }
//l) La nota más alta y el nombre  del primer varón más altode 200cm (VER porque entra en conflicto)
     if (nota > notaMaxima || i == 0)
     {
        notaMaxima= nota;
     }

 }//fin del For...
   //a)El promedio de las alturas totales.
   document.write("a) El promedio de las alturas: " + acumuladorAltura / contadorAltura + "<br>");
   //b)Cantidad de personas de cada sexo.
   document.write("b) Cantidad: " + contadorF + " genero: Femenino.<br>");
   document.write("b) Cantidad: " + contadorM + " genero: Masculino<br>");
   document.write("b) Cantidad: " + contadorNb + " genero Nobinario.<br>");
   //c)Cantidad de aprobados(más de 6)
   document.write("c) Cantidad de alumnos aprobados " + contadorAprobados + "<br>");
   //d)La cantidad de mujeres que su altura supere los 190 centímetros.
   document.write("d) Mujeres con altura superior los 190 Cmt: " + contadorAlturaMujer + "<br>");
  //e)Que sexo tiene mas alumnos
  if (contadorF > contadorM || contadorF > contadorNb) 
  {
     generoConMasAlumnos= "Femenino"
  } 
  else
  {
    if (contadorM > contadorNb) 
    {
      generoConMasAlumnos= "Masculino"
    }
    else
    {
      generoConMasAlumnos= "Nobinario"
    }
  }
  document.write("e) El genero que tiene mas alumnos es: " + generoConMasAlumnos + "<br>");//e)
  //f)el nombre de la persona más alta.
  document.write("f) Nombre de la persona más alta: " + nombrePersonaMasAlta + "<br>");//f)
  //h)el nombre de la primer mujer aprobada
  document.write("h) El nombre de la primer mujer aprobada es: " + nombrePrimeraAlumnaAprobada + "<br>");
  //i) la altura promedio de los aprobados
  document.write("i) Altura promedio de los aprobados es: " + acumuladorAlturaDeAprobados / contadorAprobados + "<br>");//I)
  //j)el nombre del primer hombre, que mide menos de 160 cm y esta desaprobado.
  document.write("j) El nombre del primer hombre es: " + nombrePrimerMasculino + ": su altura es: " + alturaAlumnoMasculinoMasBaja + "Cmt: su nota es: " + alumnoMasculinoDesaprobado + " y esta desaprobado.<br>"); 
  //k)Qué porcentaje de aprobados hay sobre el total de alumnos
  porcentajeDeAprobados= contadorAprobados * 100 / 5;
  document.write("k) Porcentaje de aprobados: " + porcentajeDeAprobados + "% <br>");//k)
  //l) La nota más alta y el nombre  del primer varón más alto de 200cm (VER porque entra en conflicto)
  document.write("l)La nota más alta: " + notaMaxima + "<br>");
  //m)Qué porcentaje hay de personas con fiebre mayores a 50 años,*sobre los que tienen fiebre.*y también sobre el total de Alumnos.
  porecenajePersonasConFiebre= contadorPersonasConFiebre * 100 / 5;
  document.write("m) Porcentaje de personas con fiebre mayores a 50 años: " + porecenajePersonasConFiebre + "%<br>");
*/