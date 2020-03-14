const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d // operador binario n + n, op in-fix
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, divisao, modulo);
console.log(soma, subtracao, multiplicacao, -divisao, modulo); // aplicando op unario    
    
let z = 10;
console.log(z++) // post fix
console.log(++z) // pre fix
console.log(-z)// op unário, em cima de um unico operador

