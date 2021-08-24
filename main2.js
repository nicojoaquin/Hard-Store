const navMenu = document.getElementById('nav-menu');
const navClick = document.getElementById('nav__hamburger');
         
  navClick.addEventListener('click' , () =>{
    navMenu.classList.toggle('show_menu')
})

