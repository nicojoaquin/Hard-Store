//Alertas personalizadas.
  
//Se ejecuta cuando agregamos un producto.
export function addAlert(articulo) {
    Swal.fire({
      title: "Agregado!",
      html: `Has agregado el artículo: <strong>${articulo}</strong>`,
      icon: "success",
      confirmButtonText: 'Aceptar',
      customClass: {
        htmlContainer: 'htmlContainer-class'
       },
      confirmButtonColor: 'blue'
     })
  }
      
  //Se ejecuta cuando no hay mas stock.
  export function cantAlert() {
    swal.fire({
      title: "No hay mas stock!",
       text: "Por favor, elija otro artículo.",
       icon: "error",
       confirmButtonText: 'Aceptar',
       customClass: {
           htmlContainer: 'htmlContainer-class'
       },
      confirmButtonColor: 'blue'
    })
  } 