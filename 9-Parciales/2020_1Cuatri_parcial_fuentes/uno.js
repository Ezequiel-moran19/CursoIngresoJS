/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo
 y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
   let tipo;
   let precio;
   let cantUnidades;
   let marca;
   let fabricante;
   let promedioCompra;

   let precioAlcoholMasBarato;
   let fabricanteAlcoholBarato;

   let tipoConMasUnidades;
   let promedioPorCompra;

   let acumuladorJabon= 0;
   let AcumuladorBarbijo= 0; 
   let acumuladorAlcohol= 0;
   let cantUnidadeBarbijo= 0;
   let cantUnidaAlcohol= 0;
   let cantUnidadesJabon= 0;
   //let banderaAlcohol= false;
   let mensajeA= "No se compraron alcoholes"
   let mensajeB;
   let mensajeJ;

   for(let i = 0; i < 5 ; i++)
   {
       tipo=prompt('Ingresa un producto del tipo "barbijo" , "jabon" o "alcohol"');

       while( tipo != "barbijo" && tipo != "jabón" && tipo != "alcohol" && isNaN(tipo))
       {
          tipo=prompt('Erro reingresa un producto del tipo "barbijo" , "jabon" o "alcohol"');
       }
          precio=parseFloat(prompt('Ingresa el precio entre: 100 y 300'));

       while(precio < 100 || precio > 300 || isNaN(precio))
       {
          precio=parseFloat(prompt('Error reingresa el precio entre: 100 y 300'));
       }
          cantUnidades=prompt('Ingresa la cantidad de unidades entre: 1 al 1000');

       while(cantUnidades <= 0 || cantUnidades >= 1000)
       {
          cantUnidades=prompt('Error reingresa la cantidad de unidades entre: 1 al 1000');
       }
          marca= prompt("Ingrese la marca");
          fabricante= prompt("Ingrese el fabricante");

        switch(tipo)
        { 
        case "alcohol":
         acumuladorAlcohol += cantUnidades;
         cantUnidaAlcohol ++;

         //if (precioAlcoholMasBarato > precio || banderaAlcohol == false)
         if (precioAlcoholMasBarato > precio || i == 0)
         {
            precioAlcoholMasBarato= precio;
            fabricanteAlcoholBarato= fabricante;
            cantUnidaAlcohol= cantUnidades;
            i ++;
            //banderaAlcohol= true;
         }

        break;

        case "barbijo":

         AcumuladorBarbijo += cantUnidades;
         cantUnidadeBarbijo ++;

        break;

        case "jabon":
         acumuladorJabon += cantUnidades;
         cantUnidadesJabon ++ ;

        break;
        }
   }
    
     if (acumuladorAlcohol > AcumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
     {
           promedioCompra= acumuladorAlcohol / cantUnidaAlcohol;
           tipoConMasUnidades= "Alcohol"

     }else if (AcumuladorBarbijo > acumuladorJabon && AcumuladorBarbijo >= acumuladorAlcohol)
     {
           promedioCompra= AcumuladorBarbijo / cantUnidadeBarbijo;
           tipoConMasUnidades= "Barbijo";
     }
     else
     {
          promedioCompra= acumuladorJabon / cantUnidadesJabon;
          tipoConMasUnidades= "Jabon";
     }
 
   if (banderaAlcohol == true)
   {
      mensajeA= "A. El mas barato de los alcoholes es: " + precioAlcoholMasBarato +
            "\ncantidad: " + cantUnidaAlcohol +
            "\nprecio: " + precio;
   }

     mensajeB= "B. El tipo con mas unidades: " + tipoConMasUnidades + "\n el promedio por compra es: " + promedioCompra;
     mensajeJ= "C. la cantidad de jabon es: " + cantUnidadesJabon;

     alert(mensajeA + "\n" + mensajeB + "\n" + mensajeJ);

} 
/*Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
/*
 var tipoDeProducto;
   var precio;
   var cantUnidades;
   var contadorProducto;
   var marcaProducto;
   var fabricante;
   var precioAlcoholMasBarato;
   var fabricanteAlcoholMasBarato;
   var CantUnidAlcoholMasBarato;
   var acumuladorBarbijo;
   var acumuladorJabon;
   var acumuladorAlcohol;
   var acumuladorCompraBarbijo;
   var acumuladorCompraJabon;
   var acumuladorCompraAlcohol;

   var totalCompraBarbijo;
   var totalCompraAlcohol;
   var totalCompraJabon;



   var banderaAlcoholMasBarato;

   precioAlcoholMasBarato =0;
   contadorProducto = 0;
   acumuladorBarbijo = 0;
   acumuladorJabon = 0;
   acumuladorAlcohol = 0;
   acumuladorCompraBarbijo = 0;
   acumuladorCompraJabon = 0;
   acumuladorCompraAlcohol = 0;

   banderaAlcoholMasBarato = true;


   while(contadorProducto < 5)
   {
       tipoDeProducto= prompt("Ingrese uno de estos tres productos: barbijo / jabón /alcohol");
     
    while (tipoDeProducto !="barbijo" && tipoDeProducto !="jabón" && tipoDeProducto != "alcohol")
    {
        tipoDeProducto= prompt("Error, ingrese un producto correcto");
    }
      precio= prompt("Ingrese el precio");
      precio= parseInt(precio);
   
     while (precio < 100 || precio > 300)
     {
        precio= prompt("Error, reingrese el precio");
        precio= parseInt(precio);
     }
        cantUnidades= prompt("Ingrese la cantidad de unidades");
        cantUnidades= parseInt(cantUnidades);

     while (cantUnidades < 0 || cantUnidades > 1000)
     {
        cantUnidades= prompt("Error, reingrese la cantidad de unidades");
        cantUnidades= parseInt(cantUnidades);
     }
   
      marcaProducto= prompt("Ingrese la marca del producto");
      fabricante= prompt("Ingrese el fabricante del producto ");

    contadorProducto ++;


 switch(tipoDeProducto)
      {
        case "barbijo": 
             acumuladorBarbijo = acumuladorBarbijo + cantUnidades; 
             totalCompraBarbijo = precio * cantUnidades;  
             acumuladorCompraBarbijo = acumuladorCompraBarbijo + totalCompraBarbijo;    
         
        break;

        case "jabón": 
           acumuladorJabon = acumuladorJabon + cantUnidades;
            totalCompraJabon = precio * cantUnidades;  
            acumuladorCompraJabon = acumuladorCompraJabon + totalCompraJabon;     
       break;

       case "alcohol": //a)Del más barato de los alcohol, la cantidad de unidades y el fabricante
            if (precio < precioAlcoholMasBarato || banderaAlcoholMasBarato == true)
            {  
               precioAlcoholMasBarato= precio;
               CantUnidAlcoholMasBarato= cantUnidades;
               fabricanteAlcoholMasBarato= marcaProducto;
               banderaAlcoholMasBarato = false;
            }  
              acumuladorAlcohol = acumuladorAlcohol + cantUnidades;
              totalCompraAlcohol = precio * cantUnidades;  
              acumuladorCompraAlcohol = acumuladorCompraAlcohol + totalCompraAlcohol; 

       break;

      }//CIERRA EL SWITCH

   } //CIERRA EL WHILE GENERAL

    if (acumuladorAlcohol >acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo) //b: Del tipo con mas unidades, el promedio por compra
    {
        alert("El promedio de compra del tipo con mas unidades es (ALCOHOL): " + acumuladorCompraAlcohol / acumuladorAlcohol ); 

    } 
    else if (acumuladorJabon > acumuladorAlcohol && acumuladorJabon > acumuladorBarbijo)
    {
           alert("El promedio de compra del tipo con mas unidades es (JABON): " + acumuladorCompraJabon / acumuladorJabon ); 

    } 
    else if (acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo >acumuladorAlcohol)
    { 
         alert("El promedio de compra del tipo con mas unidades es (BARBIJO): " + acumuladorCompraBarbijo / acumuladorBarbijo ); 

    }
    else
    {
      alert("Hay 2 o mas tipos de productos con la misma cantidad vendida");
    }


   // 



document.write("Del alcohol mas barato se compraron :"+CantUnidAlcoholMasBarato+ " unidades y el fabricante fue "+fabricanteAlcoholMasBarato+"<br>");
document.write("Hay en total  " + acumuladorJabon+ " unidades de jabon.<br>");

*/