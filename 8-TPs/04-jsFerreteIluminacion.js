

    /*4.    Para el departamento de iluminación:
    Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
    A.  Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
    B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
    C.  Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
    D.  Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 %
     y si es de otra marca un 5%.
    E.  Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
     ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

    */

            function CalcularPrecio () 
        {

            //1ero defino las variables
            var cantLamparas;
            var descuento;
            var precioBruto;
            var precioFinal;
            var marcaLampara;
            var impIIBB;

            //tengo una constante: 
            const PRECIO_LAMPARA =35;


            //asigno los valores de cada txt

            cantLamparas= document.getElementById("txtIdCantidad").value;
            marcaLampara = document.getElementById("Marca").value;

            //parseo el value a integer

            cantLamparas= parseInt(cantLamparas);

                if(cantLamparas>=6) //punto A
                {
                    descuento = 0.5;
                }
                else{
                    if(cantLamparas ==5) //punto B
                    {
                        if(marcaLampara =="ArgentinaLuz")
                        {
                            descuento =0.4;
                        }
                        else
                        {
                            descuento=0.3;
                        }
                    }
                    else{
                        if(cantLamparas == 4)//punto C
                        { 

                            if(marcaLampara =="ArgentinaLuz" || marcaLampara == "FelipeLamparas")
                            {
                                descuento= 0.25;
                            }
                            else
                            {
                                descuento =0.20;
                            }

                        }

                    else{
                        if(cantLamparas == 3)//punto d
                        {
                            if(marcaLampara =="ArgentinaLuz"){
                                descuento= 0.15;
                            }
                            else
                                if(marcaLampara =="FelipeLamparas"){
                                    descuento= 0.10;
                            }
                            else
                            {
                                descuento=0.05;
                            }
                        }

                    else{

                        if(cantLamparas <3) //default
                        {
                            descuento =0;
                        }

                    }
                            
                }
             }
        }
    

        precioBruto = PRECIO_LAMPARA * cantLamparas;

        precioFinal = precioBruto - (precioBruto*descuento);

        document.getElementById("txtIdprecioDescuento").value = precioFinal;

    
//punto E:  Si el importe final con descuento suma más de $120 se debe sumar un 10% 
//de ingresos brutos en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.
                    

if(precioFinal>120)
    {
     impIIBB = (precioFinal*0.10);
     alert("IIBB Usted pago: " + impIIBB);
    }

}
