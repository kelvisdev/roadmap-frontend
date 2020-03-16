// par nome/valor
const saudacao = 'Opa' // contexto léxio 1 

function exec() {
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua da Divisão',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);

