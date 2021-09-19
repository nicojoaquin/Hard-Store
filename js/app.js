import { addAlert, cantAlert } from './alerts.js'
import { queryFunction } from './query.js'

//Variables
const store = document.querySelector('.store__products');
const carScreen = document.querySelector('#carScreen'),
      counter = document.querySelector('#counter'),
      car = document.querySelector('#car');
const form = document.querySelector('#finder'),
      input = document.querySelector('#input');


//Creamos los elementos que iran adentro de la tienda.
const create = (dt) => {

    const createEl = document.createElement('div');
    const createImg = document.createElement('img');
    const createP = document.createElement('p');
    const createCard = document.createElement('div');
    const createIcon = document.createElement('i');
    
    createEl.classList.add('store__products--item');
    createEl.id = dt.id
    createEl.setAttribute('category', dt.cat);
                                                     
    createImg.classList.add ('imgClass');
    createImg.src = `./assets/images/products/${dt.id}.jpg`;
                                                     //Les asignamos las clases y atributos para que coincidan con las propiedades de la clase "Article".
    createP.innerHTML = ` ${dt.name} <br /> <span>$${dt.price}</span>`
    
    createCard.classList.add('card-container')
    createCard.innerHTML = `${dt.desc}<hr>`;
    
    createIcon.classList.add('addCart');
    createIcon.classList.add("fas", "fa-cart-plus", "fa-3x");
    createIcon.setAttribute('id', dt.id);  
    
    //Agregamos los elementos creados con sus clases y propiedades, al HTML.
    store.append(createEl);
    createEl.append(createImg); 
    createEl.append(createP);
    createEl.append(createCard) 
    createCard.append(createIcon);
  
  
  }


//Mostrar carrito
car.addEventListener('click', () => {
	carScreen.classList.toggle('carShow');

    if(carScreen.classList.contains('carShow')){
    document.body.style.overflowY = "hidden"
    } else {
    document.body.style.overflowY = "auto"
   	}
})


//Llamando a mi "API" de productos.
const URLJSON  = "../db/data.json"

fetch(URLJSON)
.then(resp => resp.json())
.then(data => {
  data.forEach ( dt =>  {    
  	create(dt) 

		//Agrega al carrito al hacer click.  
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
		loadhtml()
    
  
		//Agregar al array del carrito.
		let carrito = [];
    
		const addCartFunction = (e) => {
  		carrito.push(e);
  		console.log(carrito)
		};


		//Buscador
		form.addEventListener('submit', (e) => {        //Busca la palabra escrita en el input.
  		e.preventDefault();
  
  		const articulos = data;    
  		const productSearch = articulos.find(prod => prod.id === input.value.toLowerCase());
  		console.log(productSearch)
	
	  	input.value = ''                              //Vacia el campo.
		})

	})

	queryFunction()

})







