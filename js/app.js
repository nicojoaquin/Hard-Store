//Variables
const main = document.body;
const form = document.querySelector('#finder'),
      input = document.querySelector('#input');

const productos = document.querySelector('.store__products');

const carScreen = document.querySelector('#carScreen'),
      counter = document.querySelector('#counter'),
      car = document.getElementById('car');    
let cartNumber = 1

const mainBars = document.querySelector('#mainBars'),
      newBars = document.querySelector('#newBar'),
      menu = document.querySelector('#mainMenu');  

//Menu principal
mainBars.addEventListener('click', () => {
  menu.classList.add('menuShow');
  main.classList.add('newBody');
  mainBars.classList.remove('bars');
  main.style.overflow="hidden"
})
newBars.addEventListener('click', () => {
  menu.classList.remove('menuShow')
  main.classList.remove('newBody');
  mainBars.classList.add('bars');
  main.style.overflow="auto"
})

//Buscador
form.addEventListener('submit', (e) => {                     //Busca la palabra escrita en el input.
  e.preventDefault();
  console.log(input.value.toLowerCase());                    //Imprime en la consola la palabra escrita .
  input.value = ''                                           //Vacia el campo.
})

//Carrito
car.addEventListener('click', () => {
  carScreen.classList.add('carShow')
})
document.getElementById('times').addEventListener('click', () => {
  carScreen.classList.remove('carShow');
})

//Simulacion de compra.
class Article{
    constructor(id, name, price, stock) { 
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

//Elementos a crear
const msi = new Article('msi', 'PC de escritorio MSI', `$${155000}`, 3,);
const asus =  new Article('asus', 'PC de escritorio Asus ROG',  `$${133200}`, 2);
const hp = new Article("hp", 'Notebook HP Omen', `$${174600}`, 4) 
const alienWare = new Article("alienWare", 'Notebook Alienware', `$${410000}`, 2) ;
const samsung = new Article("samsung", 'Monitor Samsung', `$${22300}`, 4) 
const viewSonic = new Article("viewSonic", 'Monitor Viewsonic 144hz', `$${44000}`, 5);
const razer = new Article("razer" , 'Headset Razer', `$${17500}`, 5) 
const hyperx = new Article("hyperx" , 'Headset Hyperx', `$${11000}`, 4);

let elements = [msi, asus, hp, alienWare, samsung, viewSonic, razer, hyperx];  //Listamos los elementos para utilizarlos.

//Alerta que se ejecuta cuando agregamos un producto.
function addAlert(articulo) {
  Swal.fire({
    title: "Agregado!",
    html: `Has agregado el artículo: <strong>${articulo}</strong>`,
    icon: "success",
    confirmButtonText: 'Aceptar',
    customClass: {
      htmlContainer: 'htmlContainer-class'
    },
    confirmButtonColor: 'blue'
  })
}

//Alerta que se ejecuta cuando no hay mas stock.
function cantAlert() {
  swal.fire({
    title: "No hay mas stock!",
    text: "Por favor, elija otro artículo.",
    icon: "error",
    confirmButtonText: 'Aceptar',
    customClass: {
      htmlContainer: 'htmlContainer-class'
    },
    confirmButtonColor: 'blue'
  })
}   

////Función que resta el stock del producto.
const stockSub = (el) => {
    el.stock -= 1
    console.log(el)   
  }

//Agrega al carrito al hacer click.
productos.addEventListener('click', (e) =>{
  e.preventDefault();

  elements.forEach(elem => {
    if(e.target.tagName === 'H3' && e.target.id == elem.id){      
      if (elem.stock > 0 ) {
        addAlert(elem.name)
        stockSub(elem)
        counter.textContent = cartNumber++    //Sumamos el carrito cuando clickeamos en un producto.
      } else {
        cantAlert();
        throw 'No hay mas stock!'
      }
    }
  });  
})


  

  