//Buscador
let form = document.getElementById('finder');
let input = document.getElementById('input');

form.addEventListener('submit', (e) => {  //Busca la palabra escrita en el input
  e.preventDefault();
  let formulario = e.target;
  let value = formulario.input.value;
  console.log(value); //Imprime en la consola la palabra escrita 
});

//Simulacion de compra
class Article{
    constructor(id, price, stock) { 
    this.id = id;
    this.price = price;
    this.stock = stock;
  }
}

//Elementos a crear
const desktop = [new Article('PC MSI', `$${155000}`, 3,), new Article('PC Asus', `$${133200}`, 7)];
const notebook = [new Article("Notebook HP", `$${174600}`, 6), new Article("Notebook AlienWare", `$${410000}`, 2) ];
const monitor = [new Article("Monitor Samsung", `$${22300}`, 4), new Article("Monitor Viewsonic", `$${44000}`, 5)];
const headset = [new Article("Headset Razer" , `$${17500}`, 9), new Article("Headset Hyperx" , `$${11000}`, 8)];

let elements = [desktop, notebook, monitor, headset];  //Listamos los elementos para utilizarlos

//Funcion que imprime en la consola cada articulo que presionamos
function evento(article, a, b) {
  console.log(elements[a][b]);
  document.getElementById(article).addEventListener('click', () => {
    while (elements[a][b].stock > 0) {
      let ask = parseInt(prompt(`Precio: ${elements[a][b].precio}\nDesea comprar?\n1: Si`))  //Confirmacion de compra 
      if (ask === 1) {
        elements[a][b].stock -= 1                                     
        console.log(elements[a][b]); //Cuando confirmarmos la compra con "1", se resta el stock
        break;
      }
      else {
        break;
      }
    }   
    if (elements[a][b].stock <1) {
    console.log('No hay mas stock!'); //Si el producto ya no tiene stock, se imprime en la pantalla, y no se puede comprar mas
    }
  })
}
    
evento('pc', 0, 0);
evento('pc2', 0, 1);
evento('notebook', 1, 0);
evento('notebook2', 1, 1);
evento('monitor', 2, 0);
evento('monitor2', 2, 1);
evento('headset', 3, 0);
evento('headset2', 3, 1);

