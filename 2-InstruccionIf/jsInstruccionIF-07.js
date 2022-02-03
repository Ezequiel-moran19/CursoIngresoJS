/*Al ingresar una edad menor a 18 años y 
 un estado civil distinto a "Soltero", 
 mostrar el siguiente mensaje: 
  'Es muy pequeño para NO ser soltero.'
*/
function mostrar()
{
	  let edad;
    let estadCilvil;

    edad= txtIdEdad.value;
    estadCilvil= estadoCivil.value;

    if (edad < 18 && estadCilvil != "soltero")
    {
       alert("Es muy pequeño para NO ser soltero");
    }
     



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