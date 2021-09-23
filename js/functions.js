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
const printTotal = (dt) => {
  let total = carrito.reduce((a, b) => a + b, 0);   //Sacamos el total de los elementos del array.

  document.querySelector('#total').textContent = `Total: $${ total }`         //Pintamos el total en el carrito y en el modal del checkout.
  
  document.querySelector('#formTotal').textContent = `Total: $${ total }`
  
  formSend()
}


//Formulario de compra.
const formSend = () => {

  const inputNombre = formulario.nombre
  const inputEmail = formulario.email

  document.querySelector('#formulario').addEventListener('submit', (e) => {

    e.preventDefault()
    document.querySelector('#dataLoader').classList.add('loader-show') 

    //Hacemos POST en la api de formulario
    fetch(`https://formsubmit.co/ajax/7e77fc1b7e4412f9635f9c5bdd658a0a`, {
      method: "POST",
      body: new FormData(e.target)
    })
    .then(res => res.ok? res.json : Promise.reject(res))
    .then(json => {    

      message(inputNombre, inputEmail)   
    })
    .catch(console.warn)
    
  })

}


//Mensaje de compra.
const message = (inputNombre, inputEmail) => {
  
  const checkoutModal = document.querySelector('.checkout-modal')
  const template = document.querySelector('#template').content
  const fragment = document.createDocumentFragment()

  template.querySelector('#nameSpan').textContent = inputNombre.value
  template.querySelector('#emailSpan').textContent = inputEmail.value

  let clone = document.importNode(template, true) 
  fragment.appendChild(clone)

  checkoutModal.innerHTML = ""
  checkoutModal.appendChild(fragment)

  setTimeout(() => {
    document.querySelector('.checked').style.opacity = 1
  },500)

  document.querySelector('#formClose').addEventListener('click' , () => {
    location.href = "../index.html";
  })

}


//Sacamos el total del carrito a medida que agregamos productos.
const totalFunction = (dt) => { 
  document.querySelector('.checkout-class').style.display = "block"
  dt.inCart += 1
  printTotal(dt)
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
          printTotal(dt)

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
      modal.classList.add('modalShow') 
    }

    document.querySelector('#modalClose').addEventListener('click', () => { 
      modal.classList.remove('modalShow')
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