const operaciones = {
    suma: function (a, b){
        return a + b 
    },

    resta: function (a, b){
        return a - b 
    },

    multiplicacion: function (a, b){
        if ((a == 0)  || (b == 0)) {
            return 0
        } else {
            return a * b
        }     
    },
 
    division: function  (a, b){
        if (b == 0) {
            return "No se puede dividir por 0"
        } else {
            return a / b
        }         
    },

    porcentaje: function (total, porcent){
        return (total * porcent) / 100
    }
} 

module.exports = operaciones

