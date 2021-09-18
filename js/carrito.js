import {create, articles} from './products.js'
import {addAlert, cantAlert} from './alerts.js'

create();

//Variables
const store = document.querySelector('.store__products');
const carScreen = document.querySelector('#carScreen'),
      counter = document.querySelector('#counter'),
      car = document.querySelector('#car'); 

      
//Mostrar carrito
car.addEventListener('click', () => {
    carScreen.classList.toggle('carShow')
    if(carScreen.classList.contains('carShow')){
    document.body.style.overflowY = "hidden"
    }
   else {
    document.body.style.overflowY = "auto"
   }
  })


//Agrega al carrito al hacer click.
articles.forEach(el => {
      
  store.addEventListener('click', (e) =>{
    if(e.target.id == el.id){ 
      
			if (el.stock > 0) {
        addAlert(el.name);
        cartNumbers(); //Sumamos el carrito cuando clickeamos en un producto.
        stockSub(el)
        htmlCar(el)
        addCartFunction(el)
  
      } else {
        cantAlert();
        throw 'No hay mas stock!';
      } 
    } 

  })
	
})


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
loadCart();


//Función que restan el stock del producto.    
const stockSub = (el) => {
  el.stock -= 1;     //Resta el stock.
  console.log(el);
  sessionStorage.setItem(el.id, JSON.stringify(el)); 
}

  
//Crea el producto en el carrito.
const htmlCar = (el) => {
  carScreen.innerHTML += `
                  <div class = "carrito-div">
                  <img class= "carrito-img" src="./assets/images/products/${el.id}.jpg" alt="">
                  <p class = "carrito-p">${el.name}
                  <br />
                  <span>$${el.price}<span>
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
loadhtml()
    
  
//Agregar al array del carrito.
let carrito = [];
    
const addCartFunction = (e) => {
  carrito.push(e);
  console.log(carrito)
};
    

