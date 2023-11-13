/*Una empresa está en búsqueda de un conductor y ha establecido dos requisitos 
fundamentales: el candidato debe tener 25 años o más, además de poseer una licencia profesional.
 Tu tarea es crear un programa que almacene estos dos datos en dos variables 
 (una de tipo number y la otra boolean) y validarlos usando una sentencia if. 
 Si el candidato cumple con ambos requisitos, mostrará el mensaje "Apto", y si no, mostrará "No apto".*/

 let edad = Number (prompt("Ingrese su edad"));
 let licencia = confirm("Tiene Licencia Profesional");
 if (edad >=25 && licencia) {
    alert("Es Apto");
  } else {
    alert("No es Apto");
  }