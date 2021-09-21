import { addAlert, cantAlert } from './alerts.js'

const store = document.querySelector('.store__products');
const carScreen = document.querySelector('#carScreen'),
counter = document.querySelector('#counter'),
car = document.querySelector('#car');
const form = document.querySelector('#finder'),
input = document.querySelector('#input');
let carrito = [];
let totalC = []


//Mostrar carrito
const showCar = () => {
car.addEventListener('click', () => {
  carScreen.classList.toggle('carShow');
  
  if(carScreen.classList.contains('carShow')){
    document.body.style.overflowY = "hidden"
  } else {
    document.body.style.overflowY = "auto"
  }
})
}


//Eliminar articulo del carrito.
const removeItem = () => {  

  carScreen.addEventListener('click', (e) => {

  const  element = e.target.parentElement.parentElement.parentElement;

  if( e.target.localName.includes('i')) {


    carScreen.removeChild(element)
    sessionStorage.setItem('Carrito', JSON.stringify(carScreen.innerHTML));

    let productNumbers = parseInt(sessionStorage.getItem("cart"));
    sessionStorage.setItem('cart', productNumbers - 1)
    counter.textContent -= 1

    
    const totalCounter = document.querySelector('#total')
    console.log(totalC)  

    if (totalC.length === 0) {                 //Si el array esta vacío, el total es 0.
      totalCounter.textContent = `Total: $0`
    }

  }

})

}


//Agrega al carrito al hacer click.
const buyEvent = (dt) => {
  
  store.addEventListener('click', (e) =>{
    if(e.target.id == dt.id){ 
      
      if (dt.stock > 0) {
        const producto = e.target.parentElement.parentElement  
        const items = dt.price
        totalC.push(items)
        totalFunction();
        addAlert(dt.name);
        cartNumbers(); //Sumamos el carrito cuando clickeamos en un producto.
        stockSub(dt)
        htmlCar(producto, dt)
        addCartFunction(producto)  
      } else {
        cantAlert();
        throw 'No hay mas stock!';
      } 
    } 
  })

}
  

//Storage del contador del carrito.
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
   
  
//Función que restan el stock del producto.    
const stockSub = (dt) => {
  dt.stock -= 1;     //Resta el stock.
  console.log(dt);
  sessionStorage.setItem(dt.id, JSON.stringify(dt)); 
}


//Crea el producto en el carrito.
const htmlCar = (producto, dt) => {
  const name = producto.querySelector('span').textContent
  const precio = producto.querySelector('.price').textContent
  const id = producto.getAttribute('id')

  carScreen.innerHTML += `
                <div class = "carrito-div">
                <img class= "carrito-img" src="./assets/images/products/${producto.id}.jpg" alt="">
                <p class = "carrito-p">${name}
                <br />
                <span>${precio}<span>
                <br />
                <p>                                           
                <button><i id = "${id}" class="fas fa-times-circle fa-2x"></i></button>              
                </div>
               `

  sessionStorage.setItem('Carrito', JSON.stringify(carScreen.innerHTML));
}
  
//Carrito en el storage.
const loadhtml = () => {
  let carhtml =  JSON.parse(sessionStorage.getItem('Carrito'));
  
  
  if(carhtml) {
    carScreen.innerHTML = carhtml;
  } 
}
 
//Agregar al array del carrito.
const addCartFunction = (producto) => {
  carrito.push(producto);
  console.log(carrito) 
};


//Sacamos el total del carrito a medida que agregamos productos.
const totalFunction = () => { 

  const totalMoney = totalC.reduce(function(total,items){
      total += items;
      return total
    },0)

  const totalCounter = document.querySelector('#total')
  totalCounter.textContent = `Total: $${totalMoney}`
  sessionStorage.setItem('total', JSON.stringify(totalC))

}


//Buscador
const finder = (data) => {

  form.addEventListener('submit', (e) => {        //Busca la palabra escrita en el input.
    e.preventDefault();  
    const search = data.find ( prod => prod.id === input.value.toLowerCase())
    console.log(search);
    input.value = ''                              //Vacia el campo.
  })
}


  export {
    showCar, 
    buyEvent,
    loadCart,
    loadhtml,
    finder,
    removeItem
    
  }