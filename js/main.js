$( document ).ready(function() {
  
//Variables
const item = $('.store__category--item');
const products = $('.store__products--item');
const showAll = $('.store__category--item[category="all"]');
let car = document.getElementById('car');
let carShow = document.getElementById('carScreen')

// //Responsive menu 
$('#nav__hamburger').click(function () {
  $('.store__category').slideToggle(); //Se desplaza el menu
  if($('#ham').attr('class') == 'uil uil-bars'){     //Cambia icono al pulsar el boton
    $('#ham').removeClass('uil uil-bars').addClass('uil uil-arrow-up');
  } 
  else {
    $('#ham').removeClass('uil uil-arrow-up').addClass('uil uil-bars');
  }                                                               
  item.click(function(){
    $('.store__category').slideUp();
    $('#ham').removeClass('uil uil-bars').addClass('uil uil-arrow-up'); //Cambia icono y cierra el menu al pulsar el link
    $('#ham').removeClass('uil uil-arrow-up').addClass('uil uil-bars');
  })
})

//Carrito
car.addEventListener('click', () => {
  carShow.classList.add('carShow')
})
document.getElementById('times').addEventListener('click', () => {
  carShow.classList.remove('carShow');
})

  //Cambia color de los links
  showAll.addClass('active');
  item.click(function(){
    let catProduct = $(this).attr('category');
    item.removeClass('active');
    $(this).addClass('active');

    //Oculta todos los productos
    function hideProduct(){
      products.hide();
      products.css('transform', 'scale(0)');
    } setTimeout(hideProduct, 100);

    //Muestra cada producto
    function showProduct(){
      $(`.store__products--item[category=${catProduct}]`).show();
      $(`.store__products--item[category=${catProduct}]`).css('transform', 'scale(1)');
    } setTimeout(showProduct, 100);
  })

    //Muestra todos los productos
    showAll.click(function(){
    function setAll(){
      products.show();
      products.css('transform', 'scale(1)');
    } setTimeout(setAll, 100);
    })
})
