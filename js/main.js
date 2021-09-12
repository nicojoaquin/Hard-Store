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
  carScreen.classList.toggle('carShow')
  if(carScreen.classList.contains('carShow')){
  document.body.style.overflowY = "hidden"
  }
 else {
  document.body.style.overflowY = "auto"
 }
})




//Creador de productos. 
class Article {
  constructor (id, name, price, cat, stock, desc) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.cat = cat
    this.stock = stock
    this.desc = desc
    
  }
}
const msi = new Article ('msi', 'PC de escritorio: MSI', `$155000`, 'desktop', 3, `Procesador I5 de ultima generacion, con 16gb de RAM.`, );
const asus = new Article ('asus', 'PC de escritorio: Asus ROG', `$200000`, 'desktop', 2, "Procesador i7 de ultima generacion, con 32gb de RAM.");
const aorus = new Article ('aorus', 'PC de escritorio: Gigabyte Aorus', '$270000', 'desktop', 2, "Procesador i9 de ultima generacion, con 32gb de RAM.");
const hp = new Article ('hp', 'Notebook HP Omen', `$182500`, 'notebooks', 4, "Agil y compacta para trabajar y jugar.");
const alienWare = new Article ('alienware', 'Notebook AlienWare', `$330850`, 'notebooks', 1, "Portatil echo para el gaming, con las ultimas tecnologias.");
const samsung = new Article ('samsung', 'Monitor Samsung', `$22000`, 'monitors', 3, "Monitor full HD y 60hz de refresco.");
const viewSonic = new Article ('viewsonic', 'Monitor ViewSonic 144HZ', `$39000`, 'monitors', 3, "Monitor full HD y 144hz de refresco.");
const hyperX = new Article ('hyperx', 'Headset HyperX', `$11300`, 'headsets', 5, "Sonido envolvente 7.1, y gran calidad de micrófono.");
const razer = new Article ('razer', 'Headset Razer', `$15000`, 'headsets', 6, "Sonido 7.1 junto a gran calidad de micrófono y construcción.");

let articles = [msi, asus, aorus, hp, alienWare, samsung, viewSonic, hyperX, razer]; //Array de los productos creados.

articles.forEach(art => {

//Creamos los elementos que iran adentro de la tienda.  
const createEl = document.createElement('div');
const createImg = document.createElement('img');
const createP = document.createElement('p');
const createCard = document.createElement('div');
const createIcon = document.createElement('i');

createEl.classList.add('store__products--item', 'wow', 'animate__animated', 'animate__slideInUp');
createEl.setAttribute('category', art.cat);
                                                 
createImg.classList.add ('imgClass');
createImg.src = `./assets/images/${art.id}.jpg`;
                                                 //Les asignamos las clases y atributos para que coincidan con las propiedades de la clase "Article".
createP.innerHTML = ` ${art.name} <br /> <span>${art.price}</span>`

createCard.classList.add('card-container')
createCard.innerHTML = `${art.desc}<hr>`;

createIcon.classList.add('addCart');
createIcon.classList.add("fas", "fa-cart-plus", "fa-3x");
createIcon.setAttribute('id', art.id);  

//Agregamos los elementos creados con sus clases y propiedades, al HTML.
store.append(createEl);
createEl.append(createImg); 
createEl.append(createP);
createEl.append(createCard) 
createCard.append(createIcon);
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
  el.stock -= 1;     //Resta el stock.
  console.log(el);
  sessionStorage.setItem(el.id, JSON.stringify(el)); 
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

carrito = [];
  
const addCartFunction = (e) => {
  const findProducts = articles.find(element => element.id === e.target.id);
  carrito.push(findProducts);
  console.log(carrito)
};
  
  
  //Agrega al carrito al hacer click.
articles.forEach(el => {
    
  store.addEventListener('click', (e) =>{
      
    if(e.target.tagName === 'I' && e.target.id == el.id){ 
        
      if (el.stock > 0) {
        addAlert(el.name);
        stockSub(el)
        cartNumbers(); //Sumamos el carrito cuando clickeamos en un producto.
        addCartFunction(e)
  
        carScreen.innerHTML += `
                <div class = "carrito-div">
                <img class= "carrito-img" src="./assets/images/${el.id}.jpg" alt="">
                <p class = "carrito-p">${el.name}
                <br />
                <span>${el.price}<span>
                <p>
                </div>
                <hr />`

      } else {
        cantAlert();
        throw 'No hay mas stock!';
      } 
    }    
  })
})


