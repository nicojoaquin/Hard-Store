 //Función de validación
 
 let actual = 2021;
 const edadMayor = 18;
 let nombre = prompt ("¿Cual es tu nombre?");
 let edad = parseInt (prompt ("Año de nacimiento"));
 let respuesta3 = parseInt((actual - edad));

 function edadAcceso() {
 if (respuesta3 > edadMayor) {
 return "Bienvenido " + nombre + "!";
 }
 else {
 return "Tienes que ser mayor de edad para acceder";
}
 }
alert(edadAcceso());


//Función de calculadora
if(respuesta3 > edadMayor) {
let a = parseInt(prompt("Primer numero"))
let operacion =prompt('Ingrese signo de operación: "+", "-", "*", "/"'); 
let b = parseInt(prompt("Segundo numero"))

const calc = (a, b,) => {
switch(operacion) {
case operacion = "+":
    return a + b;

case operacion = "-":
    return a - b;

case operacion = "*":
    return a * b;

case operacion = "/":
    return a / b;

default: 
   alert("Ingrese una operacion valida");
}
}
console.log(calc(a, b));
}