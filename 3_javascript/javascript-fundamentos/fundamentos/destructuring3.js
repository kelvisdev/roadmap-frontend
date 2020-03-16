function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor);
}

const obj = { min: 40, max: 50}
console.log(rand(obj)); // exemplo 1
console.log(rand({ min: 10, max: 20})); // exemplo 2
console.log(rand({ max: 20, min: 10})); // exemplo 3
console.log(rand({ min: 955})); // exemplo 4
console.log(rand({ max: 85})); // exemplo 5
console.log(rand({}));  // exemplo 6 - vai assumir os valores padroes da função

/*
    vai dar um erro
    pois na funcao ele vai tentar desestruturar um objeto que não existe
    console.log(rand());
*/ 


