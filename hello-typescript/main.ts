var minhaVar = 'Minha Variavel';
/*
function minhaFunc(x, y) {
    return x + y;
}
*/
//ES 6 ou Es2015

let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 4;
});

numeros.map(valor => valor * 2) // ES 2015

class Matematica {
    soma(x, y) {
        return x + y;
    }
}

