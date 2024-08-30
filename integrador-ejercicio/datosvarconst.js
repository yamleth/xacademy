//números (number)

let numeroEntero =  10;
let numeroDecimal = 3.14;
let resultado = numeroEntero + numeroDecimal; //13.14
console.log(resultado);

//cadena de textos (string)
let nombre ="Juan";
let apellido ='Pérez';
let saludo = "Hola " + nombre + " " + apellido; // "Hola Juan Pérez"
console.log(saludo);

//boolenos (boolean)
let esMayorDeEdad = true;
let tieneLicencia = false;
let puedeConducir = esMayorDeEdad && tieneLicencia; //false
console.log(puedeConducir);

//undefined se utiliza para representar una variable que no ha sido definida
let variableSinValor;
console.log(variableSinValor);


//null se utilizxa para representar la ausencia de un valor
let objeto = null;
console.log(objeto);

//arreglos (array)
let numeros = [1,2,3,4,5];
let colores = ["rojo", "verde", "azul"]
let datos = [1, "Juan", "true"]
console.log(numeros[2]);//3

//objetos
let persona ={
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre + " " + this.apellido);
    }
}
console.log(persona.nombre);//Juan
persona.saludar();//"Hola, mi nombre es Juan Pérez"

//funciones
function sumar (numero1, numero2) {
    return numero1 + numero2;
}
let resultados = sumar (3, 5);
console.log(resultados);


//let se utiliza para declarar variable que pueden cambiar su valor en el tiempo
let mensaje = "Hola";
mensaje = "Hola mundo"
console.log(mensaje);

/*if(true){
    let variableDentroDelIf = 2;
}
console.log(variableDentroDelIf);//error: variableDentroDelIf no accesible
aqui no hay variable declarada */

//const  
//se utiliza para declarar variables que solo estan disponibles dentro de un mismo bloque
/*const PI=3.14159
PI = 3.14    este ejemplo da error*/

//var
var mensajes = "Hola";
var mensajes = "Hola mundo"
console.log(mensaje);

if(true){
    variableDentroDelIf = 2;
}
console.log(variableDentroDelIf);

