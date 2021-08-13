//Función de validación
 let year = 2021;
 const OLD = 18;
 let name1 = prompt ("¿Cual es tu nombre?");
 let age = parseInt (prompt ("Año de nacimiento"));
 let answer = parseInt((year - age));

 function validate() {
 if (answer > OLD & age > 1920) {
   return buy();
 } 
 else {
 return "Tienes que ser mayor de edad para acceder";
}
 }

alert(validate());

//Función de compra
 function buy() {
  alert("Bienvenido " + name1 + "!");
  let articles = ["PC", "Notebooks", "Monitores", "Headset"];
  let quote = "Elije un articulo para comprar:"
  let choose = parseInt(prompt(quote + "\n" + "1: " + articles[0] + ": $100000" + "\n" + "2: " + articles[1] + ": $90000" + "\n" + "3: " + articles[2] + ": $40000" + "\n" + "4: " + articles[3] + ": $10000"));

   switch(choose) {
    case 1:
      return "Gracias por comprar el articulo: " + articles[0];

    case 2:
      return "Gracias por comprar el articulo: " + articles[1];
      
    case 3:
      return "Gracias por comprar el articulo: " + articles[2];
      
    case 4:
      return "Gracias por comprar el articulo: " + articles[3];
      
    default:
      alert("Elije una opcion correcta");
   }
  }
 


