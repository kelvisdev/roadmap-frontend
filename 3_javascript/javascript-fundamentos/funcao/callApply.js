function getPreco(imposto  = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;        
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

// console.log(getPreco()); // NaN


global.preco = 20
global.desc = 0.1
console.log(getPreco());

console.log(produto.getPreco());

const carro = { preco: 4990, desc: 0.20 }
console.log(getPreco.call(carro)); // call e pra passar por parametro o contexto senao ele vai dar NaN
console.log(getPreco.apply(carro));

// diferença entre call e apply
console.log(getPreco.call(carro, 0.17, '$')); // passar o contexto e depois os outros parametros
console.log(getPreco.apply(global, [0.17, '$'])); // passa o contexto e depois os outros parametros por array

