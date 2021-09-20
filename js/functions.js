import { addAlert, cantAlert } from './alerts.js'

const store = document.querySelector('.store__products');
const carScreen = document.querySelector('#carScreen'),
      counter = document.querySelector('#counter'),
      car = document.querySelector('#car');
const form = document.querySelector('#finder'),
      input = document.querySelector('#input');
      let carrito = [];


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

//Agrega al carrito al hacer click.
const buyEvent = (dt) => {
 
  store.addEventListener('click', (e) =>{
    if(e.target.id == dt.id){ 
    
      if (dt.stock > 0) {
        addAlert(dt.name);
        cartNumbers(); //Sumamos el carrito cuando clickeamos en un producto.
        stockSub(dt)
        htmlCar(dt)
        addCartFunction(dt)
  
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
const htmlCar = (dt) => {
  carScreen.innerHTML += `
                <div class = "carrito-div">
                <img class= "carrito-img" src="./assets/images/products/${dt.id}.jpg" alt="">
                <p class = "carrito-p">${dt.name}
                <br />
                <span>$${dt.price}<span>
                <p>
                </div>
                <hr />`
  
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
const addCartFunction = (e) => {
  carrito.push(e);
  console.log(carrito)
};
  

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
    finder
  }