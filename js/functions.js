import { addAlert, cantAlert } from './alerts.js'

const store = document.querySelector('.store__products'),
      carScreen = document.querySelector('#carScreen'),
      counter = document.querySelector('#counter'),
      car = document.querySelector('#car'),
      form = document.querySelector('#finder'),
      input = document.querySelector('#input'),
      modal = document.querySelector('.modal__container');
      
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
        const producto = e.target.parentElement.parentElement  
        carrito.push(dt.price);                             //Agregamos el precio del producto, al array.
        console.log(carrito)

        addAlert(dt.name);
        totalFunction(dt);
        removeItem(dt)
        stockSub(dt)
        htmlCar(producto, dt)
        addCartFunction(dt) 
        modalCar()
      } else {
        cantAlert();
        throw 'No hay mas stock!';
      } 
    } 
  })

}
   
  
//Función que restan el stock del producto.    
const stockSub = (dt) => {
  dt.stock -= 1;   
}


//Muestra el producto en el carrito.
const htmlCar = (producto, dt) => {
  const name = producto.querySelector('span').textContent
  const precio = producto.querySelector('.price').textContent
  
  carScreen.innerHTML +=    `
                <div class = "carrito-div">
                <img class= "carrito-img" src="./assets/images/products/${producto.id}.jpg" alt="">
                <p class = "carrito-p">${name}
                <br />
                <span class = "carrito-price">${precio}<span>
                <br />
                <p>                                           
                <button><i id = "${dt.price}" class="fas fa-times-circle fa-2x"></i></button>              
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
const addCartFunction = () => { counter.textContent = carrito.length} //El contador del icono es igual a la longitud del array.


//Sacamos el total del carrito a medida que agregamos productos.
const totalFunction = (dt) => { 
  dt.inCart += 1
  let total = carrito.reduce((a, b) => a + b, 0);  //El total va a ser un nuevo array con la suma de todos sus elementos.

  const totalCounter = document.querySelector('#total')    
  totalCounter.textContent = `Total: $${ total }`       //Pintamos el total en el carrito y en el modal del checkout.                                               
  
  document.querySelector('.checkout-modal').innerHTML = `
                                                        <i
                                                        id="modalClose"
                                                        style="color: red; cursor: pointer"
                                                        class="fas fa-window-close fa-3x"></i>                                   
                                                        <h1 style= "color: black">Total: $${total}</h1>
                                                        `

  document.querySelector('.checkout-class').style.display = "block"

}


//Eliminar articulo del carrito.
const removeItem = (dt) => {  

  carScreen.addEventListener('click', (e) => {
    const  element = e.target.parentElement.parentElement.parentElement;
    
    if( e.target.localName.includes('i')) {
      dt.inCart -= 1
      carScreen.removeChild(element)         //Eliminamos el elemento del carrito, y restamos el contador.
      counter.textContent -= 1

      for ( let i = 0; i < carrito.length; i++) {

        if (e.target.id == carrito[i]  ) {
          carrito.splice(i, 1)                 //Nuevo array que elimina los elementos elegidos
          let total = carrito.reduce((a, b) => a + b, 0);   //Sacamos de vuelta el total.

          const totalCounter = document.querySelector('#total')
          totalCounter.textContent = `Total: $${ total }`         //Pintamos el total en el carrito y en el modal del checkout.
          
          document.querySelector('.checkout-modal').innerHTML = `
                                                        <i
                                                        id="modalClose"
                                                        style="color: red; cursor: pointer"
                                                        class="fas fa-window-close fa-3x"></i>                                   
                                                        <h1 style= "color: black">Total: $${total}</h1>
                                                        `    
                                                        
          if(carrito.length == 0) {
            document.querySelector('.checkout-class').style.display = "none"
          }                                                                                            
        }

      }
         
    }
  })

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
    finder   
  }