//Responsive menu 
let active = document.getElementById('activeClass');
let item = document.getElementsByClassName('store__category--item');
const navMenu = document.getElementById('nav-menu');
const navClick = document.getElementById('nav__hamburger');

navClick.addEventListener('click', () => {
  navMenu.classList.toggle('show_menu')
})

//Color change menu
function links(index, element, remove){
  for (let i = index; i < item.length; i++){
    item[i].addEventListener('click', () =>{
      element.classList.remove(remove);
    })
    }
}
links(0, navMenu, 'show_menu')
links(1, active, 'active');