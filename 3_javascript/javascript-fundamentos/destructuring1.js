// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
console.log(pessoa);

const { nome, idade } = pessoa
console.log(nome, idade);

const { nome: n, idade: i } = pessoa
console.log(n, 1);

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada);

const { endereco } = pessoa
console.log(endereco);

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep);

// tem que garantir que um dado esteja aninhado para desestruturar, pq senão vai dar um erro
const { conta: { ag, conta } } = pessoa
console.log(ag, conta);