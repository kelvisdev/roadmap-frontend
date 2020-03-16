
// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);    
}

imprimirSoma(2, 3)
imprimirSoma(2) // undefined => 2 + undefined = NaN
imprimirSoma(2, 3, 4, 5)// So pega os dois valores e ignora o resto
imprimirSoma() // undefined

// Funcao com retorno
function soma(a, b= 1) {
    return a + b
}

console.log(soma(2, 3)); // 5
console.log(soma(2)); // 2, usou o valor padrao
console.log(soma()); // NaN, porque nao foi passado o primeiro parametro

