// Por referencia
const pessoa = {
    name: 'Kelvis'
}
pessoa2 = pessoa;
pessoa2.name = 'Pedro'

// Por valor
let a = 50
let b = a
b = 40

let valor
console.log(valor);

valor = null; // ausencia de valor, nao aponta pra algum objeto na memoria
console.log(valor);
// console.log(valor.toString()); // erro!

const produto = {}
console.log(produto.preco);
console.log(produto);
    
produto.preco = 3.50
console.log(produto);

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco);
// delete produto.preco
console.log(produto);

produto.preco = null // sem preco
console.log(!!produto.preco);
console.log(produto);








