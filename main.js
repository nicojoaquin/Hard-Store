/*//Función de validación
 let year = 2021;
 const OLD = 18;
 let name1 = prompt ("¿Cual es tu nombre?");
 let age = parseInt (prompt ("Año de nacimiento"));
 let answer = parseInt((year - age));
 const VALIDATE = () => {
  if (answer >= OLD & age > 1920) {
    return buy();
 } 
  else {
    return "Tienes que ser mayor de edad para acceder";
}
 }
alert(VALIDATE());

//Función de compra
function buy() {
  const COST = (price) => {
    conf = parseInt(prompt("Costo: " + price + "\nDesea comprar?\n1-Si\n2-No"));
  }
  const SURE = (a) => {
    if(conf == 1) {
      return`Gracias por comprar el articulo ${articles[a].slice(1)}`;
      }
    else if (conf == 2) {
      return "Siga navegando";
      }
    else  {
      return"Elija una opción correcta"
      }
     }
  alert(`Bienvenido ${name1}!`);
  let articles = ["1: PC", "2: Notebook", "3: Monitor", "4: Headset"];
  let quote = "Elije un articulo para comprar:"
  let choose = parseInt(prompt(quote + "\n" + articles.join("\n")));
   switch(choose) {
    case 1:
      COST("$105000");
      return SURE(0);

    case 2:
      COST("$92000");
      return SURE(1);
      
    case 3:
      COST("$44000");
      return SURE(2);
      
    case 4:
      COST("$11000");
      return SURE(3);
      
    default:
      alert("Elije una opcion correcta");
   }
  }
*/
  //Función de busqueda
  function finder() {
  const productos = [{  nombre: "MSI", precio: 105000, stock: 8},
                    {   nombre: "Asus", precio: 90000, stock: 4},
                    {   nombre: "Razer", precio: 9000, stock: 15}];
  const buscarNombre = productos.find(producto => producto.nombre === "MSI");
    console.log(buscarNombre);
  const productosBaratos = productos.filter(producto => producto.precio < 100000);
    console.log(productosBaratos);
  const aumentoStock = productos.map(producto => producto.stock += 10);
    console.log(aumentoStock);
  }

  finder()




 


