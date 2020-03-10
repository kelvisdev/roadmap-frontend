const nome = 'Kelvis'

const concatenacao = 'Olá '+ nome + '!'

const template = `
    Olá ${nome}!
`

console.log(concatenacao, template);
console.log(`1 + 1 = ${1 + 1}`); // só interpreta e faz calculo o que tiver dentro do {}

const up = texto => texto.toUpperCase();
console.log(`Ei...  ${up('cuidado')}!`);

