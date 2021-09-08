//Variables.
const main = document.body;
const store = document.querySelector('.store__products');
const form = document.querySelector('#finder'),
      input = document.querySelector('#input');

const carScreen = document.querySelector('#carScreen'),
      counter = document.querySelector('#counter'),
      car = document.querySelector('#car');    

const mainBars = document.querySelector('#mainBars'),
      newBars = document.querySelector('#newBar'),
      menu = document.querySelector('#mainMenu');  


//Menu principal

mainBars.addEventListener('click', () => {

//Al hacer click en las barras, se agrega una nueva clase y aparece el menu.
  menu.classList.add('menuShow');
  main.classList.add('newBody');
  mainBars.classList.remove('bars');
  main.style.overflow="hidden"
})


//Al hacer click en las cruz o en un link, se elimina la clase agregada y desaparece el menu.
const close = () => {
  menu.classList.remove('menuShow');
  main.classList.remove('newBody');
  mainBars.classList.add('bars');
  main.style.overflow="auto"
}
newBars.addEventListener('click', close)

menu.addEventListener('click', (e) => {
  if(e.target.tagName === 'A'){
    close()
  } 
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

  
//Creador de productos. 
class Article {
  constructor (id, name, price, cat, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.cat = cat
    this.stock = stock
  }
}
const msi = new Article ('msi', 'Pc de escritorio: MSI', `$155000`, 'desktop', 3);
const asus = new Article ('asus', 'Pc de escritorio: Asus Rog', `$270000`, 'desktop', 2);
const aorus = new Article ('aorus', 'Pc de escritorio: Gigabyte Aorus', '$240000', 'desktop', 2);
const hp = new Article ('hp', 'Notebook HP Omen', `$182500`, 'notebooks', 4);
const alienWare = new Article ('alienware', 'Notebook AlienWare', `$330850`, 'notebooks', 1);
const samsung = new Article ('samsung', 'Monitor Samsung', `$22000`, 'monitors', 3);
const viewSonic = new Article ('viewsonic', 'Monitor ViewSonic 144HZ', `$39000`, 'monitors', 3);
const hyperX = new Article ('hyperx', 'Headset HyperX', `$11300`, 'headsets', 5);
const razer = new Article ('razer', 'Headset Razer', `$15000`, 'headsets', 6);

let articles = [msi, asus, aorus, hp, alienWare, samsung, viewSonic, hyperX, razer,]; //Array de los productos creados.

articles.forEach(art => {
 
//Creamos los elementos que iran adentro de la tienda.  
const createEl = document.createElement('div');
const createImg = document.createElement('img');
const createP = document.createElement('p');
const createH3 = document.createElement('h3');

createEl.classList.add('store__products--item');
createEl.setAttribute('category', art.cat);
                                                 
createImg.classList.add ('imgClass');
createImg.src = `./assets/images/${art.id}.jpg`;
                                                 //Les asignamos las clases y atributos para que coincidan con las propiedades de la clase "Article".
createP.innerHTML = ` ${art.name} <br /> <span>${art.price}</span>`

createH3.classList.add('addCart');
createH3.setAttribute('id', art.id);  
createH3.textContent = 'Agregar al carrito';

//Agregamos los elementos creados con sus clases y propiedades, al HTML.
store.append(createEl);  
createEl.append(createImg); 
createEl.append(createP);
createEl.append(createH3);
});


//Alertas personalizadas.

//Se ejecuta cuando agregamos un producto.
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
  
//Se ejecuta cuando no hay mas stock.
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

  
//Funciónes que restan el stock del producto y agregan carrito en storage
  
const stockSub = (el) => {
  el.stock -= 1      //Resta el stock.
  console.log(el)   
}
  
const cartNumbers = () => {
  let productNumbers = parseInt(sessionStorage.getItem("cart"));  //Almacenamos el valor del storage.
  
  if(productNumbers){
    sessionStorage.setItem('cart', productNumbers + 1); //Si ya existe el valor, al hacer click, se suma uno.
    counter.textContent = productNumbers + 1
  } else{
    sessionStorage.setItem('cart', 1);  //Obtenemos del storage la cantidad 1 en el carrito al crear el storage.
    counter.textContent = 1;
  }
}
  
const loadCart = () => {  //Al recargar la pagina, sigue el valor del carrito con el mismo valor del storage.
  let productNumbers = parseInt(sessionStorage.getItem("cart"));
  
  if(productNumbers) {
    counter.textContent = productNumbers;
  }
}
loadCart();

  
//Agrega al carrito al hacer click.
store.addEventListener('click', (e) =>{
  articles.forEach(el => {

    if(e.target.tagName === 'H3' && e.target.id == el.id){   

      if (el.stock > 0 ) {
        addAlert(el.name);
        stockSub(el);
        cartNumbers(); //Sumamos el carrito cuando clickeamos en un producto.
        
      } else {
        cantAlert();
        throw 'No hay mas stock!';
      }

    }

  })
})

