/*  Se solicita el desarrollo de una aplicación que permita a los usuarios 
establecer un apodo utilizando un prompt. En caso de que el usuario 
no elija un apodo, se asignará automáticamente el valor predeterminado 
"anonymus". Una vez finalizado, se mostrará el apodo ingresado o 
el valor predeterminado en un alert.*/

let apodo = prompt("Ingresa tu apodo:");

if (!apodo) {
     apodo = "anonymus";
}
alert("Tu apodo es: " + apodo);
