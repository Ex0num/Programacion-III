//--- Tomo la referencia de mis inputs de mi formulario ---//
let ref_input_nombre = document.getElementById("nombre");
let ref_input_edad = document.getElementById("edad");
let ref_input_genero = document.getElementById("genero");
let ref_input_mensaje = document.getElementById("mensaje");

let ref_input_radio_nacionalidad_arg = document.getElementById("nacionalidad-argentina");
let ref_input_radio_nacionalidad_extr = document.getElementById("nacionalidad-extranjera");

let ref_input_terms_y_cond = document.getElementById("input-aceptar-terminos-y-condiciones");

console.log(ref_input_nombre);
console.log(ref_input_edad);
console.log(ref_input_genero);
console.log(ref_input_mensaje);
console.log(ref_input_radio_nacionalidad_arg);
console.log(ref_input_radio_nacionalidad_extr);
console.log(ref_input_terms_y_cond);

console.log("--------------------------------");

//--- Obtengo el valor del atributo "value" escrito en el html y el value escrito ---//
let valor_nombre = ref_input_nombre.getAttribute("value");
let valor_nombre_escrito = ref_input_nombre.value;

console.log(valor_nombre);
console.log(valor_nombre_escrito);

//--- Obtengo y valido el valor de cada uno de mis inputs ---//
function validarNombre() 
{
    let ref_input_nombre = document.getElementById("nombre");
    let valor_nombre_escrito = ref_input_nombre.value

    //--- Me fijo si es minimamente valido ---//
    if (!valor_nombre_escrito) 
    {
        return false;
    }

    //--- Valido que el nombre tenga entre 2 y 32 caracteres y no contenga números ---//
    if (valor_nombre_escrito.length < 2 ||  valor_nombre_escrito.length > 32 ||  /\d/.test(valor_nombre_escrito)) 
    {
        return false;
    }
    
    return true;
}

function validarEdad() 
{
    let ref_input_edad = document.getElementById("edad");
    let valor_edad = ref_input_edad.value;

    //--- Valido que la edad no sea menor a 18 ---//
    //--- Valido que la edad no sea mayor a 110 ---//
    if (valor_edad < 18 || valor_edad > 110)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function validarGenero() 
{
    let ref_input_genero = document.getElementById("genero");
    let valor_genero = ref_input_genero.value;

    //--- Valido que el genero elegido no sea un valor disinto a "masculino, femenino u otro". desconsiderando las mayusculas ---//
    if (valor_genero.toLowerCase() != "masculino" && valor_genero.toLowerCase() != "femenino" && valor_genero.toLowerCase() != "otro")
    {
        return false;
    }
    else
    {
        return true;
    }
}

function validarMensaje() 
{
    let ref_input_mensaje = document.getElementById("mensaje");
    let valor_mensaje = ref_input_mensaje.value;

    //--- Me fijo si es minimamente valido ---//
    if (!valor_mensaje) 
    {
        return false;
    }

    //--- Valido que el mensaje elegido sea menor a 300 caracteres ---//
    if (valor_mensaje.length < 10 && valor_mensaje.length > 300)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function validarNacionalidad() 
{
    let ref_input_nacionalidades = document.querySelectorAll(".input-radios");
    let valor_nacionalidad = null;

    ref_input_nacionalidades.forEach((element) => 
    {
        if (element.checked) 
        {
            valor_nacionalidad = element.value;
        }
    });

    //--- Me fijo si es minimamente valido ---//
    if (!valor_nacionalidad) 
    {
        return false;
    }

    //--- Me fijo si es distinta de los valores aceptados ---//
    if (valor_nacionalidad.toLowerCase() != "argentina" && valor_nacionalidad.toLowerCase() != "extranjera")
    {
        return false;
    }
    else
    {
        return true;
    }
}

function validarTerminos() 
{
    let ref_input_terms_y_cond = document.getElementById("input-aceptar-terminos-y-condiciones");

    //--- Me fijo si el campo checked esta en true ---//
    if (!ref_input_terms_y_cond.checked) 
    {
        return false;
    }

    return true;
}

//------------------------------------//
function enviarFormulario() 
{
    //--- Uso a todas mis funciones validadoras ---//
    let resultado_validacion_nombre = validarNombre();
    let resultado_validacion_edad = validarEdad(); 
    let resultado_validacion_genero = validarGenero(); 
    let resultado_validacion_mensaje = validarMensaje(); 
    let resultado_validacion_nacionalidad = validarNacionalidad(); 
    let resultado_validacion_terminos = validarTerminos(); 

    console.log(resultado_validacion_nombre);
    console.log(resultado_validacion_edad);
    console.log(resultado_validacion_genero);
    console.log(resultado_validacion_mensaje);
    console.log(resultado_validacion_nacionalidad);
    console.log(resultado_validacion_terminos);

    //--- Si todas las validaciones salieron bien... ---//
    if (resultado_validacion_nombre && resultado_validacion_edad && resultado_validacion_genero && resultado_validacion_mensaje && resultado_validacion_nacionalidad && resultado_validacion_terminos)
    {   
        let ref_card_table_body = document.getElementById("tbody-personas");

        //--- Creo un nuevo elemento TR (fila) de manera dinamica en el codigo ---//
        let nueva_fila = document.createElement("tr");

        //--- Creo nuevos elementos TD (celdas) de manera dinamica en el codigo ---//
        let nueva_celda_nombre = document.createElement("td");
        let nueva_celda_edad = document.createElement("td");
        let nueva_celda_genero = document.createElement("td");
        let nueva_celda_nacionalidad = document.createElement("td");
        let nueva_celda_mensaje = document.createElement("td");

        //--- Obtuve nuevamente mis valores de inputs (como hicimos en la funcion validadora) 
        // pero a su correspondiente nueva celda, le escribire sobre textContent ---//
        let ref_input_nombre = document.getElementById("nombre");
        let valor_nombre_escrito = ref_input_nombre.value;
        nueva_celda_nombre.textContent = valor_nombre_escrito;

        let ref_input_edad = document.getElementById("edad");
        let valor_edad = ref_input_edad.value;
        nueva_celda_edad.textContent = valor_edad;

        let ref_input_genero = document.getElementById("genero");
        let valor_genero = ref_input_genero.value;
        nueva_celda_genero.textContent = valor_genero;

        let ref_input_mensaje = document.getElementById("mensaje");
        let valor_mensaje = ref_input_mensaje.value;
        nueva_celda_mensaje.textContent = valor_mensaje;

        let ref_input_nacionalidades = document.querySelectorAll(".input-radios");
        let valor_nacionalidad = null;
        ref_input_nacionalidades.forEach((element) => 
        {
            if (element.checked) 
            {
                valor_nacionalidad = element.value;
            }
        });
        nueva_celda_nacionalidad.textContent = valor_nacionalidad;

        //--- Ya teniendo todas las celdas listas, las agrego a su correspondiente fila (padre) ---//
        nueva_fila.appendChild(nueva_celda_nombre);
        nueva_fila.appendChild(nueva_celda_edad);
        nueva_fila.appendChild(nueva_celda_genero);
        nueva_fila.appendChild(nueva_celda_nacionalidad);
        nueva_fila.appendChild(nueva_celda_mensaje);

        //--- Ya teniendo la fila lista, la voy a agregar a su correspondiente tabla (padre) ---//
        ref_card_table_body.appendChild(nueva_fila);
    }
}

function limpiarTabla() 
{
    let ref_card_table_body = document.getElementById("tbody-personas");

    while (ref_card_table_body.firstChild) 
    {
        ref_card_table_body.removeChild(ref_card_table_body.firstChild);
    }

    console.log("Tabla limpiada.");
}

function limpiarUltRegistroTabla() 
{
    let ref_card_table_body = document.getElementById("tbody-personas");
    ref_card_table_body.removeChild(ref_card_table_body.lastChild)
    console.log("Ultimo registro en tabla eliminado.");
}

//--- Validacion de formulario, repasamos como extraer datos, y como validar los inputs mas comunes/usados (acceder al .checked, .value...)
//--- Vemos como podemos manipular HTML desde JS dinamicamente agregando/eliminando (appendChild, deleteChild) elementos HTML dinamicamente ---//