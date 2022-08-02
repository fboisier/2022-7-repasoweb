function saludar() {
    console.log("HOLA");
}

saludar();
saludar();
saludar();
saludar();


function saludarNombre(nombre) {
    console.log("HOLA " + nombre);
}

saludarNombre("FRANCISCO");
saludarNombre("PANCHO");

function sumar(a, b) {
    var salida = a + b;
    return salida;
}

var resultado = sumar(5, 10);
console.log(resultado);