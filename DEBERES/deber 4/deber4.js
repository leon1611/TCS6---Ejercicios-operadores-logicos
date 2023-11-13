//CONOCER LOS MESES DEL AÑO

// BUCLE WHILE
     /*  let meses = [
                    "Enero", "Febrero", "Marzo", "Abril", 
                    "Mayo", "Junio","Julio", "Agosto", 
                    "Septiembre", "Octubre", "Noviembre", "Diciembre"
                    ];
         let i = 0;
          while (i < meses.length) {
         alert("Mes: " + meses[i]);
           i++;
        }  */
 
 //BUCLE FOR
      /*  let meses = [
                "Enero", "Febrero", "Marzo", "Abril", 
               "Mayo", "Junio","Julio", "Agosto", 
              "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
         for (let i = 0; i < meses.length; i++) {
          alert("Mes: " + meses[i]);
          }  */



//BUCLE DO...WHILE
let meses = [
    "Enero", "Febrero", "Marzo", "Abril", 
   "Mayo", "Junio","Julio", "Agosto", 

  "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let i = 0;
do {
    alert("Mes: " + meses[i]);
    i++;
} 
while (i < meses.length);
