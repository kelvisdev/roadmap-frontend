// Factory Simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa());


// Factory Composto
function criarProduto(nome, preco) {
    return {
        name: nome,
        price: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49));
console.log(criarProduto('iPad', 1199.49));
