// pessoa => 123 => { ... }
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa);

// pessoa => 456 => { ... } 
// pessoa = { nome: 'Ana' } // vai dar erro porque a pessoa ja foi criada na memoria

 
// congela objeto
Object.freeze(pessoa)
pessoa.nome = 'Maria' // ignora, essa linha pq ta congelado
pessoa.end = 'Rua ABC' // ignora, essa linha pq ta congelado
delete pessoa.nome // ignora, essa linha pq ta congelado

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria' // ignora, essa linha pq ta congelado
console.log(pessoaConstante);

