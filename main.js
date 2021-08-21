//Función de validación
let year = 2021;
const OLD = 18;
let name1 = prompt ("¿Cual es tu nombre?");
let age = parseInt (prompt ("Año de nacimiento"));
let answer = parseInt((year - age));
let elements = [  {nombre: "PC", precio: 105000, stock: 8},
                  {nombre: "Notebook", precio: 90000, stock: 4},
                  {nombre: "Monitor", precio: 40000, stock: 15},
                  {nombre: "Headset", precio: 12000, stock: 11}];
                  
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
  const COST = (price) => {
    conf = parseInt(prompt("Costo: " + price + "\nDesea comprar?\n1-Si\n2-No"));
  }
  const SURE = (a) => {
    if(conf == 1) {
      return `Gracias por comprar el articulo ${articles[a].slice(1)}`; 
      }
    else if (conf == 2) {
      return "Siga navegando";
      }
    else  {
      return"Elija una opción correcta"
      }
     }
  let articles = ["1: PC", "2: Notebook", "3: Monitor", "4: Headset"];
  let quote = "Elije un articulo para comprar:"
  let choose = parseInt(prompt(quote + "\n" + articles.join("\n")));
  const reduce = (product) => {
    for (let i = 0; i < elements.length; i++) {
    if (elements[i].nombre == product & conf ==1) {
      elements[i].stock -= 1;           
    }
  }
    console.log(elements);
  }
  switch(choose) {
    case 1:
      COST("$105000");
      reduce("PC")
      return SURE(0);
      
    case 2:
      COST("$92000");
      reduce("Notebook")
      return SURE(1);
      
    case 3:
      COST("$44000");
      reduce("Monitor")
      return SURE(2);
      
    case 4:
      COST("$11000");
      reduce("Headset")
      return SURE(3);
      
    default:
      alert("Elije una opcion correcta");
   }
}

//Función de busqueda
function finder() {
  const productos = [{  nombre: "MSI", precio: 105000, stock: 8},
                    {   nombre: "Alienware", precio: 90000, stock: 4},
                    {   nombre: "Razer", precio: 9000, stock: 15}];
  const buscarNombre = productos.find(product => product.nombre === "MSI");
    console.log(buscarNombre);
  const productosBaratos = productos.filter(product => product.precio < 100000);
    console.log(productosBaratos);
  const aumentoStock = productos.map(product => product.stock += 10);
    console.log(aumentoStock);
  }
finder()

//Constructor
class Article{
  constructor(nombre, precio, stock) {
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;
  }
}
const asus = new Article("Asus", 155000, 5);
const HP = new Article("HP", 83500, 13);
const viewsonic = new Article("Viewsonic", 44000, 15);
const hyperx = new Article("Hyperx" , 11000, 31);
console.log(asus);
console.log(HP);
console.log(viewsonic);
console.log(hyperx);


 


