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
  let articles = ["1: PC", "2: Notebooks", "3: Monitores", "4: Headset"];
  let quote = "Elije un articulo para comprar:"
  let choose = parseInt(prompt(quote + "\n" + (articles.join( "\n" ))));

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
 


