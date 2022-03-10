/*
4. Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.  Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.  Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" 
se hace un descuento del 40 % y si es de otra marca el descuento
es del 30%.
C.  Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o "FelipeLamparas"
se hace un descuento del 25 % 
y si es de otra marca el descuento es del 20%.
D.  Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"
el descuento es del 15%,
si es  "FelipeLamparas" se hace un descuento del 10 %
y si es de otra marca un 5%.
E.  Si el importe final con descuento suma más de $120
se debe sumar un 10% de ingresos brutos
en informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/
function CalcularPrecio () 
{ 
   const PRECIO = 35; 
   let cantidadLamparas;
   let marcaLampara;
   let descuento;
   let precioConDescuento;
   let precioFinal;
   let iibb;
   
   marcaLampara= document.getElementById("Marca").value;
   cantidadLamparas= document.getElementById("txtIdCantidad").value;
   cantidadLamparas= parseInt(cantidadLamparas);

   switch(cantidadLamparas)
   { 
      case 1:
      case 2:
            switch(marcaLampara)
            {
               default:
                       descuento= 0;
                break; 
            }
      break;
      case 3:
            switch(marcaLampara)
            {    
               case "ArgentinaLuz":
                       descuento= 15;
               break;
               case "FelipeLamparas":
                       descuento= 10;
               break;
               default:
                       descuento= 5;
                break;
            }
      break;  
      case 4:
            switch(marcaLampara)
            {    
               case "ArgentinaLuz":
               case "FelipeLamparas":
                       descuento= 25;
               break;
               default:
                       descuento= 20;
                break;       
            }
      break; 
      case 5:
            switch(marcaLampara)
            {
                case "ArgentinaLuz":
                        descuento= 40;
                break;
                default:
                        descuento= 30;
                break;
            }
      break;
      default:
                         descuento= 50;
            
      break;
   }

   precioConDescuento= PRECIO - (PRECIO * descuento / 100);

   document.getElementById("txtIdprecioDescuento").value= precioConDescuento;

   precioFinal= precioConDescuento * cantidadLamparas;

   if (precioFinal > 120)
   {
       iibb= precioFinal * 10 / 100;
       precioFinal+= iibb;
       alert(`Total a pagar: $ ${precioFinal}. Usted pago: $ ${iibb} de ingresos brutos`);
   }
   else
   {
      alert(`Total: $ ${precioFinal} `);
   }

}
/*
   switch(cantidad)
   {
     case 1:
     case 2:
             descuento= 0;
     break;

     case 3:
        
        if (marca == "ArgentinaLuz") {

            descuento= 15;

        }else if (marca == "FelipeLamparas") {

            descuento= 10;
        }
        else
        {
            descuento= 5;
        }

     break;

     case 4:
        
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {

            descuento= 25;
        }
        else {

            descuento= 20;
        }

     break;

     case 5:

        if (marca == "ArgentinaLuz") {

            descuento= 40;
        }
        else {

            descuento= 30;
        }

     break;

     default:
  
            descuento= 50;  
      break;
   }
*/
/*

    if (cantidad >= 6) 
    {
        descuento= 0.50;
    }
    else
    {
      if (cantidad == 5)
      {
        if (marca == "ArgentinaLuz")
        {
           descuento= 0.40; 
        } 
        else
        { 
           descuento= 0.30;
        }
      }
        else
        {
            if (cantidad == 4)
            {
               if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
               {
                  descuento= 0.25;
               } 
               else
               {
                    descuento= 0.20;
               }
            }
               else
               {
                 if (cantidad == 3)
                 {
                    if (marca == "ArgentinaLuz")
                    {
                        descuento= 0.15;
                    }
                    else
                    {
                        if (marca == "FelipeLamparas")
                        {
                            descuento= 0.10;
                        }
                        else
                        {
                            descuento= 0.5;
                        }
                    }
                 }
               }
            }
        }
    /*
   const PRECIO = 35; 
   let cantidadLamparas;
   let marcaLampara;
   let descuento;
   let precioConDescuento;
   let precioFinal;
   let iibb;
   
   marcaLampara= document.getElementById("Marca").value;
   cantidadLamparas= document.getElementById("txtIdCantidad").value;
   cantidadLamparas= parseInt(cantidadLamparas);

   switch(cantidadLamparas)
   {  
      case 1:
      case 2:
              descuento= 0;
      break;  
      case 3:
           if ( marcaLampara == "ArgentinaLuz")
           {
              descuento= 15;
           }
           else
           { 
             if(marcaLampara == "FelipeLamparas")
             {
                descuento= 10;
             }
             else
             {
                descuento= 5;
             }
           }  
           break;
      case 4:
           if (marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas")
           {
              descuento= 25;
           }
           else
           {
              descuento= 10;
           }
           break; 
      case 5:
           if (marcaLampara == "ArgentinaLuz")
           {
              descuento= 40;
           }
           else
           {
              descuento= 30;
           }
           break;
      default:
               descuento= 50;
   }  
    
   precioConDescuento= PRECIO - (PRECIO * descuento/100);

   document.getElementById("txtIdprecioDescuento").value = precioConDescuento;

    precioFinal= precioConDescuento * cantidadLamparas;

    if (precioFinal > 120)
    {
       iibb= precioFinal * 10/100;
       precioFinal += iibb;

       alert(`Total a pagar: $ ${precioFinal}. Usted pago: $ ${iibb} de ingresos brutos`);
    }
    else
    {
        alert(`Total: $ ${precioFinal}`);
    }   

}
*/
