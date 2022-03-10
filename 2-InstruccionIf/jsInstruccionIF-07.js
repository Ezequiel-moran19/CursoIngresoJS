/*Al ingresar una edad menor a 18 años y 
 un estado civil distinto a "Soltero", 
 mostrar el siguiente mensaje: 
  'Es muy pequeño para NO ser soltero.'
*/
/*
 07 del IF)
además de los datos ya ingresados , solicitar el nombre .
si es menor de 13 , , mostrar el mensaje “feliz día”.
Si es adolescente el mensaje es “usted es adolexcente”)
si tiene 17 años además mostrar el mensaje “último año!!!”
Si es mayor de edad mostrar el mensaje “tienes edad de laburar”.
si tiene 33 años , además mostrar el mensaje “como cristo”
si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
si tiene 88, además mostrar el mensaje “lindo número''
si la edad es par , además mostrar , “sos par!!”.
si se llama ‘Violeta’ y es adolescente , sumar el mensaje
‘como un color!!’
si se llama ‘Ricardo’ y es un menor a 13 , sumar el mensaje
 ‘muy chiquito para ese nombre’
si se llama ‘Alfredo’ y esta para jubilarse , sumar el mensaje
 ‘como el de  QUEEN’  

*/
function mostrar()
{
	  let edad;
    let nombre;
    let mensaje;

    edad= document.getElementById("txtIdEdad").value;
    edad= parseInt(edad);
    nombre= prompt("Ingrese su nombre");
    //estadcilvil= estadoCivil.value;

    if (edad < 13)
    {
       mensaje= "feliz día";

       if (nombre == "Ricardo")
       {
          mensajeGeneral= mensaje + "muy chiquito para ese nombre";
       }
    }
    else
    {
       if (edad < 18) 
       {
          mensaje= "usted es adolescente";
       
         if (edad == 17) 
         {
            mensaje= mensaje + "último año!!!";
         }
         if (nombre == "Violeta") 
         {
             mensaje= mensaje + "como un color";
         }
         else
         {
            mensaje= "tienes edad de laburar";
         }
       } 
       else
         {
           if (edad == 33) 
           {
             mensaje= "como cristo";
           } 
           if (edad > 60) 
           {
              mensaje= "A jubilarse";

            if (edad == 88)
            {
               mensaje= mensaje + "Linda edad";

               if (nombre == "Alfredo") 
               {
                 mensaje= mensaje + "como el de  QUEEN";
               }
            }
         } 
      }   
   }
   
    if (edad % 2 == 0) 
    {
       mensaje= "sos par!!";
    }

    alert(mensaje);

}


//FIN DE LA FUNCIÓN
// txtIdEdad   estadoCivil
/*var edad;
  var estCivil;

  edad = txtIdEdad.value;
  edad = parseInt(edad);
  estCivil = estadoCivil.value;

    if (edad < 18 && estCivil != 'soltero')
    {
      alert("Es muy pequeño para no ser soltero");
    }

    */