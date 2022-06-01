const process = require("process");
const sumar = require("./sumar");
const restar = require("./restar");
const multiplicar = require("./multiplicar");
const dividir = require("./dividir");
const porcentaje = require("./porcentaje");

const operacion = process.argv[2]
const num1 = parseInt(process.argv[3])
const num2 = parseInt(process.argv[4])

let resultado;

switch (operacion) {
    case "+":
        resultado = sumar (num1,num2)
        break
    case "-":
        resultado = restar (num1, num2)
        break
    case "*":
        resultado = multiplicar (num1, num2)
        break
    case "/":
        resultado = dividir (num1, num2)
        break
    default: 
        resultado = "Agregá una acción válida"
 }

 console.log(resultado)