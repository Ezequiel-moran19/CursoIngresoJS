/*una agencia de viajes debe sacar
 las tarifas de los viajes ,
 se cobra $15.000 por cada estadia como base,
 se pide el ingreso de una estacion
 del año y localidad para vacacionar
 para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10%
 Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10%
 Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10%
 y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
   let estacionDelAño;
   let destinoIngre;
   let aumento;
   let descuento;
   let precioFinal;
   const ESTADIA_BASE = 15000;

   aumento= 0;
   descuento= 0;

   estacionDelAño= document.getElementById("txtIdEstacion").value;
   destinoIngre= document.getElementById("txtIdDestino").value;

   switch(estacionDelAño)
   {
      case "Invierno":
           switch(destinoIngre)
           {
              case "Bariloche":
                    aumento= 0.20;
              break;
              case "Mar del plata":
                    descuento= 0.10;
              break;
              default:
                    descuento= 0.20;
              break;
           }
      case "Verano":
            switch(destinoIngre)
            {
                case "Bariloche":
                     descuento= 0.20;
                break;
                case "Mar del plata":
                      aumento= 0.20;
                break;
                default:
                      aumento= 0.10;
                break;
            }
      case "Otoño":
      case "Primavera":   
            switch(destinoIngre)
            {
                case "Cordoba":
                     aumento= 0.10;
                break;  
            } 
    }
   if (aumento != 0) 
   {
       precioFinal= ESTADIA_BASE + (ESTADIA_BASE * aumento);
   }
   else
   {
     if (descuento != 0) 
     {
        precioFinal= ESTADIA_BASE - (ESTADIA_BASE * descuento);
     }
     else
     {
        precioFinal= ESTADIA_BASE;
     }
   }
   alert("El precio final es: $" + precioFinal); 
}

/*
var estacion;
    var aumento;
    var destino;
    var descuento;
    var preciofinal;
    var mensaje;

        estacion = txtIdEstacion.value;
        destino = txtIdDestino.value;    
        
        const ESTADIA_BASE = 15000;
        
            switch (estacion)//primer caso
            {
                case "Invierno":

                if (destino == "Bariloche")
                {
                    aumento = ESTADIA_BASE * 0.20;
                    preciofinal = ESTADIA_BASE + aumento; 
                }
                else
                { 
                    if (destino == "Cataratas" || "Cordoba");
                     {
                       descuento = ESTADIA_BASE * 0.10;
                       preciofinal = ESTADIA_BASE - descuento; 
                     }
                       if (destino == "Mar del plata")
                     {
                       descuento = ESTADIA_BASE * 0.20;
                       preciofinal = ESTADIA_BASE - descuento;
                     } 
                   
                 }
                break;
            
                case "Verano":

                if (destino == "Bariloche")
                {
                    descuento = ESTADIA_BASE * 0.20;
                    preciofinal = ESTADIA_BASE - descuento; 
                }
                else
                { 
                    if (destino == "Cataratas");
                     {
                       aumento = ESTADIA_BASE * 0.10;
                       preciofinal = ESTADIA_BASE + aumento; 
                     }
                       if (destino == "Mar del plata")
                     {
                       aumento = ESTADIA_BASE * 0.20;
                       preciofinal = ESTADIA_BASE + aumento;
                     } 
                   
                 }
                break;
          
                case "Otoño":
                case "Primavera":
                
                  if (destino == "Bariloche" || "Cataratas" || "Mar del plata")
                  {
                    aumento = ESTADIA_BASE * 0.10;
                    preciofinal = ESTADIA_BASE + aumento; 
                  }
                    if(destino == "Cordoba")
                    {
                        preciofinal= ESTADIA_BASE;
                        
                    }
                  
                         break;
                  }

                    mensaje = "el precio final es " + preciofinal;
                    alert(mensaje);

*/



    /*
    let estacionDelAño;
    let destino;
    let descuento;
    let aumento;
    let precioFinal;
    let mensaje;
    const PRECIO_BASE = 15000;

    estacionDelAño= txtIdEstacion.value;
    destino= txtIdDestino.value;
    
    switch(estacionDelAño)
    {
        case "Invierno":
   
        if (destino == "Bariloche")
        {
           aumento= PRECIO_BASE * 0.20;
           precioFinal= PRECIO_BASE + aumento;
        }
        else
        {
            if (destino == "Cataratas" || destino == "Cordoba")
            {
                descuento= PRECIO_BASE * 0.10;
                precioFinal= PRECIO_BASE - descuento;
            }
            if(destino == "Mar del plata")
            {
                descuento= PRECIO_BASE * 0.20;
                precioFinal= PRECIO_BASE - descuento;
            }
        }
      break;
    
    
        case "Verano":
        
        if (destino == "Bariloche")
        {
            descuento= PRECIO_BASE * 0.20;
            precioFinal= PRECIO_BASE - descuento;       
        }
        else
        {
            if (destino == "Cataratas" || destino == "Cordoba")
            {
                aumento= PRECIO_BASE * 0.10;
                precioFinal= PRECIO_BASE + aumento;
            }
            if(destino == "Mar del plata")
            {
                aumento= PRECIO_BASE * 0.20;
                precioFinal= PRECIO_BASE + aumento;
            }
        }

        break;

        case "Otoño":
        case "Primavera":

        if (destino == "Bariloche" || destino == "Cataratas" || destino == "Mar del plata")
        {
            aumento= PRECIO_BASE * 0.10;
            precioFinal= PRECIO_BASE + aumento;
        }
        else
        {
            if (destino == "Cordoba")
            {
                precioFinal= PRECIO_BASE;
            }
        }
       

        break;

     
   }



  mensaje= "El precio final es: " + precioFinal;
*/
/*
case "Invierno":
           if (destinoIngre == "Bariloche")
           {
              aumento= 0.20;
              
           }
           else
           { 
             if (destinoIngre == "Mar del plata")
             {
                descuento= 0.10;
                
             }
             else
             { 
                descuento= 0.20;
                         
             }
           } 
       break;
      case "Verano":
          if (destinoIngre == "Bariloche") 
          {
              descuento= 0.20;
              
          }
          else
          { 
            if (destinoIngre == "Mar del plata")
            {
               aumento= 0.20;
              
            }
            else
            {
               aumento= 0.10;
               
            } 
          }
      break;

      case "Otoño":
      case "Primavera":     
           if (destinoIngre != "Cordoba")
           {
                aumento= 0.10;
           }     
      break;  
   } 

   if (aumento != 0) 
   {
       precioFinal= ESTADIA_BASE + (ESTADIA_BASE * aumento);
   }
   else
   {
     if (descuento != 0) 
     {
        precioFinal= ESTADIA_BASE - (ESTADIA_BASE * descuento);
     }
     else
     {
        precioFinal= ESTADIA_BASE;
     }
   }
   alert("El precio final es: $" + precioFinal); 
}

*/