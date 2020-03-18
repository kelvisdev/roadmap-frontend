const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) { // a e b vai passar como parametro para a funcao soma
    console.log(operacao(a, b));
}
imprimirResultado(3, 4) // 7
imprimirResultado(3, 4, soma) // 7
imprimirResultado(3, 4, function (x, y) { // -1
    return x - y;
})

imprimirResultado(3, 4, (x, y) => x * y) // com arrow sempre sera funcao anonima

const pessoa = {
    falar: function () {
        console.log('Opa');        
    }
}

pessoa.falar()