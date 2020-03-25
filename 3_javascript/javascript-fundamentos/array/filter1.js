const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

console.log(produtos.filter(function(p) {
    return p.fragil && p.preco > 25
}));

const fragil = produtos => produtos.fragil
const caro = produtos => produtos.preco >= 500

console.log(produtos.filter(fragil).filter(caro));

