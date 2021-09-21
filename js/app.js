import  {showCar, buyEvent, loadCart, loadhtml, finder, removeItem } from './functions.js'
import { queryFunction } from './query.js'

showCar();
loadCart();
loadhtml();
removeItem()





//Variables
const store = document.querySelector('.store__products');


//Creamos los elementos que iran adentro de la tienda.
const create = (dt) => {
  store.innerHTML +=  `
                        <div class="store__products--item" id="${dt.id}" category="${dt.cat}">
                          <img class="imgClass" src="./assets/images/products/${dt.id}.jpg">
                          <p> <span>${dt.name}</span> <br> <span class = "price">$${dt.price}</span></p>
                          <div class="card-container">${dt.desc}
                            <hr>
                            <i class="addCart fas fa-cart-plus fa-3x" id="${dt.id}"></i>
                          </div>
                        </div>
                      `                      
}


//Llamando a mi "API" de productos.
const URLJSON  = "https://my-json-server.typicode.com/nicojoaquin/fakeAPI/articulos"

const getALL = async () => {
await fetch(URLJSON)
.then(resp =>  resp.json())
.then(async data => {

 await Promise.all(data.map(dt => create(dt))) 

  data.forEach ( dt =>  {   
    buyEvent(dt) 
    queryFunction() 
  })

  finder(data)
  
})  

//Crear un nuevo producto.
let options = {
  method: 'POST',
  body: JSON.stringify({
    id: 'redragon',
    name: 'Headset Redragon',
    price: 5400,
    cat: 'headsets',
    stock: 7,
    desc: "Auriculares ecónomicos de excelente calidad.",
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
}
 fetch(URLJSON, options)
.then((resp) => resp.json())
.then(   data => {

  create(data)
  buyEvent(data)
  queryFunction()
 });
}

document.addEventListener('DOMContentLoaded', getALL)


