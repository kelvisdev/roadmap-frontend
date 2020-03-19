// soma vai funcionar, pq as funcoes sao carregadas antes, mas a sub e a mult somente podem chamar depois
console.log(soma(3, 4)); 

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}