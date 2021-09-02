//Variables
const form = document.querySelector('#finder'),
      input = document.querySelector('#input');
const products = document.querySelectorAll('.store__products--item'),
      counter = document.querySelector('#counter'),
      carScreen = document.querySelector('#carScreen');

let cartNumber = 1

//Buscador
form.addEventListener('submit', (e) => {                     //Busca la palabra escrita en el input.
  e.preventDefault();
  console.log(input.value.toLowerCase());                    //Imprime en la consola la palabra escrita .
  input.value = ''                                           //Vacia el campo.
})

//Simulacion de compra.
class Article{
    constructor(id, price, stock) { 
    this.id = id;
    this.price = price;
    this.stock = stock;
  }
}

//Elementos a crear
const msi = new Article('PC MSI', `$${155000}`, 3,);
const asus =  new Article('PC Asus', `$${133200}`, 7);
const hp = new Article("Notebook HP", `$${174600}`, 6) 
const alienWare = new Article("Notebook AlienWare", `$${410000}`, 2) ;
const samsung = new Article("Monitor Samsung", `$${22300}`, 4) 
const viewSonic = new Article("Monitor Viewsonic", `$${44000}`, 5);
const razer = new Article("Headset Razer" , `$${17500}`, 9) 
const hyperx = new Article("Headset Hyperx" , `$${11000}`, 8);

let elements = [msi, asus, hp, alienWare, samsung, viewSonic, razer, hyperx];  //Listamos los elementos para utilizarlos.

//Función de compra.
for (let i = 0; i < products.length; i++) {
  products[i].addEventListener('click', (e) => {
    e.preventDefault();

  if(elements[i].stock > 0){
    let clone = products[i].cloneNode(true)
    carScreen.appendChild(clone);
    counter.textContent = cartNumber++    //Sumamos el carrito cuando clickeamos en un producto,
  } else{
      throw 'No hay mas stock!'             //Si no queda stock del producto, la funcion no sigue.
    }

    stockSub(elements[i])                   
  })
}

////Función que resta el stock del producto.
const stockSub = (el) => {
    el.stock -= 1
    console.log(el)   
  }

