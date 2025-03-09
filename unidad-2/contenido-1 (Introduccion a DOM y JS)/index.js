//--- Como funciona Javascript, como maneja las variables, los tipos de datos, etc ---//
console.log("Mi script esta corriendo!");

let variable_1 = 100;
let variable_2 = 200;

let variable_3 = "100";
let variable_4 = "200";

console.log(variable_1 + variable_2);
console.log(variable_3 + variable_4);
console.log(variable_1 + variable_4);

let variable_5;

variable_1 = "Hola"

console.log(variable_1);
//----------------------------------------------------------------------------------------//

//--- Declaro una simple funcion que mostrara una alerta ---//
function mostrarAlerta() 
{
    alert("Hola, soy una alerta")
}

//--- Declaro una simple funcion 2 que mostrara otra alerta ---//
function mostrarAlertaHolaMundo() 
{
    alert("Hola, soy una alerta 2 - Hola mundo, programacion III")
}

//--- Declaro una simple funcion 3 que mostrara una advertencia ---//
function mostrarAdvertencia() 
{
    alert("Hola, soy un mensaje de advertencia");
}

//--- Obtengo la referencia en JS de un elemento HTML mediante su ID ---//
let mi_boton = document.getElementById("btn-mostrar-alerta");
mi_boton.addEventListener("click", function (e) 
{
    //--- El prevent default, PREVIENE el comportamiento por DEFAULT del objeto referenciado 
    // Por ejemplo, si en un formulario el boton es de type="submit", al tocarlo, el comportamiento
    // por defecto, seria RECARGAR LA PAGINA, y quizas nosotros no queremos eso. Queremos customizar
    // pura y totalmente su comportamiento, en ese caso, debemos llamar al preventDefault para evitarlo ---//
    e.preventDefault();

    //--- Llamo a mi funcion ---//
    mostrarAlerta();

    //--- ¿Como hago para acceder/modificar el valor textual de los elementos? ---//
    let mi_parrafo_no_especial = document.getElementById("parrafo-no-especial");
    mi_parrafo_no_especial.innerText = mi_parrafo_no_especial.innerText + "\n\nAhora el texto del parrafo cambio";
});

//--- Obtengo la referencia de todos los elementos HTML de tipo "p" (parrafos) ---//
let mis_parrafos = document.querySelectorAll("p");
console.log(mis_parrafos);

//--- Obtengo la referencia de todos los elementos HTML con la clase "parrafos-especiales" ---//
let mis_parrafos_especiales = document.querySelectorAll(".parrafos-especiales");
console.log(mis_parrafos_especiales);

//--- Recorro mi listado de parrafos especiales y a todos les 
// asigno a su evento "click" la funcionalidad que desee ---//
mis_parrafos_especiales.forEach( (element) => 
{
    element.addEventListener("click", function (e) 
    {
        e.preventDefault();
        mostrarAlertaHolaMundo();
    });
})

//--- Vimos como declarar y asignar variables en JS 
//--- Vimos como funcionan los tipos de datos en JS, vimos que no es un lenguaje exigente en terminos de tipos de datos
//--- Vimos como declarar una funcion en JS
//--- Vimos como obtener la referencia de un objeto en JS por su ID
//--- Vimos como obtener la referencia de varios objetos iguales (parrafos) o distintos pero con la misma clase
//--- Vimos como acceder y modificar el texto de un elemento ---//
//--- Vimos como asignar un comportamiento a uno o varios objetos del HTML ya sea por referencia (clase/id) o desde el mismo HTML 