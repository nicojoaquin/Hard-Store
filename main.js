// let nombre = "Nicolás";
// var alumno = "Nico";
// var cantAlumnos = 80;
// var noInicializada;
// const CURSO = "js";
// alert (nombre);


// var num1 = 2;
// var num2 = 3;

// var resultado = num1 + num2;
// alert (resultado)

// var resta = num1 - num2;

// alert (resta);

// var multiplicacion = num1 * num2;

// alert (multiplicacion);

// var cadena1 = " Coder";
// var cadena2 = " House";

// var resultadoCadenas = cadena1 + cadena2;

// alert (resultadoCadenas);

// var resultado2 = "Hola" + cadena1;
 
// alert (resultado2);

// console.log (resultado2);

let actual = 2021;
const edadMayor = 18;

let nombre = prompt ("¿Cual es tu nombre?");
let respuesta = "Hola " + nombre;
alert (respuesta);
console.log (respuesta);

let edad = parseInt (prompt ("Año de nacimiento"));
let respuesta2 = nombre + " tiene " + (actual - edad) + " años";
let respuesta3 = parseInt((actual - edad));
alert (respuesta2);
console.log (respuesta2);
if(respuesta3 < edadMayor){
    alert("Para acceder a este contenido tenes que ser mayor de edad");
    console.log("Para acceder a este contenido tenes que ser mayor de edad");
} else if(respuesta3 == edadMayor){
    alert("Accedes con lo justo!");
    console.log("Accedes con lo justo!");
} else {
    alert("Bienvenido " + nombre + "!");
    console.log("Bienvenido " + nombre + "!");
}

