//Clase de productos. 
const store = document.querySelector('.store__products');

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

const msi = new Article ('msi', 'PC de escritorio: MSI', 155000, 'desktop', 3, `Procesador I5 de ultima generacion, con 16gb de RAM.`, );
const asus = new Article ('asus', 'PC de escritorio: Asus ROG', 200000, 'desktop', 2, "Procesador i7 de ultima generacion, con 32gb de RAM.");
const aorus = new Article ('aorus', 'PC de escritorio: Gigabyte Aorus', 270000, 'desktop', 2, "Procesador i9 de ultima generacion, con 32gb de RAM.");
const hp = new Article ('hp', 'Notebook HP Omen', 182500, 'notebooks', 4, "Agil y compacta para trabajar y jugar.");
const alienWare = new Article ('alienware', 'Notebook AlienWare', 330850, 'notebooks', 1, "Portatil echo para el gaming, con las ultimas tecnologias.");
const samsung = new Article ('samsung', 'Monitor Samsung', 22000, 'monitors', 3, "Monitor full HD y 60hz de refresco.");
const viewSonic = new Article ('viewsonic', 'Monitor ViewSonic 144HZ', 39000, 'monitors', 3, "Monitor full HD y 144hz de refresco.");
const hyperX = new Article ('hyperx', 'Headset HyperX', 11300, 'headsets', 5, "Sonido envolvente 7.1, y gran calidad de micrófono.");
const razer = new Article ('razer', 'Headset Razer', 15000, 'headsets', 6, "Sonido 7.1 junto a gran calidad de micrófono y construcción.");
const logitech = new Article ('logitech', 'Headset Logitech', 13000, 'headsets', 3, 'Sonido de gran calidad y micrófono excelente.' )

let articles = [msi, asus, aorus, hp, alienWare, samsung, viewSonic, hyperX, razer, logitech]; //Array de los productos creados.

const URLJSON  = "../db/data.json"
fetch(URLJSON)
.then(response => response.json())
.then( data => {
    console.log(data)
  })
$.get(URLJSON, (resp, est) => {
  if(est === "success") {
    let data = resp;
      console.log(data)     
  }
});


//Creamos los elementos que iran adentro de la tienda.
const create = () => {
articles.forEach(art => {
  
  const createEl = document.createElement('div');
  const createImg = document.createElement('img');
  const createP = document.createElement('p');
  const createCard = document.createElement('div');
  const createIcon = document.createElement('i');
  
  createEl.classList.add('store__products--item');
  createEl.id = art.id
  createEl.setAttribute('category', art.cat);
                                                   
  createImg.classList.add ('imgClass');
  createImg.src = `./assets/images/products/${art.id}.jpg`;
                                                   //Les asignamos las clases y atributos para que coincidan con las propiedades de la clase "Article".
  createP.innerHTML = ` ${art.name} <br /> <span>$${art.price}</span>`
  
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
}

export {
  create, articles
}