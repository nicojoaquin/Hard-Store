//Articulos
class Article{
  constructor(nombre, precio, stock) {
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;
  }
}
let asus = new Article("PC Asus", 155000, 5);
let HP = new Article("Notebook HP", 83500, 13);
let viewsonic = new Article("Monitor Viewsonic", 44000, 15);
let hyperx = new Article("Headset Hyperx" , 11000, 31);
let elements = [asus, HP, viewsonic, hyperx];   
console.log(elements); 

//Función de validación
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
function buy () {
  alert(`Bienvenido ${name1}!`);
  let articles = ["1: PC Asus", "2: Notebook HP", "3: Monitor Viewsonic", "4: Headset Hyperx"];
  let quote = "Elije un articulo para comprar:";
  let choose = parseInt(prompt(quote + "\n" + articles.join("\n")));
  const COST = (price) => {
    conf = parseInt(prompt("Costo: " + price + "\nDesea comprar?\n1-Si\n2-No"));
  }
  const SURE = (a) => {
    if(conf == 1) {
      return `Gracias por comprar el articulo: ${elements[a].nombre}`; 
      }
    else if (conf == 2) {
      return "Siga navegando";
      }
    else  {
      return"Elija una opción correcta";
      }
     }
  const reduce = (el) => {
    if (conf == 1) {
      elements[el].stock -= 1;           
    }
  }
  switch(choose) {
    case 1:
      COST("$155000");
      reduce(0);
      return SURE(0);
      
    case 2:
      COST("$83500");
      reduce(1);
      return SURE(1);
      
    case 3:
      COST("$44000");
      reduce(2);
      return SURE(2);
      
    case 4:
      COST("$11000");
      reduce(3);
      return SURE(3);
      
    default:
      alert("Elije una opcion correcta");
   }
}

//Función de busqueda
function finder() {
  const productos = [{  nombre: "MSI".toUpperCase(), precio: 105000, stock: 8},
                    {   nombre: "Alienware".toUpperCase(), precio: 90000, stock: 4},
                    {   nombre: "Razer".toUpperCase(), precio: 9000, stock: 15}];
  const condicionDeBusqueda = (entrada, resultado) => {
    if (entrada != undefined) {
      console.log(resultado);
    }
    else {
      console.log("No se encuentra");
  }
}
  let finder = prompt("Ingrese el nombre del producto");
  const buscarNombre = productos.find(product => product.nombre === finder.toUpperCase());
  condicionDeBusqueda(finder, buscarNombre);

  let filter = parseInt(prompt("Ingrese el precio a filtrar (menor)"));
  const productosBaratos = productos.filter(product => product.precio < filter);
  condicionDeBusqueda(filter, productosBaratos);

  let aumento = parseInt(prompt("Aumentar stock"));
  const aumentoStock = productos.map(product => product.stock += aumento);
  condicionDeBusqueda(aumento, aumentoStock);
}
  finder();

  
  







 


