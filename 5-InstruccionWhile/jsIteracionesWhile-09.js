/*
Al presionar el botón pedir  números 
hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{   
    let numeroIngresado;
    let numMaximo;
    let numMinimo;
    let primerNumeroIngresado;
    let seguir;

    seguir = true;
    primerNumeroIngresado= false;

    while(seguir == true)
    {
       numeroIngresado= prompt("Ingrese un numero");
       numeroIngresado= parseInt(numeroIngresado);
    
        if (numeroIngresado > numMaximo || primerNumeroIngresado == false)
        {
            numMaximo= numeroIngresado;
        }
        
        if (numeroIngresado < numMinimo || primerNumeroIngresado == false)
       {
            numMinimo = numeroIngresado;
            primerNumeroIngresado= true;
       }
        
     seguir = confirm("Ingresar otro?");

   }

   // document.write("El maximo es: " + numMaximo +"<br>");
    //document.write("El minimo es : " + numMinimo);
    txtIdMaximo.value= numMaximo;
    txtIdMinimo.value= numMinimo; 
}//FIN DE LA FUNCIÓN

/*function mostrar()
{
    let numeroIngresado;
    let numMaximo;
    let numMinimo;
    let i;
    
    i= 0;

    while(i < 5)
    {
       numeroIngresado= prompt("Ingrese un numero");
       numeroIngresado= parseInt(numeroIngresado);
    
        if (numeroIngresado > numMaximo || i==0)
        {
            numMaximo= numeroIngresado;
        }
        
        if (numeroIngresado < numMinimo || i==0)
        {
            numMinimo = numeroIngresado;    
        }
        
     i++;
   }

    document.write("El maximo ingresado es: " + numMaximo +"<br>");
    document.write("El minimo ingresado es : " + numMinimo);

}*/
/* 
Esta opcion es en caso de que tengamos
una variable de control
no es necesaria el uso de la bandera
ya que tenemos un limite de ingresos
*/
/* 
la opcion que esta abajo contiene bandera ya que 
no contamos con una variable de control sino
que tenemos la opcion "hasta que el usurio quiera"
*/
/*
 let numeroIngresado;
    let numMaximo;
    let numMinimo;
    let primerNumeroIngresado;
    let seguir;

    seguir = true;
    primerNumeroIngresado= false;

    while(seguir == true)
    {
       numeroIngresado= prompt("Ingrese un numero");
       numeroIngresado= parseInt(numeroIngresado);
    
        if (numeroIngresado > numMaximo || primerNumeroIngresado == false)
        {
            numMaximo= numeroIngresado;
        }
        
        if (numeroIngresado < numMinimo || primerNumeroIngresado == false)
       {
            numMinimo = numeroIngresado;
            primerNumeroIngresado= true;
       }
        
     seguir = confirm("Ingresar otro?");

   }

    document.write("El maximo es: " + numMaximo +"<br>");
    document.write("El minimo es : " + numMinimo);
    */














