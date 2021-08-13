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
  let articles = ["1: PC", "2: Notebook", "3: Monitor", "4: Headset"];
  let quote = "Elije un articulo para comprar:"
  let choose = parseInt(prompt(quote + "\n" + articles.join("\n")));

   switch(choose) {
    case 1:
      conf = prompt("Costo: $100000" + "\n" + "Desea comprar?");
      if(conf == "si") {
        return "Gracias por comprar el articulo" + articles[0].slice(1);
       }
       else {
         return "Siga navegando";
       }
       
    case 2:
      conf = prompt("Costo: $90000" + "\n" + "Desea comprar?");
      if(conf == "si") {
        return "Gracias por comprar el articulo" + articles[1].slice(1);
   }
      else {
        return "Siga navegando";
  }
      
    case 3:
      conf = prompt("Costo: $40000" + "\n" + "Desea comprar?");
      if(conf == "si") {
       return "Gracias por comprar el articulo" + articles[2].slice(1);
}
      else {
       return "Siga navegando";
}
      
    case 4:
      conf = prompt("Costo: $11000" + "\n" + "Desea comprar?");
      if(conf == "si") {
       return "Gracias por comprar el articulo" + articles[3].slice(1);
}
      else {
       return "Siga navegando";
}
      
    default:
      alert("Elije una opcion correcta");
   }
  }
 


