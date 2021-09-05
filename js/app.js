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
    constructor(id, price, stock) { 
    this.id = id;
    this.price = price;
    this.stock = stock;
  }
}

//Elementos a crear
const msi = new Article('msi', `$${155000}`, 3,);
const asus =  new Article('asus', `$${133200}`, 7);
const hp = new Article("hp", `$${174600}`, 6) 
const alienWare = new Article("alienWare", `$${410000}`, 2) ;
const samsung = new Article("samsung", `$${22300}`, 4) 
const viewSonic = new Article("viewSonic", `$${44000}`, 5);
const razer = new Article("razer" , `$${17500}`, 9) 
const hyperx = new Article("hyperx" , `$${11000}`, 8);

let elements = [msi, asus, hp, alienWare, samsung, viewSonic, razer, hyperx];  //Listamos los elementos para utilizarlos.


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
        stockSub(elem)
        counter.textContent = cartNumber++    //Sumamos el carrito cuando clickeamos en un producto.
      }
    }
  });  
})


  

  