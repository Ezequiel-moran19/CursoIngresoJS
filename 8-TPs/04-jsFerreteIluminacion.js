/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/
function CalcularPrecio() {

    const PRECIO_LAMPARA = 35;
    const PORCIENTO_IIBB = 0.10;
    var cantLamparas;
    var marca;
    var descuento;
    var precioConDescuento;
    var precioFinal;
    var iibb;
    var impuestoPorSeparado;

    cantLamparas = document.getElementById("txtIdCantidad").value;
    cantLamparas = parseInt(cantLamparas);
    marca = document.getElementById("Marca").value;   

if (cantLamparas >= 6) {
        descuento = 0.50;
    } 
    else {
        if (cantLamparas == 5) {
            if (marca == "ArgentinaLuz") {
                descuento = 0.40;
            } 
            else {
                descuento = 0.30;
            } 
        } 
        else {
            if (cantLamparas == 4) {                
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                    descuento = 0.25;
                } 
                else {
                    descuento = 0.20;
                } 
            }     
            else {
                if (cantLamparas == 3) {
                    if (marca == "ArgentinaLuz") {
                        descuento = 0.15;
                    } 
                    else {
                        if (marca == "FelipeLamparas") {
                            descuento = 0.10;
                        } 
                        else {
                            descuento = 0.05;
                        }
                    }
                } 
                else {
                    if (cantLamparas < 3) {
                        descuento = 0;
                    }
                } 
            } 
        } 
    }

precioConDescuento = PRECIO_LAMPARA - (PRECIO_LAMPARA * descuento);

    precioFinal = precioConDescuento * cantLamparas;

    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    if (precioFinal > 120) {
        iibb = precioFinal + (precioFinal * PORCIENTO_IIBB);
        document.getElementById("txtIdprecioDescuento").value = iibb;
        impuestoPorSeparado = iibb - precioFinal;
        alert("IIBB Usted pago " + impuestoPorSeparado);
    } 

} 


/*

function CalcularPrecio () 
{
    var cantidadLamparas;
    var marcaDeLamparas;
    var descuento;  
    var precio;
    var total;
    
    precio = 35,
    cantidadLamparas = document.getElementById(txtIdCantidad.value);
    marcaDeLamparas = document.getElementById ("Marca").value;
    document.getElementById(txtIdprecioDescuento.value); = descuento;
    cantidadLamparas = parseInt(cantidadLamparas);
    
    total = cantidadLamparas * precio;
   
     
      
    if (cantidadLamparas >= 6)
   
    {
       descuento = 0.50;
    }
    else
        if (cantidadLamparas == 5)
         {

         }


 

 	
}
*/
// txtIdCantidad   Marca    txtIdprecioDescuento