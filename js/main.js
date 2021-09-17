//Variables.
const main = document.body;
const form = document.querySelector('#finder'),
      input = document.querySelector('#input');

const mainBars = document.querySelector('#mainBars'),
      newBars = document.querySelector('#newBar'),
      menu = document.querySelector('#mainMenu');  


//Menu principal

mainBars.addEventListener('click', () => {

//Al hacer click en las barras, se agrega una nueva clase y aparece el menu.
  menu.classList.add('menuShow');
  main.classList.add('newBody');
  mainBars.classList.remove('bars');
  main.style.overflow="hidden"
})


//Al hacer click en las cruz o en un link, se elimina la clase agregada y desaparece el menu.
const close = () => {
  menu.classList.remove('menuShow');
  main.classList.remove('newBody');
  mainBars.classList.add('bars');
  main.style.overflow="auto"
}
newBars.addEventListener('click', close)

menu.addEventListener('click', (e) => {
  if(e.target.tagName === 'A'){
    close()
  } 
})

  
//Buscador
form.addEventListener('submit', (e) => {                     //Busca la palabra escrita en el input.
  e.preventDefault();
  console.log(input.value.toLowerCase());                    //Imprime en la consola la palabra escrita .
  input.value = ''                                           //Vacia el campo.
})

  



