/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención
de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/
/*
 function mostrar()
{
  let tipo;
  let precio;
  let cantidad;
  let marca;
  let maximoPrecioJabon;
  let cantidadUnidadeJabon;
  let fabricanteJabonCaro;
  let promedioCompra;
  let tipoConMasUnidades;
  let contadorJabon;
  let contadorBarbijo;
  let contadorAlcohol;
  let acumuladorJabon;
  let acumuladorBarbijo;
  let acumuladorAlcohol;
  contadorJabon= 0;
  contadorBarbijo= 0;
  contadorAlcohol= 0;
  acumuladorJabon= 0;
  acumuladorBarbijo= 0;
  acumuladorAlcohol= 0;
  
  for (let i = 0; i < 5; i++)
  {
     tipo= prompt("Ingrese un producto barbijo, jabón o alcohol");

    while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
    {
      tipo= prompt("Error.. reingrese un producto barbijo, jabón o alcohol");
    }
     cantidad= prompt("Ingrese la cantidad de unidades");
     cantidad= parseInt(cantidad);
    while(cantidad < 1 || cantidad > 1000)
    {
      cantidad= prompt("Error reingrese la cantidad de unidades menor a 1000");
      cantidad= parseInt(cantidad);
    }
     precio= prompt("Ingrese el precio");
     precio= parseInt(precio); 
    while(isNaN(precio) || precio < 100 || precio > 300)
    {
      precio= prompt("Error reingrese el precio");
      precio= parseInt(precio);
    }
      marca= prompt("Ingrese la marca");
      fabricante= prompt("Ingrese el nombre del fabricante");

    switch(tipo)
    {
      case "jabon":
           if (precio > maximoPrecioJabon || contadorJabon == 0)
           {
              maximoPrecioJabon= precio;
              cantidadUnidadeJabon= cantidad;
              fabricanteJabonCaro= fabricante;
           }
           acumuladorJabon+= cantidad;
           contadorJabon++;
      break;
      case "barbijo":
           acumuladorBarbijo+= cantidad;
           contadorBarbijo++; 

      break;
      case "alcohol":
           acumuladorAlcohol+= cantidad;
           contadorAlcohol++;
      break;

    }

  }//FIN DEL FOR

   document.write("a) Cantidad de unidades: " + cantidadUnidadeJabon + " fabricante: " + fabricanteJabonCaro + " precio: " + maximoPrecioJabon + "<br>" );

  if (contadorJabon > contadorBarbijo || contadorJabon > contadorAlcohol)
  {
     tipoConMasUnidades= "Jabon";
     promedioCompra= acumuladorJabon / contadorJabon;  
  } 
  else
  {
    if (contadorBarbijo > contadorAlcohol)
    {
      tipoConMasUnidades= "barbijo";
      promedioCompra= acumuladorBarbijo / contadorBarbijo;
    }
    else
    {
      tipoConMasUnidades= "alcohol";
      promedioCompra= acumuladorAlcohol / contadorAlcohol;
    }
  }
   document.write("b) Tipo de producto con más unidades : " + tipoConMasUnidades + " y el promedio por compra: " + promedioCompra + "<br>");
   document.write("c) Se compraron en total : " + acumuladorBarbijo + " unidades de Barbijos<br>");
  
}
*/
 /* 
  }
}
}
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite
la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la rusa
b- Nombre y vacuna de la mujer con más edad
c- De las personas que recibieron la vacuna americana que porcentaje
son mayores de edad
d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
e- Vacuna menos inoculada
*/
/* Ejercicio para practicar
 //Navarro Juan Div H PRACTICA
Se necesita llevar el registro de un vacunatorio. 
Para ello se podrá registrar los datos de las personas
vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite
la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la rusa
b- Nombre y vacuna de la mujer con más edad
c- De las personas que recibieron la vacuna americana que porcentaje
son mayores de edad
d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
e- Vacuna menos inoculada
//  sin resolver
function mostrar()
{
   let seguir;
   let nombre;
   let edad;
   let vacuna;
   let dosis;
   let genero;
   //a- Promedio de edad de los que se vacunaron con la rusa
   let contadorVacunaRusa;
   let acumuladorEdad;
   let promedioDeEdad;
   acumuladorEdad= 0;
   contadorVacunaRusa= 0;
   //b- Nombre y vacuna de la mujer con más edad
   let mujerConMasEdad;
   let nombreConMasEdad;
   let vacunaMujerConMasEdad;
   let banderaMujerConMasEdad;
   banderaMujerConMasEdad= false;
//c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
   let porcentajePersonasayores;
   let contadorPersonasMayores;
   contadorPersonasMayores= 0;
   //e- Vacuna menos inoculada
   let vacunaMenosInoculada;
   let contadorVacunaChina;
   let contadorVacunaAmericana;

   contadorVacunaChina= 0;
   contadorVacunaAmericana= 0;
//d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
  let porcentajeSegundadosis;
  let acumuladorVacunados;
  let contadorSegundaDosis;
  acumuladorVacunados= 0;
  contadorSegundaDosis= 0;
   seguir= true;

   while(seguir== true)
   {
        nombre= prompt("ingrese un nombre");
      //while(text.substr(3, 10))
      //{
      //  nombre= prompt("Error.. reingrese un nombre");
      //}
        edad= prompt("Ingrese la edad");
        edad= parseInt(edad);
      while(isNaN(edad) || edad < 12)
      {
        edad= prompt("Error.. reingrese la edad");
        edad= parseInt(edad);
      }
        vacuna= prompt("Ingrese la vacuna “rusa”, “china”, “americana”");
      while(!(vacuna == "rusa" || vacuna == "china" || vacuna == "americana"))
      {
        vacuna= prompt("Error reingrese la vacuna “rusa”, “china”, “americana”");
      }  
        dosis= prompt("Ingrese la dosis");
      while(!(dosis == "p" || dosis == "s"))
      {
        dosis= prompt("Error la dosis");
      }
        genero= prompt("Ingrese el genero")
      while(!(genero == "f" || genero == "m"))
      {
        genero= prompt("Error reingrese el genero")
      }
     
      acumuladorEdad+= edad;
      //a- Promedio de edad de los que se vacunaron con la rusa
      switch(vacuna)
      {
         case "rusa":
             contadorVacunaRusa++;
             
         break;

         case "china":
             contadorVacunaChina++;
         break;

         case "americana":
//c-De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
                  if (edad > 18) 
                  {
                    contadorPersonasMayores++;
                  }
                   contadorVacunaAmericana++;

         break;
         
      }
      //b- Nombre y vacuna de la mujer con más edad
      if (edad > mujerConMasEdad || banderaMujerConMasEdad== false)
      {
         mujerConMasEdad= edad;
         nombreConMasEdad= nombre;
         vacunaMujerConMasEdad= vacuna;
         banderaMujerConMasEdad= true;
      }
//d-Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
      if (dosis == "s") 
      {   
        contadorSegundaDosis++;
      }
      acumuladorVacunados+= vacuna;

     seguir= confirm("Quiere seguir");
   }
   if (contadorVacunaRusa < 0) 
   {
   //a- Promedio de edad de los que se vacunaron con la rusa
   promedioDeEdad= acumuladorEdad / contadorVacunaRusa;
   document.write("a- El promedio de edad de los que se vacunaron con la rusa es: " + promedioDeEdad + "<br>");
   }
   else
   {
     document.write("a- No se ingresaron personas vacunadas con la Rusa.<br>");
   }
   //b- Nombre y vacuna de la mujer con más edad
   document.write("b- Nombre de la mujer con más edad: " + nombreConMasEdad + " y la vacuna es : " + vacunaMujerConMasEdad + ".<br>") 
   //c-De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
   porcentajePersonasayores= contadorPersonasMayores * acumuladorEdad / 100;
   document.write("c- Porcentaje de personas mayores de edad vacunada con la Americana: " + porcentajePersonasayores + "<br>");
   //d-Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
   porcentajeSegundadosis=(contadorSegundaDosis * acumuladorVacunados ) / 100;
   document.write("d- Porcentaje de vacunados con la segunda dosis: " + porcentajeSegundadosis + "<br>");
   //e- Vacuna menos inoculada
   if (contadorVacunaRusa < contadorVacunaChina || contadorVacunaRusa < contadorVacunaAmericana)
   {
      vacunaMenosInoculada= "Rusa"
   }
   else
   {
     if (contadorVacunaChina < contadorVacunaAmericana) 
     {
       vacunaMenosInoculada= "China"
     }
     else 
     {
       vacunaMenosInoculada= "Americana"
     }
   }
   document.write("e- Nombre de la vacuna menos inoculada es: " + vacunaMenosInoculada + ".<br>");
}
  */
  