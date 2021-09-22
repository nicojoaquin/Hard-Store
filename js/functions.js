import { addAlert, cantAlert } from './alerts.js'


//Variables.
const store = document.querySelector('.store__products'),
      carScreen = document.querySelector('#carScreen'),
      counter = document.querySelector('#counter'),
      input = document.querySelector('#input'),
      modal = document.querySelector('.modal__container');
      
let carrito = [];


//Mostrar carrito
const showCar = () => {
  document.querySelector('#car').addEventListener('click', () => {
  carScreen.classList.toggle('carShow');
  
  if(carScreen.classList.contains('carShow')) {
    document.body.style.overflowY = "hidden"
  } else {
    document.body.style.overflowY = "auto"
  }
})
}


//Buscador
const finder = (data) => {

  document.querySelector('#finder').addEventListener('submit', (e) => {        //Busca la palabra escrita en el input.
    e.preventDefault();  
    const search = data.find ( prod => prod.id === input.value.toLowerCase())
    console.log(search);
    input.value = ''                              //Vacia el campo.
  })
}


//Función que dibuja el total.
const printTotal = () => {
  let total = carrito.reduce((a, b) => a + b, 0);   //Sacamos el total de los elementos del array.

  document.querySelector('#total').textContent = `Total: $${ total }`         //Pintamos el total en el carrito y en el modal del checkout.
  
  document.querySelector('.checkout-modal').innerHTML = `
                                                          <i
                                                          id="modalClose"
                                                          style="color: red; cursor: pointer"
                                                          class="fas fa-window-close fa-3x"></i>                                   
                                                          <h1 style= "color: black">Total: $${total}</h1>
                                                        `   
}


//Sacamos el total del carrito a medida que agregamos productos.
const totalFunction = (dt) => { 
  document.querySelector('.checkout-class').style.display = "block"
  dt.inCart += 1
  printTotal()
}


//Eliminar articulo del carrito.
const removeItem = (dt) => {  

  carScreen.addEventListener('click', (e) => {
    const  element = e.target.parentElement.parentElement.parentElement;
    
    if( e.target.classList.contains('removeIcon')) {
      dt.inCart -= 1
      carScreen.removeChild(element)         //Eliminamos el elemento del carrito, y restamos el contador.
      counter.textContent -= 1

      for ( let i = 0; i < carrito.length; i++) {

        if (e.target.id == carrito[i]  ) {
          carrito.splice(i, 1)                 //Nuevo array que elimina los elementos elegidos
          printTotal()

          if(carrito.length == 0) {
            document.querySelector('.checkout-class').style.display = "none"
          }                                                                                            
        }

      }
         
    }

  })

}


//Muestra el producto en el carrito.
const htmlCar = (producto, dt) => {
  const name = producto.querySelector('span').textContent
  const precio = producto.querySelector('.price').textContent
  
  carScreen.innerHTML +=  `
                            <div class = "carrito-div">
                            <img class= "carrito-img" src="./assets/images/products/${producto.id}.jpg" alt="">
                            <p class = "carrito-p">${name}
                            <br />
                            <span class = "carrito-price">${precio}<span>
                            <br />
                            <p>                                           
                            <button><i id = "${dt.price}" class="fas fa-times-circle fa-2x removeIcon"></i></button>              
                            </div>
                          `
}


//Function  que muestra el modal.
const modalCar = () => {
  
  carScreen.addEventListener ('click', (e) => {
  
    if(e.target.localName.includes('h3')) {
      carScreen.classList.remove('carShow');  //Cerramos el carrito al abrir el modal.
      modal.style.transform = "scale(1)";                                                          
    }

    document.querySelector('#modalClose').addEventListener('click', () => { 
      modal.style.transform = "scale(0)";
      document.body.style.overflowY = "auto";
    })
  
  })
}


//Agregar al array del carrito.
const addCartFunction = () =>  counter.textContent = carrito.length //El contador del icono es igual a la longitud del array.


//Función que restan el stock del producto.    
const stockSub = (dt) => dt.stock -= 1; 


//Agrega al carrito al hacer click.
const buyEvent = (dt) => {
  
  store.addEventListener('click', (e) =>{
    if(e.target.id == dt.id){ 
      
      if (dt.stock > 0) {
        const producto = e.target.parentElement.parentElement  
        carrito.push(dt.price);                             //Agregamos el precio del producto, al array.

        addAlert(dt.name);
        totalFunction(dt);
        removeItem(dt)
        htmlCar(producto, dt)
        modalCar()
        addCartFunction(dt) 
        stockSub(dt)

      } else {
        cantAlert();
        throw 'No hay mas stock!';
      } 

    } 
  })

}
     

  export {
    showCar, 
    finder,
    buyEvent
  }