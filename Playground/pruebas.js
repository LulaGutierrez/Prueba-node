/* 
reduce()
Nos dejaron un array con las vueltas que dio una corredora entrenando en distintos momentos para una 
maratón.

Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, usando el método 
reduce.


Dame una pista
El método reduce devuelve un único valor según la condición dada.
*/

let vueltas = [5, 8, 12, 3, 22]

let totalVueltas = vueltas.reduce(function(acumulador, numero){
    return acumulador + numero
})

console.log(totalVueltas)