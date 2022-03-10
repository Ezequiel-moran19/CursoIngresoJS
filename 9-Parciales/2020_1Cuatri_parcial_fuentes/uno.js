/*
1)Para una veterinaria se pide clasificar el ingreso de pacientes 
hasta que el usuario quiera (se limita a 1 perrito por ingreso), se les pide: 
nombre, precio de la consulta, raza: (validar entre caniche, ovejero, siberiano), edad y peso. 

determinar:
A.El nombre y la raza del perro con más peso
B.El promedio de edad de los perros de raza caniche.
C.La facturación en bruto de la veterinaria

*/
function mostrar()
{
    let continuar;
    let nombre;
    let precioCosnsulta;
    let raza;
    let edad;
    let peso;

    let maximoPeso;
    let nombreMaximoPeso;
    let razaMaximoPeso;
    let banderaMaximoPeso;

    let contadorEdad;
    let acumuladorEdad;
    
    let facturacionBruto;
    let contadorConsulta;
    contadorEdad= 0;
    acumuladorEdad= 0;
    contadorConsulta= 0;    
    facturacionBruto= 0;
    banderaMaximoPeso= false;

    continuar= true;

    while(continuar== true)
    {
       nombre= prompt("Ingrese el nombre");
       precioCosnsulta= prompt("Ingrese el precio de la consulta");
       precioCosnsulta= parseInt(precioCosnsulta);
       while(isNaN(precioCosnsulta) || precioCosnsulta < 0)
       {
          precioCosnsulta= prompt("Error reingrese el precio de la consulta");
          precioCosnsulta= parseInt(precioCosnsulta);
       }
       raza= prompt("Ingrese la raza: caniche, ovejero, siberiano");
       while(raza != "caniche" raza != "ovejero" raza != "siberiano")
       {
          raza= prompt("Error reingrese la raza: caniche, ovejero, siberiano");
       }
       edad= prompt("Ingrese la edad");
       edad= parseInt(edad);
       while(isNaN(edad) || edad < 0)
       {
          edad= prompt("Error reingrese la edad");
          edad= parseInt(edad);
       }
       peso= prompt("Ingrese el peso");
       peso= parseInt(peso);
       while(isNaN(peso) || peso < 0)
       {
          peso= prompt("Error reingrese el peso");
          peso= parseInt(peso);
       }
        if (peso > maximoPeso || banderaMaximoPeso == false)
        {
            maximoPeso= peso;
            nombreMaximoPeso= nombre;
            razaMaximoPeso= raza;
            banderaMaximoPeso= true;
        }
        
        if (raza== "caniche")
        {
           acumuladorEdad+= edad;
           contadorEdad++;
        }
         
        precioCosnsulta= precio * contadorConsulta;
        
        contadorConsulta++;

           continuar= confirm("Desea continuar?");
    }
        document.write("El nombre de perro con mas edad: " + nombreMaximoPeso +  " y la raza del perro: " + razaMaximoPeso + "<br>");
        document.write("Promedio de edad raza caniche" + (contadorEdad / acumuladorEdad) + "<br>");
        document.write("Facturación en bruto de la veterinaria" + precioCosnsulta + "<br>");
 
}











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
*
function mostrar()
{
    let tipo;
    let precio;
    let cantidad;
    let marca;
    let fabricante;
    let alcoholMasBarato;
    let cantidadAlcoholMasBarato;
    let fabricanteAlcoholMasBarato;
    let contadorJabon;
    let contadorAlcohol;
    let contadorBarbijo;
    let acumuladorJabones;
    let acumuladorBarbijos;
    let acumuladorAlcoholes;
    let tipoConMasUnidades;
    let promedio;

    acumuladorJabones= 0;
    acumuladorBarbijos= 0;
    acumuladorAlcoholes= 0;
    contadorJabon= 0;
    contadorAlcohol= 0;
    contadorBarbijo= 0;

    for(let i = 0; i < 5; i++)
    {
        tipo= prompt("Ingrese el tipo");
        while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
        {
            tipo= prompt("Error. reingrese el tipo");
        }
        precio= prompt("Ingrese el precio entre 100 y 300");
        precio= parseInt(precio);
        while(isNaN(precio) || precio < 100 || precio > 300)
        {
            precio= prompt("Error. reingrese el precio entre 100 y 300");
            precio= parseInt(precio);
        } 
        cantidad= prompt("Ingrese la cantidad");
        cantidad= parseInt(cantidad);
        while(isNaN(cantidad) || cantidad < 0)
        {
            cantidad= prompt("Error. reingrese el cantidad");
            cantidad= parseInt(cantidad);
        } 
        marca= prompt("Ingrese la marca");
        fabricante= prompt("Ingrese el fabricante");

        switch(tipo)
        {
            case "alcohol":
           
            contadorAlcohol++;
            if (precio < alcoholMasBarato || contadorAlcohol== 1)
            {
                alcoholMasBarato= precio;
                cantidadAlcoholMasBarato= cantidad;
                fabricanteAlcoholMasBarato= fabricante;
            }
            break;
            
            case "jabon":
            acumuladorJabones+= cantidad;
            contadorJabon++;
            break;  

            case "barbijo":
            acumuladorBarbijos+= cantidad;
            contadorBarbijo++;
            break;       
         }
    
    }//CIERRE DEL FOR
    
    document.write("Cantidad de unidades alcohol mas barato: " + cantidadAlcoholMasBarato + ", y el fabricante: " + fabricanteAlcoholMasBarato + "<br>");
    //b) Del tipo con mas unidades, el promedio por compra
    if (acumuladorJabones > acumuladorAlcoholes && acumuladorJabones > acumuladorBarbijos)
    {
        tipoConMasUnidades= "jabon"
        document.write("Tipo con mas unidades: " + tipoConMasUnidades + ", promedio de compra: " + (contadorJabon / 5) + "<br>");
    }
    else
    {
        if (acumuladorBarbijos > acumuladorAlcoholes) 
        {
            tipoConMasUnidades= "barbijo"
           document.write("Tipo con mas unidades: " + tipoConMasUnidades + ", promedio de compra: " + (contadorBarbijo / 5) + "<br>");
        }
        else
        {
            tipoConMasUnidades= "alcohol"
           document.write("Tipo con mas unidades: " + tipoConMasUnidades + ", promedio de compra: " + (contadorAlcohol / 5) + "<br>");
        }
    }
    document.write("Hay " + acumuladorJabones + " unidades de jabon en total.<br>");
   


} 
*/












