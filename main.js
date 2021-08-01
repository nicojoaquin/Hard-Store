let actual = 2021;
// const edadMayor = 18;

let nombre = prompt ("¿Cual es tu nombre?");
let respuesta = "Hola " + nombre;
// console.log (respuesta);

let edad = parseInt (prompt ("Año de nacimiento"));
let respuesta2 = nombre + " tiene " + (actual - edad) + " años";
let respuesta3 = parseInt((actual - edad));
console.log (respuesta2);
if(respuesta3 > edadMayor){
    alert("Bienvenido " + nombre + "!");
    console.log("Bienvenido " + nombre + "!");
} else if(respuesta3 == edadMayor){
    alert("Accedes con lo justo!");
    console.log("Accedes con lo justo!");
} else {
    alert("Para acceder a este contenido tenes que ser mayor de edad");
    console.log("Para acceder a este contenido tenes que ser mayor de edad");
}

