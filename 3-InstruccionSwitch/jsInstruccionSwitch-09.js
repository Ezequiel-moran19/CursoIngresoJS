/*una agencia de viajes debe sacar las tarifas de los viajes ,
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

                   
}

               



