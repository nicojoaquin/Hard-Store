$( document ).ready(function() {
  
//Variables
let item = $('.store__category--item');
let products = $('.store__products--item');
let showAll = $('.store__category--item[category="all"]');
const navMenu = document.getElementById('nav-menu');

// //Responsive menu 
$('#nav__hamburger').click(function () {
  $('.store__category').slideToggle();
  if($('i').attr('class') == 'uil uil-bars'){     //Cambiar icono al pulsar
  $('i').removeClass('uil uil-bars').addClass('uil uil-sorting');
  }                                                                     
  else{
    $('i').removeClass('uil uil-sorting').addClass('uil uil-bars'); 
  }
})

  //Cambiar color de los links
  showAll.addClass('active');
  item.click(function(){
    let catProduct = $(this).attr('category');
    item.removeClass('active');
    $(this).addClass('active');

    //Ocultar todos los productos
    function hideProduct(){
      products.hide();
      products.css('transform', 'scale(0)');
    } setTimeout(hideProduct, 100);

    //Mostrar cada producto
    function showProduct(){
      $(`.store__products--item[category=${catProduct}]`).show();
      $(`.store__products--item[category=${catProduct}]`).css('transform', 'scale(1)');
    } setTimeout(showProduct, 100);
  })

    //Mostrar todos los productos
    showAll.click(function(){
    function setAll(){
      products.show();
      products.css('transform', 'scale(1)');
    } setTimeout(setAll, 100);
    })
})
