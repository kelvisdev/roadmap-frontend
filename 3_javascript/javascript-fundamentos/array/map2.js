const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços
precos = carrinho
    .map(c => JSON.parse(c))
    .map(c => c.preco);

console.log(precos); 

// Exemplo 2
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map(paraObjeto).map(apenasPreco);

console.log(resultado); 