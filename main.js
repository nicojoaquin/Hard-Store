// //Variables
$( document ).ready(function() {

let active = document.getElementById('activeClass');
let item = $('.store__category--item');
let products = $('.store__products--item');
let showAll = $('.store__category--item[category="all"]');
const navMenu = document.getElementById('nav-menu');

// //Responsive menu 
$('#nav__hamburger').click(function () {
  $('.store__category').slideToggle();
})

// //Change menu
function links(element, remove){
  item.click(function(){
    element.classList.remove(remove);
    let catProduct = $(this).attr('category');
    console.log(catProduct);

//     //Ocultar todo
    function hideProduct(){
      products.hide();
      products.css('transform', 'scale(0)');
    } setTimeout(hideProduct, 100);

//     //Mostrar cada producto
    function showProduct(){
      $(`.store__products--item[category=${catProduct}]`).show();
      $(`.store__products--item[category=${catProduct}]`).css('transform', 'scale(1)');
    } setTimeout(showProduct, 100);
  })
//     //Mostrar todos los productos
    showAll.click(function(){
    function setAll(){
      products.show();
      products.css('transform', 'scale(1)');
    } setTimeout(setAll, 100);
    })

}
links(navMenu, 'show_menu')
links(active, 'active');
})
